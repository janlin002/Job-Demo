[官網連結](https://beta.reactjs.org/learn/state-a-components-memory)

這篇是在介紹 useState

一開始給了一個沒有 useState 的 Demo，發現更改state畫面沒有變動

原因有二:

1. Local variables don’t persist between renders. When React renders this component a second time, it renders it from scratch—it doesn’t consider any changes to the local variables.
2. Changes to local variables won’t trigger renders. React doesn’t realize it needs to render the component again with the new data.

簡單來說就是 local variables 不會觸發 React 的 re-render，並且 local variables 不會被保存

想要 update a component with new data 具有兩個條件:

1. Retain the data between renders.
2. Trigger React to render the component with new data (re-rendering).

而 `useState` 同時具備了以上兩個條件

> In React, useState, as well as any other function starting with ”use”, is called a Hook.

```js
const [index, setIndex] = useState(0);
```

以上程式碼，在React中其實有幾個步驟:
1. Your component renders the first time. Because you passed 0 to useState as the initial value for index, it will return [0, setIndex]. React remembers 0 is the latest state value.
2. You update the state. When a user clicks the button, it calls setIndex(index + 1). index is 0, so it’s setIndex(1). This tells React to remember index is 1 now and triggers another render.
3. Your component’s second render. React still sees useState(0), but because React remembers that you set index to 1, it returns [1, setIndex] instead.
4. And so on!

## State is isolated and private 
由於state是component內部的狀態存儲，所以每個component都是獨立的

react beta 中有提到:

> Unlike props, state is fully private to the component declaring it. The parent component can’t change it. 