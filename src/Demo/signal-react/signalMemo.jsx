import React, { useState } from 'react'
import { signal } from "@preact/signals-react"

const Index = () => {
  const [count, setCount] = useState(0)
  const title = signal('')

  const handleCountClick = ()=>{
    setCount((prev)=>prev+1)
  }

  const handleInputChange = (e) =>{
    title.value = e
  }

  return (
    <div>
      <p>{Date.now()}</p>

      <div>
        <p>Count: {count}</p>
        <button onClick={() => handleCountClick()}>Increment</button>
      </div>

      <div>
        <p>Title: {title}</p>
        <input type="text" onChange={(e)=>handleInputChange(e.target.value)} />
      </div>
      
    </div>
  )
}

export default Index