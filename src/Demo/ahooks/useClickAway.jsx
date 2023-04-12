import React, { useState, useRef } from 'react'
import { useClickAway } from 'ahooks'

const UseClickAway = () => {
  const [counter, setCounter] = useState(0)
  const ref = useRef<HTMLButtonElement>(null)
  useClickAway(() => {
    setCounter((s) => s + 1)
  }, ref)

  return (
    <div>
      <button ref={ref} type="button">
        box
      </button>
      <p>counter: {counter}</p>
    </div>
  )
}

export default UseClickAway

// https://ahooks.js.org/zh-CN/hooks/use-click-away