import React from 'react'
import './style.css'

const Test= (values)=>{
  // console.log(values, 'values')
  const { name, age } = values
  console.log(name, age)
  return (
    <div>123</div>
  )
}

const FrostedGlass = () =>{
  const props = {
    name: 'david',
    age: '12'
  }
  return (
    <div>
      <div className="card">123</div>
      <div className="backdrop-blur">456</div>
      {/* not working */}
      <Test 
        {...props}
      />
    </div>
  )
}

export default FrostedGlass