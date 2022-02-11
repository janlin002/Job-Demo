import React, { useEffect, useState } from 'react';

const Demo1 = () =>{
  const [count, setCount] = useState('1')

  useEffect(()=>{
    setCount('2')
    setCount('1')
    // setCount('4')
  }, [])

  useEffect(()=>{
    console.log(count)
  }, [count])

  return (
    <>
      <div>Demo1</div>
    </>
  )
}

export default Demo1