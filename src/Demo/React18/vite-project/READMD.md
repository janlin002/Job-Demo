# 介紹

這個小專案是為了練習 React18 的 5 個新 Hooks，並且使用 Vite 來搭建基礎環境

[官網](https://reactjs.org/blog/2022/03/29/react-v18.html)提供的 React18 介紹

並提供 17 到 18 的如何無痛升級，[文章](https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis)

## Hooks

- useTransition
- useDeferredValue
- useId
- use
- use

P.S. 文章下方會留下參考文獻

## useTransition vs useDeferredValue
體驗下來感覺這兩個使用起來差不多，都是將事件狀態改成`Non-urgent`，不過可監聽的對象數量不一樣，`useTransition`可針對多個狀態一次改成`Non-urgent`，`useDeferredValue`感覺是針對單一狀態去改變
