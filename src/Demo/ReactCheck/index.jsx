import React, { useState, lazy } from 'react'

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

const ReactQueue = lazy(()=>import('./code/reactQueue'))
const NestComponent = lazy(()=>import('./code/nestedComponent'))
const YouDontNeedAnEffect = lazy(()=>import('./code/YouDontNeedAnEffect'))
const UseEffectDeeper = lazy(()=>import('./code/useEffectDeeper'))
const ViteTest = lazy(()=>import('./code/viteTest'))
const ReactSelect = lazy(()=>import('./code/ReactSelect'))
const CustomHookTest = lazy(()=>import('./code/customHookTest'))
const JsxControlStatement = lazy(()=>import('./code/jsxControlStatement'))

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
      <JsxControlStatement />
      {/* <div>React-Check</div> */}
    </>
  )
}

export default ReactCheck