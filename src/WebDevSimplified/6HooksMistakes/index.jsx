import React, { lazy } from 'react'

import UseRef from './useRef'
const SetStateSnapShot = lazy(()=>import('./setStateSnapshot'))
const StateNotImmediately = lazy(()=>import('./stateNotImmediately'))
const UnnecessaryUseEffects = lazy(()=>import('./unnecessaryUseEffects'))
const ReferentialEqualityMistakes = lazy(()=>import('./referentialEqualityMistakes'))

const Index = () => {
  return (
    <UseRef />
  )
}

export default Index