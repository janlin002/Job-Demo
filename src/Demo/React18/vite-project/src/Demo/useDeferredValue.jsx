
import React, { useDeferredValue, useState, useEffect } from 'react'

const UseDeferredValue = () => {
  const [test, setTest] = useState('123')
  const [a, setA] = useState('A')
  const deferredValue = useDeferredValue(test)

  console.log(deferredValue, a,  'deferredValue')

  useEffect(()=>{
    setTest('456')
    setA('B')
  })
  return (
    <div>useDeferredValue</div>
  )
}

export default UseDeferredValue