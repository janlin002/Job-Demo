import React, { lazy } from 'react'

const Learn = lazy(()=>import('./learn'))
const OneClassLearn = lazy(()=>import('./oneClassXstateLearn'))

const Index = () => {
  return (
    // <OneClassLearn />
    <Learn />
  )
}

export default Index