# BANKPRO

## 資料夾擺放

![file-style](../../src/assets/image/%E6%88%AA%E5%9C%96%202022-07-27%20%E4%B8%8A%E5%8D%889.55.50.png)

### 根目錄

```
|- demo
|- public
|- src
|- webpack
|- Makefile
|- pom.xml
|- web.xml
```

pom.xml: 內容包含專案的描述，依賴，使用的 plugin，及 Maven 該如何建置專案的等配置說明。

### src 內部

```
|- assets -
|- components - 共用元件
|- constants - 放使用大量的常數，避免之後要更改很麻煩
|- hooks - 自定義hook
|- lang - i18n語言包
|- redux - redux
|- routes - 路由配置
|- util - 共用function
```

## 專案中有趣的語法 && 套件

[memory-router](https://reactrouter.com/docs/en/v6/routers/memory-router): 解決 browserRouter 無法記憶路徑問題

[react error-boundary(錯誤邊界)](https://zh-hant.reactjs.org/docs/error-boundaries.html): 遇到 js 錯誤，可能導致白畫面，使用錯誤邊界可以讓畫面不會全部壞掉，而是使用自定義畫面，去提示錯誤訊息

[manifest.json](https://developer.mozilla.org/zh-TW/docs/Mozilla/Add-ons/WebExtensions/manifest.json): [相關文章](https://www.letswrite.tw/pwa-manifest/)，主要是讓 app 版時，可以有一個 icon 去做點按

[jsx-control-statements](https://www.npmjs.com/package/babel-plugin-jsx-control-statements): 可以自由的加入條件判斷的 Tag 標籤

[core-js(polyfill)](https://tw511.com/a/01/29541.html): 自動化打修補程式，有時候可能某些瀏覽器不支援特殊語法，需要用這些程式來做修正

## webpack - 待補

個人認爲 webpack 是這個轉案裡面最具價值的部分

### 相關套件

webpack-merge:

關於 webpack-merge ，這篇[文章](https://awdr74100.github.io/2020-04-09-webpack-webpackmerge/)寫得非常仔細，可以參考

### base

基礎設置，每個環境都需要，其他資料夾透過 webpack-merge ，去把配置合併

```js
module.exports = merge(需合併的配置檔, {
    ...
})
```

## 打 api 流程

1. 透過按鈕，或是 useEffect，打 api
2. 觸發 reducer 同時，也觸發 saga
3. reducer 會有三種形式: 打 api 的資料,Loading, Error，同樣 action 也有三種形式: 打 api 的資料,Loading, Error
4. 進到 saga 後會看是否成功，如果成功就打成功的 action，反之亦然
5. 透過 useSelector 到頁面上拿到資料
6. 離開畫面後，會將資料清除

_值得注意的點是，reducer 裡面 loading 跟 error 預設都是 null，主要是為了之後的畫面監聽_

p.s. 這團隊專案所有請求都用 post 去完成(包含 CRUD)，其實也是蠻傻眼的...

## redux 封裝

### action

```js
export * from "./test/actions";
```

### reducer - combineReducers

```js
const staticReducers = {
  test,
  ...
};

const createReducer = (asyncReducers = {}) => {
  const reducers = combineReducers({
    ...staticReducers,
    ...asyncReducers,
  });
  return (state, action) => {
    if (action.type === "RESET_AUTH_STORE") {
      const ignoreResetState = { noAuthPages: state.noAuthPages };
      return reducers(ignoreResetState, action);
    }
    return reducers(state, action);
  };
};

// 正常的 combineReducers
export default combineReducers({
  todos,
  counter
})
```

### saga - all

```js
export default function* rootSaga() {
  yield all([
    test(),
    ...
  ]);
}
```

### select

```js
export * from "./test/actions";
```

## routes 封裝 - React.lazy

使用 [React.lazy](https://zh-hant.reactjs.org/docs/code-splitting.html) 做導入

```js
const Abc = lazy(() => import("./..."));

const router = [
    {
        path: "./...",
        Child: Abc,
    };
]

const route = [
    ...router
]
```

## axios 封裝

[掘金](https://zhuanlan.zhihu.com/p/136035219)

[專案封裝](https://github.com/janlin002/Job-Demo/tree/master/job/bankpro/axios)

## 包版方式

透過指令 make 去跑 Makefile 裡面的東西，同時也會一起執行 Dockerfile，所以要開啟 docker app，跑完以後有兩種方式可以換版

1. 要使用 Postman 去打換版 api(舊)
2. 使用 microsoft remote desktop 切換到公司的電腦，並將打包好的東西，搬移過去(新)

## i18n 實現

使用 react-intl

[react-intl](https://pjchender.dev/react/note-react-intl/)教學

## 頁面封裝模式

```js
|- featureName
    |- index.js
    |- featureName
            |- index.js
            |- search.js
            |- result.js
```

簡介:

1. 第二個 featureName，才是正個公能真正寫頁面邏輯的地方
2. 第一個 index 是做基礎模板封裝，會引入第二個 featureName，將他當做 prop(children)，傳入一個叫 Layout 的 component
3. Layout component 裡面包含了共用的 header 跟 footer
4. 第二個 index 是整個功能的頁面邏輯跟 function 放置的地方，基本上所有 function 都是透過 prop 往下做傳遞，包含 useState 亦是，主要是方便資料作流動，當然可能會有例外
5. 所有換頁邏輯都是使用 useState 去做管理

詳細部分可參考 [Pages](https://github.com/janlin002/Job-Demo/tree/master/job/bankpro/pages)

## 關閉 開發者工具 (f12,右鍵)

```js
window.console.log(
  "%c為了您的使用安全，請關閉開發者工具再進入網站!",
  "color: #04e1a6;font-size: 24px;font-weight: bold;"
);
window.document.addEventListener("contextmenu", (e) => e.preventDefault());
window.document.addEventListener("keydown", (e) => {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && e.key === "I") ||
    (e.ctrlKey && e.shiftKey && e.key === "J") ||
    (e.ctrlKey && e.shiftKey && e.key === "C") ||
    (e.ctrlKey && e.key === "U")
  )
    e.preventDefault();
});
```

## 取消快取機制 [meta http-equiv](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)

```js
  <meta http-equiv="pragma" content="no-cache">
  <meta http-equiv="Cache-Control" content="no-store, max-age=0, must-revalidate">
  <meta http-equiv="expires" content="0">
```

## 共用元件 && 功能部分

[FEAT]() // 專案路徑

## 題外話

css 部分是有美工團隊去做開發，所以 css 部分就先跳過

# 著作權所有，翻印必究
