import React from 'react'

const Index = () => {
  const [text, setText] = React.useState('')
  return (
    <>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
      <p>{text}</p>
    </>
  )
}

export default Index