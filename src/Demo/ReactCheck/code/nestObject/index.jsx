import React, { useState } from 'react'

const Index = () => {
  const [testObject, setTestObject] = useState({ name: 'Jan' })

  console.log('==== 我重新渲染拉 ====')

  const handleClick = (updateValue) =>{
    if(JSON.stringify(testObject) !== JSON.stringify(updateValue)){
      alert('不一樣')
      setTestObject(updateValue)
    }else {
      alert('一樣拉')
    }
  }
  
  return (
    <div>
      <button type="button" onClick={()=> handleClick({ name: 'Bill' })}>點擊測試</button>
    </div>
    
  )
}

export default Index

// 使用 JSON.stringfy 可以達到多層的判斷
// 或是可以使用第三方套件，例如 Lodash