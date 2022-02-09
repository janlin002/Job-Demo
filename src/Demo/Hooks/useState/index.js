import React, { useEffect } from 'react';

const UseState = () =>{
  const [a, b] = useState('1')

  useEffect(()=>{
    b('2')
  })

  return (
    <div>useState</div>
  )
}

export default UseState

function useState(init){
  let initValue = init
  function dispatch(newState){
    initValue = newState
    console.log(newState, 'newState')
  }
  return [initValue, dispatch]
}