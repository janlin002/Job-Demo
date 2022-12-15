import { current } from 'immer'
import React, { useRef, useState } from 'react'

const UseRef = () => {
  const myRef = useRef(0)
  const [count, setCount] = useState(0)

  console.log(myRef.current, count, 'current')

  return (
    <div>
      <button type="button" onClick={()=>myRef.current += 1}>點擊</button>
      <button type="button" onClick={()=>setCount(count + 1)}>點擊</button>
    </div>
  )
}

export default UseRef