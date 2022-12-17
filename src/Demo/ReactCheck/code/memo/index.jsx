import React from 'react'

// function UnmemorizedComponent({ myProp }) {
//   const refConunt = React.useRef(0)
//   refConunt.current ++
    
//   return (
//     <div>UnmemorizedComponent, count = {refConunt.current}</div>
//   )
// }
function areEqual(prevProp, nextProp) {
  if(prevProp.content === nextProp.content) {
    return true
  } else {
    return false
  }
}
  
// const MemorizedComponent = React.memo(UnmemorizedComponent, areEqual)
  
function App() {
  const [buttonState, setButtonState] = React.useState(false)
  const handleClickButton = () => {
    setButtonState(!buttonState)
  }
  const object = {
    content: null,
  }
     
  return (
    <div>
      <button onClick={handleClickButton}>click</button>
      {/* <UnmemorizedComponent myProp={object}/>
      <MemorizedComponent myProp={object}/> */}
    </div>
  )
}

export default App