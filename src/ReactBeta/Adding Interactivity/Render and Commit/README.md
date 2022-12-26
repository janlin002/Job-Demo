[官網連結](https://beta.reactjs.org/learn/render-and-commit)

React 在更新畫面，會有三個步驟:
1. Triggering a render
2. Rendering the component
3. Committing to the DOM

## Triggering a render

觸發render有兩種方法:

1. It’s the component’s initial render. -> 初始 render
2. The component’s state has been updated.

但它是通過使用目標 DOM 節點調用 `createRoot`，然後使用您的組件調用其渲染方法來完成的


## Rendering the component

“Rendering” is React calling your components.

- On initial render, React will call the root component.
- For subsequent renders, React will call the function component whose state update triggered the render.

這邊會是 virtual DOM 跟 real DOM 比較的地方

並且每次比較都是 Pure 的

## Committing to the DOM

commit 階段有分兩種:
1. For the initial render, React will use the `appendChild()` DOM API to put all the DOM nodes it has created on screen.
2. For re-renders, React will apply the minimal necessary operations (calculated while rendering!) to make the DOM match the latest rendering output.

## Browser paint
最後是瀏覽器將DOM繪製在畫面上

> React does not touch the DOM if the rendering result is the same as last time