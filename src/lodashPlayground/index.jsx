import React, { lazy } from 'react'

// const UniqBy = lazy(()=>import('./uniqBy'))
import UniqBy from './uniqBy'
import Filter from './filter'
import Get from './get'
import ChatGPT_get from './chatGPT_get'

const Index = () => {
  return (
    <ChatGPT_get />
  )
}

export default Index
