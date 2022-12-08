import React from 'react'

const index = () => {

  const [A, setA] = React.useState(1)
  const [B, setB] = React.useState(1)

  console.log(A, B, 'check')

  React.useEffect(()=>{
    console.log('我改變了!')
  }), [A, B]
  return (
    <div>
      <button
        type="button"
        onClick={()=>{
          setA(prev =>prev+1)
          setB(prev =>prev+1)
        }}>
            點擊
      </button>
    </div>
  )
}

export default index