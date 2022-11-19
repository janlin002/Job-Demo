# React 18 new updates

## 5 new Hooks

- useTransition
- useDeferredValue
- useId
- useSyncExternalStore
- useInsertionEffect

### useTransition - Non-urgent(非緊急)

React 18 新加的功能之一，就是Transition， 作用在於將State分為 **緊急(Urgent)** 及**非 緊急(Non-urgent)** 兩種，Transition 對應的也就是**非緊急的state**更新。

```javascript=
const [isPending, startTransition] = useTransition();

startTransition(()=>{
    // 顯示Todo 內容的狀態更新不是緊急至必須馬上有反應。
    setTodos(todos);
})


// isPending用來表示該Transition 是否已經完結。
```
如果不需要 isPending ，可以改寫成:

```javascript
import { startTransition } from 'react';
```

### useDeferredValue - Non-urgent(非緊急)

useDeferredValue 主要是解決一直重複 render 的行為，大家都知道 React 是資料驅動畫面，所以當如果取得資料上面有延遲，那麽畫面上就會有卡頓的感覺

傳統上會用 debounce 來解決這類的問題，但是跟 debouce 不一樣的是 useDeferredValue 是**被觸發後**才做回傳更新後的資料，引發 re-render，而 debounce 是**不管有沒有需要**，都會固定去觸發

p.s. 依賴 deferred value 的 child component 要記得使用 useMemo，避免不必要的 re-render

```javascript
const deferredValue = useDeferredValue(value, { timeoutMs: 指定的時間 });

// 第一個參數是設定要延遲的 value 值
// 第二個參數是延遲的秒數
// 最後返回一個延遲的值 deferredValue
```

https://m.facebook.com/pjchender/posts/4959211114164285/

### useId

useId is a hook for generating unique IDs that are stable across the server and client

***Note: useId is not for generating keys in a list. Keys should be generated from your data.***

```javascript
const id = useId();
```

### useSyncExternalStore

解決併發問題


https://andyyou.github.io/2022/01/05/use-sync-external-store-with-solving-problem/
https://milkmidi.medium.com/react-18-usesyncexternalstore-a427bf82c198

### useInsertionEffect

useInsertionEffect工作原理类似useLayoutEffect，区别在于回调执行时还不能访问ref中的DOM节点。

你可以在这个 Hook 内操作全局 DOM 节点。

```javascript!
function useCSS(rule) {
  useInsertionEffect(() => {
    if (!isInserted.has(rule)) {
      isInserted.add(rule);
      document.head.appendChild(getStyleForRule(rule));
    }
  });
  return rule;
}
function Component() {
  let className = useCSS(rule);
  return <div className={className} />;
}
```

https://segmentfault.com/a/1190000040966821

## Automatic Batching
17版以前，只有 useState 會做 Automatic Batching，而其他的非同步行為，例如: Promise,  setTimeout，fetch 是不會自動 Automatic Batching ，不過 18 版後這些非同步預設都會自動 Automatic Batching

不過也不是所有的部分都需要 Automatic Batching ，可透過 [flushSync](https://beta.reactjs.org/apis/react-dom/flushSync) 來跳脫 Automatic Batching

```javascript
flushSync(() => {
  setState(true);
});
```



參考資料:
https://tecky.io/en/blog/React-18-%E7%99%BB%E5%A0%B4-!-%E6%96%B0%E5%A2%9E%E5%8A%9F%E8%83%BD%E5%A4%A7%E7%B0%A1%E4%BB%8B/
https://beta.reactjs.org/
https://gcdeng.com/blog/react-hooks
