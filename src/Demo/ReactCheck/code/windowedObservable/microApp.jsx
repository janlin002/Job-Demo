import React from 'react'
import { Observable } from 'windowed-observable'

const MicroApp = () => {
  const observable = new Observable('messages')

  return (
    // <button onClick={() => { observable.publish('Say hi again!') }}>Reply!</button>
    <div>Micro-app</div>
  )
}

export default MicroApp