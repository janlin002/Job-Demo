import React, { useState, useMemo } from 'react'

const Memorized = () => {
  const [count, setCount] = useState(0)

  const factorial = useMemo(() => {
    let result = 1
    for (let i = 1; i <= count; i++) {
      result *= i
    }
    return result
  }, [count])

  return (
    <div>
      <p>Count: {count}</p>
      <p>Factorial: {factorial}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Memorized