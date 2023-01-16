import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, provide } from '../../assets/config/firebase'
import { signInWithPopup } from 'firebase/auth'

const Index = () => {
  const navigate = useNavigate()

  const handleLogin = async() =>{
    const result = await signInWithPopup(auth, provide)

    console.log(result, 'result')
    navigate('/oauth/login')
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Index

// https://www.youtube.com/watch?v=Xuy2fuE2qAI