import React, { useState, useEffect } from 'react';
import useValidation from './useValidation';

const CustomHook = ()=>{
  const [custom, setCustom] = useState('')
  const [isVIP, checkIsVIP] = useValidation('')

  const handleInputChange = (values) =>{
    setCustom(values)
  }
  const handleSearch = () =>{
    checkIsVIP(custom)
  }

  return (
    <form>
      <input 
        type="text"
        onChange={(e)=>handleInputChange(e.target.value)} />
      <button
        type="button"
        onClick={()=>handleSearch()}
      >
            查詢
      </button>
      <h1>此人{isVIP}VIP</h1>
    </form>
  )
}

export default CustomHook