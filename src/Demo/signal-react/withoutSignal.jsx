import React, { useState, memo } from 'react'

const Child = () =>{
  console.log('==== re-render了 ====')
  return (
    <div>123</div>
  )
}

const CustomChild = memo(Child)

const WithoutSignal = () => {
  const [count, setCount] = useState(0)

  console.log(count, 'count')
  return (
    <>
      <CustomChild />
      <button
        type="button"
        onClick={()=>setCount(prev => prev+1)}
      >
        點擊
      </button>
    </>
  )
}

export default WithoutSignal

