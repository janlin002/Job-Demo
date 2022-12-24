import React, { lazy } from 'react'

const Absolute = lazy(()=>import('./absolute'))
const Fixed = lazy(()=>import('./fixed'))

const Index = () => {
  return (
    <Fixed />
  )
}

export default Index