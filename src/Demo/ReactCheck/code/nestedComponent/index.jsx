import React, { useState } from 'react'

const TextInput = () =>{
  return (
    <input type="text" />
  )
}

const Index = () => {
  const [isShow, setIsShow] = useState(true)
  return (
    <div>
      {/* <div>測試</div> */}
      <label>
        <input 
          type="checkbox"
          checked={isShow}
          onChange={(e)=>setIsShow(e.target.checked)}
        />
        發送Email
      </label>
      {/* <button onClick={()=>setIsShow(!isShow)}>顯示</button> */}
      {isShow && TextInput()}
    </div>
  )
  
}

export default Index