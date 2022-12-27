[官網連結](https://beta.reactjs.org/learn/queueing-a-series-of-state-updates)

這個章節是在解決上一章(State as a snapShot)的問題，batch update 是 react 為了解決不必要的渲染的方案，但有時候我們是希望可以一次渲染(multiple)多次

> React waits until all code in the event handlers has run before processing your state updates

這邊有一個很貼切的形容:

> This might remind you of a waiter taking an order at the restaurant. A waiter doesn’t run to the kitchen at the mention of your first dish! Instead, they let you finish your order, let you make changes to it, and even take orders from other people at the table.

翻成中文大概是: 當你還在點餐的時候，服務生不會一直去廚房說你的需求，而是會等你全部點完以後，才會一次跟主廚說，你要點什麼

> React does not batch across multiple intentional events like clicks

有些特殊的事件，不會有 batch update 的功能，例如點擊，因為每個點擊都是獨立的

> Updating the same state variable multiple times before the next render

如果需對同一state做多次的修改，必須要將原本的`setNumber(number + 1)`改成`setNumber(n => n + 1)`，It is a way to tell React to “do something with the state value” instead of just replacing it.

```js
setNumber(n => n + 1);
```

1. React queues this function to be processed after all the other code in the event handler has run.
2. During the next render, React goes through the queue and gives you the final updated state.

> setNumber(n => n + 1): n => n + 1 is a function. React adds it to a queue.


## 結論
1. Setting state does not change the variable in the existing render, but it requests a new render.
更改state不會更改當前的狀態，而是觸發一個 re-render

2. React processes state updates after event handlers have finished running. This is called batching.
React 在 event handler 後處理狀態更新，叫做 batching
(一個事件中多次呼叫 setState 時，會自動依序合併試算 state 的目標更新結果，並只統一呼叫一次 re-render 來完成畫面更新)

3. To update some state multiple times in one event, you can use `setNumber(n => n + 1)` updater function.
如果需對一個variable做多次的需改可以改成`setNumber(n => n + 1)`
