import React, { useRef } from 'react';

const Ref = () =>{
  const inputRef = useRef(null)

  const handleClick = () =>{
    inputRef.current.focus()
    inputRef.current.style.backgroundColor = "blue"
  }

  const handleClickBlur = () =>{
    inputRef.current.style.backgroundColor = "orange"
    inputRef.current.blur()
  }

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={()=>handleClick()}>點擊focus事件</button>
      <button onClick={()=>handleClickBlur()}>點擊Blur事件</button>
    </>
  )
}

export default Ref