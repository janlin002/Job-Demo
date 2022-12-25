import React, { lazy } from 'react'

const Absolute = lazy(()=>import('./absolute'))
const Fixed = lazy(()=>import('./fixed'))
const Relative = lazy(()=>import('./relative'))
const Sticky = lazy(()=>import('./sticky'))

const Index = () => {
  return (
    <Sticky />
  )
}

export default Index