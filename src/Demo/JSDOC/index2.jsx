import React from 'react'

const JSDOC2 = () =>{
  /**
     * 
     * @param {numbrt} a 參數1
     * @param {number} b 參數2
     * @param {number} c 參數3
     * @returns {number|boolean} 相加
     */
  const handleClick = (a, b, c) =>{
    if(c){
      return a+b>c
    }
    return a + b
  }
  return (
    <div>
      <button 
        onClick={handleClick(1, 2, 3)}
      >點擊</button>
    </div>
  )
}

export default JSDOC2