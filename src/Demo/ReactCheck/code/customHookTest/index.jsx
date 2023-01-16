import React from 'react'
import UseCusState from './useCusState'

const Index = () => {
  const [text, setText] = UseCusState(0)

  return (
    <div>
      <input type="text" onChange={(e)=>setText(e.target.value)} />
      {text}
    </div>
  )
}

export default Index
