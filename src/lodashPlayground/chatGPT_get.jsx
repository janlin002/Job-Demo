import React from 'react'

const ChatGPT_get = () => {

  const get = (obj, path, defaultValue) =>{
    return path
      .split('.')
      .reduce((acc, key) => {
        if (acc && typeof acc === 'object' && key in acc) {
          return acc[key]
        }
        return defaultValue
      }, obj)
  }

  const obj = {
    a: {
      b: {
        c: 42,
      },
    },
  }
  
  const test = get(obj, 'a.b.c')

  console.log(test, 'test')
  return (
    <div>
      ChatGPT_get
    </div>
  )
}

export default ChatGPT_get
