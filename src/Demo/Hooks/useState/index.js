import React, { useEffect } from 'react';

const UseState = () =>{
  const [a, b] = useState('1')

  useEffect(()=>{
    b('2')
  })

  return (
    <div>123</div>
  )
}

export default UseState

// const useState = (init) =>{
//   let initValue
//   function dispatch(initValue){
//     let initValue = init
//   }
// }

function useState(init){
  let initValue = init
  function dispatch(newState){
    initValue = newState
    console.log(newState, 'newState')
  }
  console.log(initValue, 'init')
  return [initValue, dispatch]
}