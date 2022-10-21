/* eslint-disable no-undef */
import React from 'react'
import { useQuery } from 'react-query'

const Index = () =>{
  const fetchPlanets = async () => {
    const { data } = await axios.get('xxxx')
    return data
  }
  const useTodos = () => useQuery(['userData'], fetchPlanets, {
    enabled: false
  })

  const handleButtonClick = () =>{
    refetch()
  }

  const {  data, isLoading, isError, isSuccess } = useTodos()
  return (
    <button type="button" onClick={handleButtonClick}>點擊</button>
  )

}

export default Index

