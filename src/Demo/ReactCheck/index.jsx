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
import JsxCondition from './code/jsxCondition'
import UbikeApiTest from './code/ubikeApiTest'
import MusicDad from './code/musicDad'
import Promise from './code/Promise'
import ReactTableSpan from './code/reactTableSpan'
import ReactTableHeaderGroup from './code/reactTableHeaderGroup'
import Interview from './code/interview'
import UseRef from './code/useRef'
import SyntheticEvent from './code/syntheticEvent'

const ReactCheck = () => {
  let [count, setCount] = useState([])

  const a = [100, 200, 300]

  React.useEffect(()=>{
    setCount('1')
  }, [])

  // for(var i = 0; i < 3; i++){
  //   setTimeout(function(i){
  //     console.log(i, a[i])
  //   }, a[i])
  // }

  return (
    <>
      <SyntheticEvent />
      {/* <div>React-Check</div> */}
    </>
  )
}

export default ReactCheck