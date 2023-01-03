[官網網址](https://beta.reactjs.org/learn/synchronizing-with-effects)

> you might want to control a non-React component based on the React state, set up a server connection, or send an analytics log when a component appears on the screen. Effects let you run some code after rendering so that you can synchronize your component with some system outside of React.

如果你需要連結一個不是由 React 建立的 Component，Effects 讓你在渲染後運行一些代碼，這樣你就可以將你的組件與 React 之外的一些系統同步。

### What are Effects and how are they different from events?

常見的兩種 React Component
- Rendering code: 儲存 props, state 的地方，並且 return 需渲染 Jsx 在畫面上

> Like a math formula, it should only calculate the result, but not do anything else. (Pure)

- Event handlers

Event handlers 因為可能 submit an Http methods，所以我們可以說 `Event handlers` 包含 `side effect`

### You might not need an Effect
Keep in mind that Effects are typically used to “step out” of your React code and synchronize with some external system.

(請記住，Effects 通常用於“跳出”你的 React 代碼並與某些外部系統同步)

### How to write an Effect

Effect 三步驟:

1. Declare an Effect.
2. Specify the Effect dependencies.
3. Add cleanup if needed.

> useEffect “delays” a piece of code from running until that render is reflected on the screen.

> Effects run after every render.

### useEffect dependencies

1. 都不帶: By default, Effects run after every render
2. []: You can tell React to skip unnecessarily re-running the Effect

React 會透過 `Object.is` 去比較 `dependencies` 是否有異，如果有才會執行 useEffect 裡面得程式碼

```js
useEffect(() => {
  // This runs after every render
});

useEffect(() => {
  // This runs only on mount (when the component appears)
}, []);

useEffect(() => {
  // This runs on mount *and also* if either a or b have changed since the last render
}, [a, b]);
```

### Add cleanup if needed

### How to handle the Effect firing twice in development?

useEffect 會執行兩次其實是 React 故意的，是為了方便你去發現 bug

通常會有這個問題，是因為你沒有 cleanup (the answer is to implement the cleanup function)

這樣的設定只存在於 development 環境， production 環境就會正常

> When Strict Mode is on, React mounts components twice (in development only!) to stress-test your Effects.

> React will call your cleanup function before the Effect runs next time, and during the unmount.