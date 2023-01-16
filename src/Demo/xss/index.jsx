import React from 'react'

const XSS = () => {

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log('123')
  }
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      <input type="text" />
      <button type="submit">點擊</button>
    </form>
  )
}

export default XSS