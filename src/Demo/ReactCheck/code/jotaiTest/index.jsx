import React from 'react'
import { atom, useAtom } from 'jotai'

// 1. 須先使用 atom 封裝
const initText = atom('nothing...')

const Index = () => {
  // 2. 然後透過 useAtom 去做接收
  const [text, setText] = useAtom(initText)

  const handleChange = (e) => setText(e.target.value)

  return (
    <div>
      <input type="text" onChange={(e)=>handleChange(e)}/>
      {/* <button onClick={(e)=>setText(e.target.value)}> 
        點擊
      </button> */}
      <div>{text}</div>
    </div>
    
  )
}

export default Index