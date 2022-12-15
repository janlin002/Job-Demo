import React, { useRef } from 'react'

const Index = () => {
  const emailRef = useRef()
  const passwordRef = useRef()

  const onSubmit = (e) =>{
    e.preventDefault()

    console.log({
      email: emailRef.current.value,
      password: passwordRef.current.value
    })
  }
  
  return (
    <form onSubmit={onSubmit}>

      <label htmlFor="email">Email</label>
      <input 
        ref={emailRef}
        type="text"
        id="email"
      />

      <label htmlFor="password">Password</label>
      <input 
        ref={passwordRef}
        type="text"
        id="password"
      />
      
      <button
        type="submit"
      >
        點擊
      </button>
    </form>
  )
}

export default Index