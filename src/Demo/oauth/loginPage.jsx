import React from 'react'
import { auth } from '../../assets/config/firebase'

const LoginPage = () => {
  console.log(auth, 'authhh')
  return (
    <div>
      <div>{auth?.currentUser?.displayName}</div>
      <div>{auth?.currentUser?.email}</div>
      <img src={auth?.currentUser?.photoURL} alt="" />
    </div>
  )
}

export default LoginPage