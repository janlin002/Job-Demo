import React, { useState } from 'react'

// test components
import BatchUpdate from './code/batchUpdate'
import UnControl from './code/uncontrol'
import RederProps from './code/renderProps'
import CantChangeProps from './code/cantChangeProps'
import DataBinding from './code/dataBinding'
import BetaContext from './code/betaContext'
import NestedReducer from './code/nestedReducer'
import EventHandler from './code/EventHandler'
import StateSnapchat from './code/stateSnapshot'
// import RenderWhen from './code/renderWhen'
import TwoEffectTest from './code/twpEffectTest'

const ReactCheck = () => {
  let [count, setCount] = useState([])

  const a = [100, 200, 300]

  // for(var i = 0; i < 3; i++){
  //   setTimeout(function(i){
  //     console.log(i, a[i])
  //   }, a[i])
  // }

  return (
    <>
      <TwoEffectTest />
      {/* <div>React-Check</div> */}
    </>
  )
}

export default ReactCheck