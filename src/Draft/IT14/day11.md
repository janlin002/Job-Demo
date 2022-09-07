# Redux-logger

相信很多 React 開發者都依定聽過 Redux，但 Redux-logger 可能就沒有多少人聽過了，今天會來帶大家了解這個套件

## 什麼是 Redux-logger

相信 Redux 使用者都遇過，需要查看 action 帶的值有沒有帶對，或是 reducer 產出的值是否跟我們預期的一樣
，這時候如果沒有這些第三方的套件，我們可能會需要下很多 console，相對也麻煩很多，所以如果有一個套件可以嚷我們清楚看到一切變化，這樣也方便我們開發，而 Redux-logger 就是這樣的存在

## 環境安裝

```js
npm i --save redux-logger
```

接下來的部分，我先假裝大家都寫過 Redux，所以我對搭建 Redux 環境也就不會有太多著墨

下載好 redux-logger 後我們須到 store 裡面，把 redux-logger 夾到中間件(applyMiddleware)裡面

```js
import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import reducer from "./reducer";

const store = createStore(reducer, applyMiddleware(logger));
export default store;
```

## 怎麼使用

當今天一切都部署完畢後，我們打一隻 action，會發現在 console 印出了一些東西，接下來我會為各為講解這些到底是什麼
![logger](<./image/ReduxLogger/skitch%20(21).png>)

基本上我會分為三大塊：

### prev - 紅色框框

這個為我們發 action 之前的狀態

### action - 綠色框框

這個為我們發 action 當下的狀態，不過資料沒有被更改

### next - 藍色框框

這是我們資料送進 reducer 後的狀態，所以可以看看 state 是否有符合我們預期

## 結語

基本上 Redux-logger 的教學就這樣，畢竟他的功能很單一，就只是去做 redux 狀態的追蹤，不過說實話比起 Redux-logger 筆者個人更喜歡 [Redux-Devtools](https://github.com/reduxjs/redux-devtools)，原因就是因為 Redux-logger，會把 console 搞得很亂，有時候反而會影響開發，相對 Redux-logger，Redux-Devtools 的介面就乾淨多了，也強大很多

> 以上就是今天的文章，一樣有問題歡迎在下方留言
