import React, { useState, useEffect } from 'react'
import { Observable } from 'windowed-observable'

const WindowedObservable = () => {
  const [messages, setMessages] = useState([])

  const observable = new Observable('konoha')
  observable.subscribe((ninja) => {
    console.log(ninja)
  })

  const handleNewMessage = (newMessage) => {
    console.log('messages: ', newMessage)
    setMessages((currentMessages) => currentMessages.concat(newMessage))
  }

  useEffect(() => {
    observable.subscribe(handleNewMessage)

    return () => {
      observable.unsubscribe(handleNewMessage)
    }
  }, [handleNewMessage])

  observable.publish('Uchiha Shisui')
  return (
    <button
      onClick={() => { handleNewMessage('Hi!') }}
    >
        點擊觸發微前端
    </button>
  )
}

export default WindowedObservable