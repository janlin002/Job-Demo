[參考文章](https://blog.csdn.net/GetIdea/article/details/103770851)

[immer 官網](https://immerjs.github.io/immer/)

[use-immer Github](https://github.com/immerjs/use-immer)

## immrt

> copy-on-write

### tradition:

需 copy 整個 tree，如果資料量大的話，會嚴重影響效能

### immer:

只針對單一節點做修改(深拷貝)

![immer變更](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAxOS8xMC8yMC8xNmRlN2ExNTRjOGIzMGI4?x-oss-process=image/format,png)

### 自我結論:

useState 可使用 useImmer 作替代 [替代練習](https://github.com/janlin002/Job-Demo/blob/master/src/Demo/immer/index.js)

如果想處理 reducer 內的狀態，目前看起來還是需要使用到[immerjs](https://immerjs.github.io/immer/)
