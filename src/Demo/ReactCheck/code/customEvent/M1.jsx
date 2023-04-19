import React from 'react'

const M1 = () => {
  const reply = (msg) => {
    const customEvent = new CustomEvent('message', { detail: msg })
    window.dispatchEvent(customEvent)
  }
    
  return (
    <button onClick={() => { reply('Say hi again!') }}>Reply</button>
  )
}

export default M1