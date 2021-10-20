import React from 'react';
import { useSelector } from 'react-redux';
import { checkSagaData } from '../../Redux/selector'

const SelectorTest = () =>{
  const data = useSelector(checkSagaData)
  console.log(data, 'test')
  return (
    <div>test</div>
  )
}

export default SelectorTest

/**
 * 此方法可行
 */