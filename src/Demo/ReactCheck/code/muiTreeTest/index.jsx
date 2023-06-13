import React, { lazy } from 'react'

const CustomTreeItem = lazy(()=>import('./customTreeItem'))
const CustomTreeBorder = lazy(()=>import('./customTreeBorder'))
const ExpandedTest = lazy(()=>import('./expandedTest'))

const Index = () => {
  return (
    <CustomTreeItem />
  )
}

export default Index