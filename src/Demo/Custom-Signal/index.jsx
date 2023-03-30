import React from 'react'

// import createSignal from './createSignal'
import { createSignal, createEffect } from './cusSignal'

const Index = () => {
  const [count, setCount] = createSignal(0)
  const [normalCount, setNormalCount] = React.useState(0)

  createEffect(()=>{
    console.log('123')
  })

  console.log(count(), 'count')

  //   return (
  //     <>
  //       <button onClick={()=>setCount(count() + 1)}>
  //         Signal 點擊加ㄧ
  //       </button>
  //       <div>{count()}</div>
  //       <button onClick={()=>setNormalCount(prev => prev+1)}>
  //         normal 點擊加ㄧ
  //       </button>
  //     </>
  //   )
  // }
  return (
    <button
      onClick={() => setCount(count() + 1)}>
      {count()}
    </button>
  )
}

export default Index