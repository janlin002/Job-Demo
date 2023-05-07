import React from 'react'

const Cache = () => {
  function cached(fn) {
    const cache = {}

    // 決定是否cache的行為
    return (...args) => {
      console.log(args, 'args')
      const key = JSON.stringify(args)
      if (key in cache) {
        return cache[key]
      } else {
        const val = fn(...args)
        cache[key] = val
        return val
      }
    }
  }

  // 要cache的function
  const handleClick = () =>{
    return '123'
  }

  const a = cached(handleClick)

  a('123')
  return (
    <div>
      
    </div>
  )
}

export default Cache
