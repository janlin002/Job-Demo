import React from 'react'
import ('./style.css')

const Index = () => {
  const handleSelectChange = (e)=> {
    console.log(e.target.value)
  }
  return (
    <div>
      <select className='classic' onChange={(e) => handleSelectChange(e)}>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        
      </select>
    </div>
    
  )
}

export default Index