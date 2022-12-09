import React from 'react'
import PropTypes from 'prop-types'

const If = ({ condition, children }) => {
  if(condition === false){
    return null
  }else{
    return children
  }
}

const For = ({ idx, of, children }) =>{
  for(let i = 0; i<of.length; i++){
    idx = i
    console.log(idx, 'idx')
  }
  
  return <div>123</div>
}

export { If, For }

If.propTypes = {
  condition: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
}

For.propTypes = {
  idx:  PropTypes.string.isRequired,
  of: PropTypes.instanceOf(Object).isRequired,
  children: PropTypes.element.isRequired,
}