import React, { lazy } from 'react'

const Basic = lazy(()=>import('./basic'))
// const WithReact = lazy(()=>import('./withReact'))
import WithReact from './withReact'
import WithReact2 from './withReact2'
import Article from './article'

const Index = () => {
  return (
    <Article />
  )
}

export default Index