# Code Splitting

code splitting 的目的是希望可以用到時，才做下載，避免 bundle 太過大包

https://ithelp.ithome.com.tw/articles/10268498

## code splitting a function

### Export

component:
```js
import React from 'react'

const Index = () =>{
  return (
    <div>
      <button
        type='button'
        onClick={
          ()=>import('./count')
            .then((module)=> console.log(module.count(1, 2)))
        }
      >
        點擊
      </button>
    </div>
  )
}

export default Index
```

function:
```js
import React from 'react'

const count = (a, b) =>{
  return a + b
}

export  { count } 
```

## Export default

component:
```js
import React from 'react'

const Index = () =>{
  return (
    <div>
      <button
        type='button'
        onClick={
          ()=>import('./count')
            .then((module)=> console.log(module.default(1, 2)))}
      >
        點擊
      </button>
    </div>
  )
}

export default Index
```

function:
```js
import React from 'react'

const count = (a, b) =>{
  return a + b
}

export default count
```

> 這邊要注意 export 跟 export default 會影響到 dynamic import 的 module 形式


## code splitting a component

```js
const CodeSplitting = lazy(()=>import('./codeSplitting/index'))
```

## 如何知道是否有 Code Splitting ?

可以到 f12 的 source 找到該功能的資料夾

![image](./image/%E6%88%AA%E5%9C%96%202022-12-11%20%E4%B8%8B%E5%8D%8811.23.59.png)

這邊可以看到因為我們還沒有按下 button，所以 count.jsx 還沒有被下載

當今天按下 button 後:

![image2](./image/%E6%88%AA%E5%9C%96%202022-12-11%20%E4%B8%8B%E5%8D%8811.26.37.png)

就會發現 count.jsx 被下載了，這就是簡單的 Code Splitting