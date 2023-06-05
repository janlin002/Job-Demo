import React, { Component, lazy } from 'react'

// Component
const Badge = lazy(()=>import('./Badge'))
const DatePicker = lazy(()=>import('./DatePicker'))
const Drawer = lazy(()=>import('./Drawer'))
const Notification = lazy(()=>import('./Notification'))
const Progress = lazy(()=>import('./Progress'))
const Spin = lazy(()=>import('./Spin'))
const Tooltip = lazy(()=>import('./Tooltip'))
const Popover = lazy(()=>import('./Popover'))
const Tree = lazy(()=>import('./Tree'))

const Index = () => {
  return (
    <>
      {/* <Badge /> */}
      {/* <DatePicker /> */}
      {/* <Drawer /> */}
      {/* <Notification /> */}
      {/* <Progress /> */}
      {/* <Spin /> */}
      {/* <Tooltip /> */}
      {/* <Popover /> */}
      <Tree />
    </>
  )
}

export default Index