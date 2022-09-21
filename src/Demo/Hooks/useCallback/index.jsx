import React, { useState, useCallback, } from 'react'

const SendButton = (handleClick) =>{
  return (
    <button onClick={()=>handleClick()}>
            點擊
    </button>
  )
}

const UseCallBack = () => {
  const [text, setText] = useState('');

  const onClick = useCallback(() => {
    // sendMessage(text);
  }, []);
  
  return <SendButton onClick={onClick} />
}

export default UseCallBack