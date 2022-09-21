import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { getSagaTest } from '../../Redux/action'

function JobStyleSaga(){
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getSagaTest())
  }, [])
  return (
    <div>123</div>
  )
}

export default JobStyleSaga