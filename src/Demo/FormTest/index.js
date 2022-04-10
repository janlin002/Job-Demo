import React, { useState } from 'react';

const FormTest = () =>{
  const [inputValue, setInputValue] = useState('')

  const handleChange =(e)=>{
    console.log(e.target.value)
    setInputValue(e.target.value)
  }

  const handleSubmit = (value)=>{
    console.log('click')
    console.log(value)
  }

  const handleClick = () =>{
    console.log(inputValue, 'inputValue')
  }
  return (
    <form onSubmit={()=>handleSubmit()}>
      <input type="text" onChange={handleChange}/>
      <button
        // type="submit"
        type="button"
        onClick={handleClick}
        className="btn btn-primary"
      >
          點擊
      </button>
      <input type="submit" className="btn btn-primary"/>
    </form>
  )
}

export default FormTest