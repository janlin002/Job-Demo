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