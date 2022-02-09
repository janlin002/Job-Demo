import React, { useRef } from 'react'

const Ref = () =>{
  const number = useRef(0)
  console.log(number.current, 'number')

  React.useEffect(()=>{
    const loop = setInterval(()=>{
      console.log(number.current, 'setInterval')
      number.current++
    }, 1000)

    return()=> {
      clearInterval(loop)
    }
  }, [])
  return (
    <div>
      {number.current}
    </div>
  )
}

export default Ref

// useRef裡面的直更改，不會rerender