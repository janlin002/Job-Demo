import React, { useState, useEffect } from 'react'
import M1 from './M1'

const Index = () => {
  const [messages, setMessages] = useState(['Hello World!'])

  const handleNewMessage = (event) => {
    console.log('messages', messages)

    if(event?.detail) {
      setMessages((currentMessages) => currentMessages.concat(event.detail))
    }
  }

  useEffect(() => {
    window.addEventListener('message', handleNewMessage)

    return () => {
      window.removeEventListener('message', handleNewMessage)
    }
  }, [handleNewMessage])
  return (
    <>
      <M1 />
      <button onClick={() => { handleNewMessage('Hi!') }}>Say Hi</button>
    </>
    
  )
}

export default Index