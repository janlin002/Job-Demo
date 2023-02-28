import React, { useRef, useState, useMemo } from 'react'

const Index = () => {
  const [change, setChange] = useState(false)
  const count = useRef(0)

  /**
   * 點擊 +1 按鈕，雖然 count 有更新，但不會導致畫面更新
   * 需等 useState 觸發更新才會更新畫面
   */

  return (
    <>
      <button
        type="button"
        onClick={()=>{count.current++}}
      >
        +1
      </button>
      <div>{count.current}</div>

      <button
        type="button"
        onClick={()=>setChange(!change)}
      >
        有更新
      </button>
    </>
  )
}

export default Index