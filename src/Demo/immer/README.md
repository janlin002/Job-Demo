[參考文章](https://blog.csdn.net/GetIdea/article/details/103770851)

[immer 官網](https://immerjs.github.io/immer/)

[use-immer Github](https://github.com/immerjs/use-immer)

## immer

> copy-on-write

### tradition:

需 copy 整個 tree，如果資料量大的話，會嚴重影響效能

# immer:

只針對單一節點做修改(深拷貝)

![immer變更](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAxOS8xMC8yMC8xNmRlN2ExNTRjOGIzMGI4?x-oss-process=image/format,png)

# use-immer:

```js
npm install immer use-immer
```

> 目前 use-immer 只有兩個 api: useImmer, useImmerReducer

## useImmer -> 取代 useState

使用方法:
跟 useState 一樣會需要 state 跟更改 state 的 function，並且給 state 一預設值

跟 useState 不一樣的是，useImmer 會先複製一個 draft 並且更改他(handleChangeName)

```js
const [people, setPeople] = useImmer({
  name: "David",
  age: "22",
});

const handleChangeName = () =>{
    setPeople(draft=>{
        draft.name: "Bill",
    })
}

console.log(people)
// {
//     name: 'Bill',
//     age: '23
// }
```

## useImmerReducer -> 取代 useReducer

> Immer powered reducer, based on useReducer hook

基本上就是封裝了 react 的 useReducer

### 自我結論:

useState 可使用 useImmer 作替代 [替代練習](https://github.com/janlin002/Job-Demo/blob/master/src/Demo/immer/index.js)

如果想處理 reducer 內的狀態，目前看起來還是需要使用到[immerjs](https://immerjs.github.io/immer/)
