import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { test } from '../../../Redux/action'

import {
  testData
} from '../../../Redux/selector'

const Demo2 = () =>{
  const dispatch = useDispatch()
  const testDatas = useSelector(testData)

  useEffect(()=>{
    dispatch(test(true))
    dispatch(test(false))
  }, [])

  useEffect(()=>{
    console.log(testDatas, 'testDatas')
  }, [testDatas])

  return (
    <>
      <div>Demo2</div>
    </>
  )
}

export default Demo2