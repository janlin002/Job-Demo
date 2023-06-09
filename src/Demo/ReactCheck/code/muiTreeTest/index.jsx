import React, { lazy } from 'react'

const CustomTreeItem = lazy(()=>import('./customTreeItem'))
const CustomTreeBorder = lazy(()=>import('./customTreeBorder'))

const Index = () => {
  return (
    <CustomTreeItem />
    // <CustomTreeBorder />
  )
}

export default Index