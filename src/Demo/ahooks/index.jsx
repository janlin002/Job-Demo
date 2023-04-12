import React, { lazy } from 'react'

const UseSelections = lazy(()=>import('./useSelections'))
const UseClickAway = lazy(()=>import('./useClickAway'))

const Index = () => {
  return (
    <UseSelections />
  )
}

export default Index