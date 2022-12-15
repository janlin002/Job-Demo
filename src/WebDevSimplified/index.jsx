import React, { lazy } from 'react'

// Component
const CodeSplitting = lazy(()=>import('./codeSplitting/index'))
const SixHooksMistakes = lazy(()=>import('./6HooksMistakes'))

const Index = () => {
  return (
    <SixHooksMistakes />
  )
}

export default Index