import React, { lazy } from 'react'

const Absolute = lazy(()=>import('./absolute'))
const Fixed = lazy(()=>import('./fixed'))
const Relative = lazy(()=>import('./relative'))

const Index = () => {
  return (
    <Relative />
  )
}

export default Index