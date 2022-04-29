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
  // const props = {
  //   name: 'david',
  //   age: '12'
  // }

  const inputChange = (e) =>{
    console.log(e)
  }
  return (
    // <div>
    //   <div className="card">123</div>
    //   <div className="backdrop-blur">456</div>
    //   {/* not working */}
    //   <Test 
    //     {...props}
    //   />
    // </div>
    <input 
      type="text"
      onChange={(e)=>inputChange(e.target.value)}
    />
  )
}

export default FrostedGlass