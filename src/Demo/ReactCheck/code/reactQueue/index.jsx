import React, { useState } from 'react'

const Counter = () => {
  const [number, setNumber] = useState(0)

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 5)
        setNumber(n => n + 1)
      }}>Increase the number</button>
    </>
  //      <>
  //      <h1>{number}</h1>
  //      <button onClick={() => {
  //        setNumber(number + 5)
  //        setNumber(n => n + 1)
  //        setNumber(43)
  //      }}>Increase the number</button>
  //    </>
  )
}

export default Counter
