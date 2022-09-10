# 一天一套件，工作沒煩惱 - Redux-thunk

今天我們要來說常被拿來跟 Redux-saga 一起討論的 Redux-thunk

## 什麼是 Redux-thunk

Redux-thunk 跟 Redux-saga 一樣是在處理非同步行為

## 環境安裝

```js
npm install redux-thunk
```

安裝好一樣，我們須到 store 裡面，去把它加進去

```js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const store = createStore(rootReducer, applyMiddleware(thunk));
```

以上程式碼，取自[官方 Github](https://github.com/reduxjs/redux-thunk)

## 怎麼使用

跟 Redux-saga 一樣，我們在開始使用之前，我們需要先了解他是**在哪裡執行**的

![redux-thunk](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fd8f65aa0bbf480baf324d8679fb0fe7~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

我們可以看到他是在 action 到 store 之間去執行，不知道有沒有讀者記得我們昨天的 saga 執行時間？沒錯，是在 store 到 reducer 之間去執行，也因為這樣的差異，所以他們寫法會有很大的差異

好了～了解這些後，我們就可以開始寫程式碼了

首先進到 action 的檔案裡面

```js
export const reduxThunkTest = (payload) => async (dispatch) => {
  setTimeout(() => {
    dispatch({ type: REDUX_THUNK_TEST, payload });
  }, 1000);
};
```

這段程式碼可我們希望可以在觸發 `reduxThunkTest` 時，延遲一秒，然後觸發 reducer，這就是簡單的 thunk 寫法
當然你可以把 dispatch 裡面的東西包出去

```js
const INCREMENT_COUNTER = "INCREMENT_COUNTER";

function test() {
  return {
    type: REDUX_THUNK_TEST,
    payload,
  };
}

export const reduxThunkTest = (payload) => async (dispatch) => {
  setTimeout(() => {
    dispatch(test());
  }, 1000);
};
```

或是在裡面使用 try...catch，方法非常多，個人習慣且團隊溝通好就好

## Redux-saga vs Redux-thunk

| redux-saga                    | redux-thunk                                  |
| ----------------------------- | -------------------------------------------- |
| 程式碼較多                    | 程式碼較多                                   |
| 比較容易理解                  | 需了解新的概念，較難理解                     |
| action 裡面會有很多非同步行為 | action 很乾淨                                |
| 可能會必較難做測試            | 由於所有異步邏輯保持在一起，因此比較容易測試 |

## 結語

筆者個人兩個套件都有使用過，我反而會覺得 Redux-saga，更好學一點，因為她把非同步的行為特別拉出來寫了，所以程式碼相對也必較整潔，不過兩者都能達到在 Redux 中處理非同步的行為，所以究竟要用哪一個就由讀者自己取斟酌了

參考資料:

https://juejin.cn/post/6931308713345024008

https://medium.com/frochu/%E9%80%81%E8%AE%93%E4%BD%A0%E7%9A%84action%E8%83%BD%E4%BD%9C%E6%9B%B4%E5%A4%9A-redux-thunk-c07bc5488e48

https://www.eternussolutions.com/2020/12/21/redux-thunk-redux-saga/
