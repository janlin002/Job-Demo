import React, { useRef, useEffect } from 'react'

const Ref = () =>{
  const number = useRef(0)
  // console.log(number.current, 'number')

  const inputRef = useRef()
  const countNumber = useRef(0)
  
  const clickHandler = () => {
    inputRef.current.focus() // 按鈕focus
  }

  const numberClick = () =>{
    countNumber.current += 1

    console.log(countNumber.current, 'inside')
  }

  // console.log(inputRef.current, 'ref')
  console.log(countNumber.current, 'count number')

  React.useEffect(()=>{
    const loop = setInterval(()=>{
      // console.log(number.current, 'setInterval')
      number.current++
    }, 1000)

    return()=> {
      clearInterval(loop)
    }
  }, [])
  return (
    <>
      <div>
        {number.current}
      </div>
      <div>
        <input type='text' ref={inputRef} />
        <button onClick={clickHandler}>Focus</button>
        <button onClick={numberClick}>add</button>
      </div>
    </>
    
  )
}

export default Ref

// useRef裡面的直更改，不會rerender