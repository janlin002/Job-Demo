[官網連結](https://beta.reactjs.org/learn/responding-to-events)

這個章節主要是在介紹 Event handler

有幾個重點:
1. 如果沒有傳遞參數給function的話，可以不加 ()

```js
<button onClick={handleClick}>
    Click me
</button>
```

2. 如果需要傳遞參數的話，需改成arrow-function
```js
<button onClick={()=>handleClick('123')}>
    Click me
</button>
```

3. 下面這種方式會在 rendering 期間，自動觸發
```js
<button onClick={handleClick()}>
    Click me
</button>
```

## Passing event handlers as props

簡單來說就是把 function 當作 props 做傳遞，一整個 callback function 的概念

> By convention, event handler props should start with `on`, followed by a capital letter.

官網有特別提到，如果想要客製化 event handler 的話，記得在 function 前面加上 `on`

```js
function Button({ onSmash, children }) {
  return (
    <button onClick={onSmash}>
      {children}
    </button>
  );
}

export default function App() {
  return (
    <div>
      <Button onSmash={() => alert('Playing!')}>
        Play Movie
      </Button>
      <Button onSmash={() => alert('Uploading!')}>
        Upload Image
      </Button>
    </div>
  );
}

```

## Event propagation
後面有提到冒泡跟捕獲事件

對於 捕獲冒泡 不清楚的可以看[這篇文章](https://hackmd.io/@Heidi-Liu/note-fe201-dom)

以下方程式碼來看，當我們點擊任何按鈕，都會有兩個 message，那是因為 bubbles 時，觸發到了 `<div className="Toolbar" />`


```js
export default function Toolbar() {
  return (
    <div className="Toolbar" onClick={() => {
      alert('You clicked on the toolbar!');
    }}>
      <button onClick={() => alert('Playing!')}>
        Play Movie
      </button>
      <button onClick={() => alert('Uploading!')}>
        Upload Image
      </button>
    </div>
  );
}
```

這時候，如果想要阻止這樣的事情發生，我們可以使用`e.stopPropagation()`，去阻止冒泡

> All events propagate in React except onScroll, which only works on the JSX tag you attach it to.

onScroll 由於本身就沒有冒泡事件，所以除了他其他都有可能需要加上`e.stopPropagation()`

```js
function Button({ onClick, children }) {
  return (
    <button onClick={e => {
      e.stopPropagation();
      onClick();
    }}>
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div className="Toolbar" onClick={() => {
      alert('You clicked on the toolbar!');
    }}>
      <Button onClick={() => alert('Playing!')}>
        Play Movie
      </Button>
      <Button onClick={() => alert('Uploading!')}>
        Upload Image
      </Button>
    </div>
  );
}
```

## Preventing default behavior
某些瀏覽器事件具有與之關聯的默認行為。例如，一個 <form> 提交事件，當它裡面的一個按鈕被點擊時發生，默認情況下會重新加載整個頁面，這時候我們會需要用到 `e.preventDefault()`，去阻止預設行為

(記得原生 js 只需要加上 return 就好了)

```js
export default function Signup() {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      alert('Submitting!');
    }}>
      <input />
      <button>Send</button>
    </form>
  );
}

```

> e.stopPropagation() stops the event handlers attached to the tags above from firing.
> e.preventDefault() prevents the default browser behavior for the few events that have it.
