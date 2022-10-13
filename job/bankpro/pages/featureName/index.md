```js
import React, { useState } from 'react'

function Index() {
  const [pageState, setPageState] = useState('search')

  // funciton 等邏輯會寫在這，透過props傳遞到個頁面
  return (
    <Choose>
      <When condition={pageState === 'search'}>
        <Search />
      </When>
      <When condition={pageState === 'result'}>
        <Result />
      </When>
      <Otherwise>
        <div>Error</div>
      </Otherwise>
    </Choose>

  )
}

export default Index

// 以上為 jsx-control-statements 語法
```