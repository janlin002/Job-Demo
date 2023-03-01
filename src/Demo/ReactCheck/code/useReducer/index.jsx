import React, { lazy } from 'react'

const Reducer = lazy(()=>import('./reducer'))
const State = lazy(()=>import('./state'))

const Index = () => {
  return (
    <Reducer />
  )
}

export default Index