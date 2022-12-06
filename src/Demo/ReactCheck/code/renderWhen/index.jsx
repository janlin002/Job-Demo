import React from 'react'
import RenderWhen from './renderWhen'

export function App() {
  const x = 2

  return (
    <RenderWhen>
      <RenderWhen.If isTrue={x === 2}>
        Hello 2
      </RenderWhen.If>
      <RenderWhen.If isTrue={x === 2}>
        Bye 2
      </RenderWhen.If>
    </RenderWhen>
  )
}