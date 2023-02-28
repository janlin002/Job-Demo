import React, { lazy } from 'react'

const WithSignal = lazy(()=>import('./withSignal'))
const WithoutSignal = lazy(()=>import('./withoutSignal'))
const UseRef = lazy(()=>import('./useRef'))
const UseMemo = lazy(()=>import('./UseMemo'))
const SignalCart = lazy(()=>import('./signalCart'))
const Memo = lazy(()=>import('./memorized'))
const SignalMemo = lazy(()=>import('./signalMemo'))
const Computed = lazy(()=>import('./computed'))
const Effect = lazy(()=>import('./effect'))

const Index = () => {
  return (
    <Effect />
  )
}

export default Index