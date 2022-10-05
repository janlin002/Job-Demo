import React from 'react'
import { useDispatch } from 'react-redux'

import {
  reducerTest
} from '../../../../Redux/action'

const Index = () => {
  const dispatch = useDispatch()

  React.useEffect(()=>{
    dispatch(reducerTest('123'))
  }, [])
  return (
    <div>Index</div>
  )
}

export default Index