[官網網址](https://beta.reactjs.org/learn/updating-objects-in-state)

React 中要更改 Object 有幾點是希望可以達成的

1. Treat all state in React as immutable.
將 React 中的所有狀態視為不可變的。

2. When you store objects in state, mutating them will not trigger renders and will change the state in previous render “snapshots”.

3. Instead of mutating an object, create a new version of it, and trigger a re-render by setting state to it.

4. You can use the {...obj, something: 'newValue'} object spread syntax to create copies of objects.
可以透過 `...` 來複製 Object

5. Spread syntax is shallow: it only copies one level deep.
`...`指考被一層，要謹慎使用

6. To update a nested object, you need to create copies all the way up from the place you’re updating.

7. To reduce repetitive copying code, use Immer.
要減少重複複製代碼，可考慮 Immer。

重點就是不要直接對 Object 直接操作，可以考慮先複製一份