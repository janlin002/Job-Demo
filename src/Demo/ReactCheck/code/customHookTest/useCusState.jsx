import React, { useState , useEffect } from 'react'

const UseCusState = (initValue) => {
  const [text , setText] = useState('')

  // 一開始先綁定
  useEffect(()=>{
    setText(initValue)
  }, [initValue])

  // 更改狀態
  const chnageText = (val) =>{
    setText(val)
  }
  
  return [text, chnageText]
}

export default UseCusState