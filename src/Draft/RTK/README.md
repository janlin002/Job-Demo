## Redux Toolkit

### 為什麼需要 Redux Toolkit?

- 減少 Boilerplate => 現在的 redux 要創建太多東西: Store、Action、Action Type、Reducers ...


### install

```
# NPM
npm install @reduxjs/toolkit 

# Yarn
yarn add @reduxjs/toolkit 
```

### RTK 的 API

**configureStore()**

透過 `configureStore` 去建立 store，結合 reducers、middleware

若沒有指定 middleware，RTK 預設使用的是 `redux-thunk`。

```js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({ reducer: rootReducer });
```

**createAction()**

建立 action creator 的函式。放在 createAction() 裡面的參數會自動變成 action type 字串常數。

```js
import { createAction } from '@reduxjs/toolkit';

const fetchTodos = createAction('todos/fetchTodos');
// { type: 'todos/fetchTodos' }

const setFilter = createAction('filter/setFilter');

setFilter('All')
// returns { type: 'filter/setFilter', payload: 'All' }
```

**createReducer()**

**createSlice()**

createSlice 將 slice name、initial state、reducer、action 集中建立

> createSlice 內部整合了 createReducer 和 createAction，因此 在大部分應用中, 不需特別寫這二個函式，只要使用 createSlice 就足夠。