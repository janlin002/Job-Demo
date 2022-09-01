import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const FatherComponent = () => {

  const David = {
    name: 'David',
    age: 24,
    sex: 'male'
  }

  useEffect(()=>{
    console.log(David, 'david')
  }, [David])
  
  return (
    <ChildComponent 
      me={David}
    />
  )
}

const ChildComponent = ({ me }) => {
  me.name = 'bill'

  console.log(me)

  return (
    <div>123</div>
  )
}

export default FatherComponent

ChildComponent.propTypes = {
  me: PropTypes.instanceOf(Object).isRequired,
}