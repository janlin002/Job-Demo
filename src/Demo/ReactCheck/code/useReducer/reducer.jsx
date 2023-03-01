import React, { useReducer } from 'react'

const initState = {
  name: '',
  pwd: '',
  isLoading: false,
  error: '',
  isLoggedIn: false,
}

const Reducer = () => {
  /**
     * prev => 修改前的值
     * next => 要更新的值
     */
  const [event, updateEvent] = useReducer((prev, next)=>{
    return { ...prev, ...next }
  }, initState)

  console.log(event, 'event')

  return (
    <button onClick={()=> updateEvent({ name: 'Jan' })}>點擊+1</button>
  )
}

export default Reducer