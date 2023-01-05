import React, { lazy } from 'react'

const PromiseHannah = lazy(()=>import('./PromiseHannah'))
const EZTravel = lazy(()=>import('./ezTravel'))

const Index = () => {
  return (
    <EZTravel />
  )
}

export default Index