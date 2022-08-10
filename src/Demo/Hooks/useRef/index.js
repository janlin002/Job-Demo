import React, { useRef, useState } from 'react'

const Ref = () =>{
  // const number = useRef(0)
  // const test = useRef('123')
  // console.log(number.current, 'number')

  // console.log(test.current, 'test')

  // const inputRef = useRef()
  // const countNumber = useRef(0)

  // console.log(inputRef.current, 'inputRef')
  
  // const clickHandler = () => {
  //   inputRef.current.focus() // 按鈕focus
  //   // inputRef.current.style.backgroundColor = "blue"
  // }

  // const numberClick = () =>{
  //   countNumber.current += 1

  //   console.log(countNumber.current, 'inside')
  // }

  // console.log(inputRef.current, 'ref')
  // console.log(countNumber.current, 'count number')

  // React.useEffect(()=>{
  //   const loop = setInterval(()=>{
  //     // console.log(number.current, 'setInterval')
  //     number.current++
  //   }, 1000)

  //   return()=> {
  //     clearInterval(loop)
  //   }
  // }, [])
  const [count, setCount] = useState(1);
  const otherRef = useRef(1);
  
  return (
    <>
      {/* <div>
        {number.current}
      </div> */}
      <h1>不受畫面影響渲染的ref，{otherRef.current}</h1>
      <h1>畫面渲染次數 {count}</h1>
      <div>
        {/* <input type='text' ref={inputRef} /> */}
        {/* <button onClick={clickHandler}>Focus</button>
        <button onClick={numberClick}>add</button> */}
      </div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        使state改變
      </button>
      <button
        onClick={() => {
          otherRef.current++;
        }}
      >
        使ref.current改變, 不會rerender
      </button>
    </>
    
  )
}

export default Ref

// useRef裡面的直更改，不會rerender
// useRef直接對DOM做更改，在State沒有變動的情況下，導致畫面不會重新render，也就是所謂的非控制組件