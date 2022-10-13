import React from 'react'
import './style.css'

const mixBlendMode = () =>{
  return(
    // <div></div>
    <form>
      <input type="text" onChange={(e)=>console.log(e.target.value, '2')} />
      <button type="button" onClick={(e)=>console.log(e.target.value)}>點擊</button>
    </form>
  )
}
export default mixBlendMode