/* eslint-disable react/prop-types */
import React, { useState } from 'react'

// const SonComponent = ({ zeus }) =>{
//   console.log('SON')
//   console.log(zeus, 'zeus')

//   return (
//     <div>SON</div>
//   )
// }
const SonComponent = () =>{
  console.log('SON')
  
  return (
    <div>SON</div>
  )
}

// const ParentComponent = () =>{
//   const [pState, setPState] = useState(true)
//   console.log(pState, 'parent')

//   return (
//     <>
//       <div>PARENT</div>
//       <SonComponent />
//       <button
//         onClick={()=>setPState(!pState)}
//       >
//         父層點擊
//       </button>
//     </>
//   )
// }

const ParentComponent = ({ children }) =>{
  const [pState, setPState] = useState(true)
  console.log(pState, 'parent')
  
  return (
    <>
      <div>PARENT</div>
      {children}
      <button
        onClick={()=>setPState(!pState)}
      >
          父層點擊
      </button>
    </>
  )
}

const ChildRender = () => {
  const [zeus, setZeus] = useState(true)
  return (
    <>
      <ParentComponent>
        <SonComponent
        //   zeus={zeus}
        />
      </ParentComponent>
      <button onClick={()=>setZeus(!zeus)}>最父層點擊</button>
    </>
  )
}

// const ChildRender = () => {
//   return (
//     <>
//       <div>ChildRender</div>
//       <ParentComponent />
//     </>
//   )
// }

export default ChildRender

// React 不會主動去更新 Children ，所以可以達到避免 prop drilling 的效果
// https://www.developerway.com/posts/react-elements-children-parents