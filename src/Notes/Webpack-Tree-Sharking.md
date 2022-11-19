# Webpack Tree Sharking

## ModuleConcatenationPlugin
在 Webpack 中，需要執行 Tree Sharking，會需要 ModuleConcatenationPlugin，而 mode 的預設值 production，本身就開啟了 ModuleConcatenationPlugin ，所以如果什麼都不做的情況下一樣會有Tree Sharking效果

## mode = none
當 mode 設為 none 時，就失去了所有優化設置

## sideEffects
sideEffects 可以被設置為 Boolean 或是 Array，當你把它設置為 false 的時候，代表該專案是不會有 sideEffects 的，也就是一律用 export 判斷是否使用。

另外 sideEffects 會依賴 providedExports，用來找出專案中所有 export 的 module

Boolean - 是否需要sideEffects，如果 false 就是一律用 export 判斷是否使用
Array - customMethod，放到裡面的資料夾會有 sideEffects，其他為 false(一律用 export 判斷是否使用)

## useExported
useExported 的作用和 sideEffects 都是用來判斷是否該移除程式碼，但根據 Webpack 文件內的說明，useExported 才是真正的 Tree Shaking

usedExports 會使用 terser 判斷程式碼有沒有 side effect，如果沒有用到，又沒有 side effect 的話，就會在打包時替它標記上 unused harmony，並在 minify（用 Uglifyjs 或其他工具）的時候移除。



https://medium.com/starbugs/%E7%B2%BE%E6%BA%96%E7%9A%84%E6%89%93%E5%8C%85-webpack-%E7%9A%84-tree-shaking-ad39e185f284