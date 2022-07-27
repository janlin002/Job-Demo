# BANKPRO

## 套件使用

[Husky](https://www.npmjs.com/package/husky): 達到在 commit 時做 eslint 驗證

[jsdoc](https://www.npmjs.com/package/jsdoc): jsdoc 註解並快速產生 api 文件

[redux-logger](https://www.npmjs.com/package/redux-logger): 可以在 F12 的 console 裡面，直接看到打 action 的情況

[sweetalert2](): 畫面提示框

[react-intl](): 實現 i18n

[axios]()

[bootstrap]()

[core-js]()

[dayjs]()

[flat]()

[formik]()

[html2canvas]()

[jquery]()

[jspdf]()

[jspdf-autotable]()

[lodash]()

[node-forge]()

[path]()

[prop-types]()

[react]()

[react-day-picker]()

[react-dom]()

[react-intl]()

[react-modal]()

[react-redux]()

[react-router]()

[react-router-dom]()

[react-select]()

[react-table]()

[react-tooltip]()

[redux]()

[redux-saga]()

[sweetalert2]()

[yup]()

## 資料夾擺放

![file-style](../../src/assets/image/%E6%88%AA%E5%9C%96%202022-07-27%20%E4%B8%8A%E5%8D%889.55.50.png)

```
|- demo
|- public
|- src
|- webpack
|- Makefile
|- pom.xml
|- web.xml
```

src 裡面基本上該有的都有: components, pages, redux, routes...，所以就不另外寫

pom.xml: 內容包含專案的描述，依賴，使用的 plugin，及 Maven 該如何建置專案的等配置說明。

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
3. reducer 會有三種形式: 打 api 的資料,Loading,Error，同樣 action 也有三種形式: 打 api 的資料,Loading,Error
4. 進到 saga 後會看是否成功，如果成功就打成功的 action，反之亦然
5. 透過 useSelector 到頁面上拿到資料
6. 離開畫面後，會將資料清除

值得注意的點是，reducer 裡面 loading 跟 error 預設都是 null，主要是為了之後的畫面監聽

## axios 封裝

[axios 封裝]()

[掘金](https://zhuanlan.zhihu.com/p/136035219)

## 包版方式

透過指令 make 去跑 Makefile 裡面的東西，同時也會一起執行 Dockerfile，所以要開啟 docker app，跑完以後有兩種方式可以換版

1. 要使用 Postman 去打換版 api(舊)
2. 使用 microsoft remote desktop 切換到公司的電腦，並將打包好的東西，搬移過去(新)

## i18n 實現

使用 react-intl

## 題外話

css 部分是有美工團堆去做開發，所以 css 部分就先跳過
