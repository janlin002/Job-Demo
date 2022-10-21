import React from 'react'
import { useLocation } from 'react-router-dom'

import { useTodos } from '../React-query'

const ReactRouter = () => {
  const { pathname } = useLocation()

  console.log(pathname, 'pathname')

  const { data } = useTodos()

  console.log(data, 'router')
  // path
  //hash
  return (
    <div>index</div>
  )
}

export default ReactRouter