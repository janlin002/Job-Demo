# 一天一套件，工作沒煩惱 - react-table

今天要介紹的套件是 react-table，從名字大概能猜出來者個套件是在幹嘛

## 為什麼需要 react-table?

今天當要處理 table 時，我們可以透過 react-table 讓我們在客製化 table 上面有更好的發揮

這個套件在今年稍早 (2022/01/25) 發布了第 8 版，在幾個月的時間內，現在已經是 8.5.13 版了，算是成長非常快速的套件，不過今天的文章，還是會以第七版為主(第 7 版語法跟第 8 版語法其實差蠻大的)，第八版的部分，我們會留到明天

## 環境安裝

```
npm install react-table@7.6.3
```

今天因為要介紹的是第七版，所以我下載了第七版的 7.6.3，原因是因為筆者自己公司目前就是用這個版本，使用起來沒有什麼奇怪的問題，如果對於 node 的版本號不太了解的讀者，可以看一下[這篇文章](https://israynotarray.com/nodejs/20190626/2459037265/)，裡面有講一些基本的版本號知識

題外話：筆者推薦大家在寫 `useGlobalFilter` 時，可以參考[這篇文章](https://nafeu.medium.com/global-filtering-and-sorting-with-react-table-ec604e57614a)，不過只需參考他的思維，至於他的程式碼其實錯很多，需要讀者自己去發現，不過這篇已經幫大家避過不少坑，所以不需要太過害怕

## 怎麼使用

由於功能很多沒辦法全部說完，所以今天只會說 react-table 的基本幾種用法，基本上這些已經可以應付大部分的工作了

## Basic React-Table

## data && columns

data 代表的是 table 裡面的資料，columns 代表的是 table 裡面的標題，需特別注意的是 data 的 key 會對到 columns 的 accessor，這邊可以看到兩者在前面都有加上`useMemo`，是為了防止非必要的渲染

> accessor is the "key" in the data

```js
const data = React.useMemo(
  () => [
    {
      col1: "Hello",
      col2: "World",
    },
    {
      col1: "react-table",
      col2: "rocks",
    },
    {
      col1: "whatever",
      col2: "you want",
    },
  ],
  []
);
```

```js
const columns = React.useMemo(
  () => [
    {
      Header: "Column 1",
      accessor: "col1", // accessor is the "key" in the data
    },
    {
      Header: "Column 2",
      accessor: "col2",
    },
  ],
  []
);
```

## useTable

useTable 是 react-table 裡面的靈魂，所有的東西都會從這邊來

```js
const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  useTable({ columns, data });

return (
  <table {...getTableProps()}>
    <thead>
      {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <th {...column.getHeaderProps()}>{column.render("Header")}</th>
          ))}
        </tr>
      ))}
    </thead>
    <tbody {...getTableBodyProps()}>
      {rows.map((row) => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map((cell) => {
              return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  </table>
);
```

以上程式碼取自[第七版官網](https://react-table-v7.tanstack.com/)，算是一個起手式，簡單來說就是把`headerGroups`跟`rows`分別取跑迴圈，然後渲染在畫面上，這兩個東西待會會用到，需要特別注意一下，沒問題的話，我們開始進階一點

## GlobalFilter

今天我們會想在 table 裡面去搜尋資料，除了可以 `Command + F`，還可以使用 `GlobalFilter`，以下會簡單實作 react-table 的搜尋功能

首先先引入我們待會要使用到的語法

```js
import {
  useTable,
  useAsyncDebounce,
  useGlobalFilter,
  useSortBy,
} from "react-table";
```

再來我們要寫一個 funtion 去實現 GlobalFilter 的功能

```js
const TWO_HUNDRED_MS = 200;

function GlobalFilter({ globalFilter, setGlobalFilter }) {
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((values) => {
    setGlobalFilter(values || undefined);
  }, TWO_HUNDRED_MS);

  return (
    <input
      value={value || ""}
      onChange={(e) => {
        setValue(e.target.value);
        onChange(e.target.value);
      }}
      placeholder="Search"
    />
  );
}
```

這邊我們透過`useAsyncDebounce`讓`setGlobalFilter`延遲 200ms 執行，達到非同步的效果，主要是避免使用者在輸入時一直去執行`setGlobalFilter`，畢竟畫面渲染是非常吃耗能的一件事

## regeneratorRuntime is not defined

如果你照著我的程式碼寫到現在，你可能會遇到這個問題: `regeneratorRuntime is not defined`

(我是自己用 webpack 去打包的，CRA 也許沒有這個問題，如果有使用 CRA 的讀者歡迎在下方留言，是否會有這個問題)

遇到這個問題是因為我們在處理 `async/await` 時，瀏覽器看不懂`regeneratorRuntime`，所以我們需要透過 babel 幫我們處理這一塊，要解決這個問題其實也不難，你只需要下載`@babel/plugin-transform-runtime`

```
npm i @babel/plugin-transform-runtime
```

然後在你的`.babelrc`檔案裡面加入:

```js
{
    "plugins": [
        "@babel/plugin-transform-runtime"
    ]
}
```

這個問題就解決拉~~

問題解決後，我們繼續，我們寫好`GlobalFilter`的 function 後，要在畫面上顯示，所以我們在剛剛的基礎上，加上:

```js
const {
  getTableProps,
  getTableBodyProps,
  headerGroups,
  rows,
  prepareRow,
  visibleColumns,

  // globalFilter
  setGlobalFilter,
  state: { globalFilter },
} = useTable({ columns, data }, useGlobalFilter);

... 中間略

 <tr>
    <th
        colSpan={visibleColumns.length}
    >
        <GlobalFilter
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        />
    </th>
</tr>
```

這樣就實現簡單的搜尋功能拉，由於篇幅問題，我這邊附上我的[程式碼]()，有興趣的讀者可以去看看，那我們接著說`排序功能`

## 排序

今天要實現排序功能，只需要引入`useSortBy`，並對`headerGroup`做一點改造：

```js
import {..., useSortBy} from 'react-table'

... 中間略

  const {
    ... 略
  } = useTable(useSortBy)

... 中間略
{
  headerGroups.map((headerGroup) => (
    <tr {...headerGroup.getHeaderGroupProps()}>
      {headerGroup.headers.map((column) => (
        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
          {column.render("Header")}
          <span>
            {column.isSorted ? (column.isSortedDesc ? " ⬇️" : " ⬆️") : " ↕️"}
          </span>
        </th>
      ))}
    </tr>
  ));
}
```

## usePagination

這個功能必較複雜，我們要現導入

```js
import {
  useTable, useAsyncDebounce, useGlobalFilter, useSortBy, usePagination,
} from 'react-table'

... 中間略

const {
  getTableProps,
  getTableBodyProps,
  headerGroups,
  rows,
  prepareRow,
  visibleColumns,

  // globalFilter
  setGlobalFilter,
  state: { globalFilter },

  // usePagination
  page,
  canPreviousPage,
  canNextPage,
  pageOptions,
  pageCount,
  gotoPage,
  nextPage,
  previousPage,
  setPageSize,
  state: { pageIndex, pageSize },
} = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination);
```

接著我們需要對`row`動手腳

```js
<tbody {...getTableBodyProps()}>
  {page.map((row) => {
    prepareRow(row);
    return (
      <tr {...row.getRowProps()}>
        {row.cells.map((cell) => (
          <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
        ))}
      </tr>
    );
  })}
</tbody>
```

接著我們要有一個`footer`去讓我們做換頁的效果

```js
<div>
  <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
    {"<<"}
  </button>{" "}
  <button onClick={() => previousPage()} disabled={!canPreviousPage}>
    {"<"}
  </button>{" "}
  <button onClick={() => nextPage()} disabled={!canNextPage}>
    {">"}
  </button>{" "}
  <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
    {">>"}
  </button>{" "}
  <span>
    Page{" "}
    <strong>
      {pageIndex + 1} of {pageCount}
    </strong>{" "}
  </span>
  <select
    value={pageSize}
    onChange={(e) => {
      setPageSize(Number(e.target.value));
    }}
  >
    {[5, 10, 20, 30].map((item) => (
      <option key={item} value={item}>
        Show {item}
      </option>
    ))}
  </select>
</div>
```

`<select>`可以讓我們自動去定義一頁要顯示的數量，至於換頁的 icon 就看個人喜好，基本上的 function 都是 react-table 幫我們包裝好了，這邊附上[usePagination](https://react-table-v7.tanstack.com/docs/api/usePagination#usepagination)的文檔，看著這篇搭配[官方文檔](https://react-table-v7.tanstack.com/)應該會比較清楚

## 結語

這個套件真的有點難，筆者寫到一半差點放棄，自己懂跟要說給別人懂真的是兩回事啊...，原本想說改寫其他簡單的套件好了，反正也不會有人知道，不過還是想挑戰一下自己，所以希望大家都有看懂，如果有不太了解的地方，可以在下方留言，我會盡量幫你解惑

參考文章:

https://israynotarray.com/nodejs/20190626/2459037265/

https://nafeu.medium.com/global-filtering-and-sorting-with-react-table-ec604e57614a

https://github.com/TanStack/table/discussions/2468
