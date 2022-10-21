/* eslint-disable no-undef */
import React from 'react'
import { useDispatch } from 'react-redux'

const Index = () =>{
  const dispatch = useDispatch()
  const handleButtonClick = () =>{
    dispatch(getUserInfo())
  }
  return (
    <button type="button" onClick={handleButtonClick}>點擊</button>
  )

}

export default Index
