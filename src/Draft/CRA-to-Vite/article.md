# Create-React-App 到 Vite: 將開發速度提升到新的檔次

今天這篇文章會示範如何將 create-react-app 轉成 vite，大幅提升開發速度

## 什麼是 Vite?

> Next Generation Frontend Tooling

Vite 是一種新型前端構建工具，主要是由 Vue 的作者尤雨溪所創造的，他們主打的就是一個字:快

順帶一提:Vite 在法語裡面就是`快`的意思，只能說尤大大真的很愛用法語命名(Vue, Vite)

## Vite 為什麼快？

webpack 的做法是將所有模塊提前編譯、打包進 bundle 裡，換句話說，不管模塊是否會被執行，都要被編譯和打包到 bundle 裡，反觀 Vite
並不會先編譯所有的代碼文件，而是利用瀏覽器去解析 imports，並且是基於瀏覽器原生的 ES module，所以速度上比 webpack 來得更快

![webpack](https://i.imgur.com/YnLilCd.png)

![vite](https://i.imgur.com/KJdAe77.png)

圖片取自 [IT 邦幫忙](https://ithelp.ithome.com.tw/articles/10266460)

## 測試

筆者針對自己 Github 裡面一個比較大的專案 - [Job-Demo](https://github.com/janlin002/Job-Demo)去做改寫，至於 Job-Demo 這個專案有多大？

```
find . -type f | wc -l
```

總共有 7717 個 files，這還是刪除掉 node_modules 的大小，加上 node_modules 後會有 61286 個 files

使用 vite 去做執行，時間為 1331ms，相比 create-react-app 的兩三分鐘，速度是真的很有感的大提升

![vite-runtime](%E6%88%AA%E5%9C%96%202022-09-22%20%E4%B8%8B%E5%8D%883.39.48.png)

## 開始改造

首先你會需要先下載四個東西:

```js
npm install --save-dev vite @vitejs/plugin-react vite-tsconfig-paths vite-plugin-svgr
```

比較特別的是: `vite-tsconfig-paths`跟 `vite-plugin-svgr`

### vite-tsconfig-paths

下載這個可以幫你跟 Vite 說明如何去 `tsconfig 檔`裡面取得絕對路徑

```js
// 絕對路徑
import MyButton from "components";

// 相對路徑
import MyButton from "../../../components";
```

### vite-plugin-svgr

我們需要 vite-plugin-svgr 來導入 SVG 作為 React 組件

```js
import { ReactComponent as Logo } from './logo.svg'.
```

## 建立 Vite config file

須在根目錄下面新增一個資料夾叫: `vite.config.js`，如果你的專案是由 TS 開發，記得改成`vite.config.ts`，這個檔案將會是你的設定檔，有點像是 `webpack` 裡面的 `webpack.config.js`

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
});
```

## 修改 public/index.html 路徑

需把 `public/index.html` 拉到根目錄(root)下，做為整個 Vite 專案的進入點，這邊有官方的[說明](https://vitejs.dev/guide/#index-html-and-project-root)，有興趣的讀者可以去看看

## 更新 index.html

需把 index.html 裡面的 `%PUBLIC_URL%` 全部刪除，原因是因為 index.html 現在已經不在 public 資料夾下了，所以需要更改路徑

```js
// Before
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />

// After
<link rel="icon" href="/favicon.ico" />
```

並在`<body>`裡面加入

```js
<script type="module" src="/src/index.tsx"></script>
```

## (TS 使用者) 新增 vite-env.d.ts

如果有讀者是使用 TS 開發的話，需要在`src`目錄下建立一個`vite-env.d.ts`的檔案

```js
/// <reference types="vite/client" />
```

## 刪除 react-scripts

因為要從 create-react-app 轉到 Vite，當然要把 `create-react-app` 的 `react-scripts` 刪掉拉

```js
npm uninstall react-scripts
```

## 更新 package.json

刪除掉`react-scripts`後，我們的指令就不能用了，所以現在要改成 Vite 的指令

```js
"scripts": {
  "start": "vite",
  "build": "tsc && vite build",
  "serve": "vite preview"
}
```

## 完成！

到這邊就完成拉，現在就由讀者自己去感受 Vite 的快速吧

> 以上就是今天的文章，如果有任何錯誤或是疑問，都歡迎留言給我~~

參考文章:

https://hackmd.io/@pSnFKx_GTlmTWXn4A8lpKw/HkAUZzSvY

https://cathalmacdonnacha.com/migrating-from-create-react-app-cra-to-vite

https://blog.huli.tw/2020/08/07/vite-and-esmodules/
