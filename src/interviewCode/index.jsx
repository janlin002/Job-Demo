import React, { lazy } from 'react'

const PromiseHannah = lazy(()=>import('./PromiseHannah'))

const Index = () => {
  return (
    <PromiseHannah />
  )
}

export default Index