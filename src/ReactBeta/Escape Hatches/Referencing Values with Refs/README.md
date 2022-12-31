[官網網址](https://beta.reactjs.org/learn/referencing-values-with-refs)

When you want a component to “remember” some information, but you don’t want that information to trigger new renders, you can use a ref.

```js
import { useRef } from 'react';

const ref = useRef(0);
```

透過  `ref.current` 追蹤
```js
ref.current
```

> Unlike state, ref is a plain JavaScript object with the current property that you can read and modify.

> the component doesn’t re-render with every increment.

> This information is used for rendering, so you’ll keep it in state

> When a piece of information is used for rendering, keep it in state. When a piece of information is only needed by event handlers and changing it doesn’t require a re-render, using a ref may be more efficient.

當需要使用 event handlers 且不需要 re-render 時，或許可以考慮使用 ref

## ref vs state

|  refs   | state  |
|  ----  | ----  |
| useRef(initialValue) returns { current: initialValue }  | useState(initialValue) returns the current value of a state variable and a state setter function ( [value, setValue]) |
| Doesn’t trigger re-render when you change it.  | Triggers re-render when you change it. |
| Mutable—you can modify and update current’s value outside of the rendering process.| “Immutable”—you must use the state setting function to modify state variables to queue a re-render.|
| You shouldn’t read (or write) the current value during rendering.| You can read state at any time. However, each render has its own snapshot of state which does not change.|

## 使用 ref 的時機
- Storing timeout IDs
- Storing and manipulating DOM elements, which we cover on the next page ->  操作DOM
- Storing other objects that aren’t necessary to calculate the JSX. -> 存儲不需要的 Object 計算

## ref 使用時需注意
- Treat refs as an escape hatch.
- Don’t read or write ref.current during rendering. -> react 不會知道 ref.current 的更改，所以如果有需要追蹤值的部分，請使用state

> the most common use case for a ref is to access a DOM element.

## 總結
- Refs are an escape hatch to hold onto values that aren’t used for rendering. You won’t need them often.

用於不需要渲染的部分，你不會常需要使用到它，如果你常用的話，要看看是不是哪裡出問題了

- Unlike state, setting the ref’s current value does not trigger a re-render.

ref 跟 state 不同，ref 的更新不會照成 re-render

- Don’t read or write ref.current during rendering. This makes your component hard to predict.

不要在渲染過程中 讀取或是更改 `ref.current` 因為 react 不會知道他的更改

ref 不具有 state 的 snapShot ，所以可以動態改值

