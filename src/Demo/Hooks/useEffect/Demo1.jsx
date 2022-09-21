import React, { useEffect, useState } from 'react';

const Demo1 = () =>{
  const [count, setCount] = useState('1')

  useEffect(()=>{
    setCount('2')
    setCount('3')
  }, [])

  useEffect(()=>{
    console.log(count, 'count')
  }, [count])

  const handleSubmit1 = (a) =>{
    console.log(a, 'q')
    console.log('hello1')
  }

  const handleSubmit2 = () =>{
    console.log('hello2')
  }

  const handleSubmit3 = () =>{
    console.log('hello3')
  }

  return (
    <>
      <div>Demo1</div>
      <button onClick={()=>handleSubmit1()}>
        點擊
      </button>
      <button onClick={handleSubmit2}>
        點擊
      </button>
      <button onClick={handleSubmit3()}>
        點擊
      </button>
    </>
  )
}

export default Demo1

// 只會渲染最後一次的原因是因為react的batching update機制