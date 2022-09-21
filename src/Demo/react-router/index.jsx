import React from 'react'
import { useLocation } from 'react-router-dom'

const ReactRouter = () => {
  const { pathname } = useLocation()

  console.log(pathname, 'pathname')
  // path
  //hash
  return (
    <div>index</div>
  )
}

export default ReactRouter