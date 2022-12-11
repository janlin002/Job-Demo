import React, { lazy } from 'react'

// Component
const CodeSplitting = lazy(()=>import('./codeSplitting/index'))

const Index = () => {
  return (
    <CodeSplitting />
  )
}

export default Index