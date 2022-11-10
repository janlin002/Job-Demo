import React, { useState } from 'react'

function Dog() {
  return <h1>旺旺旺</h1>
}
function Cat() {
  return <h1>喵喵喵</h1>
}

const Index = () => {
  const [pet, setPet] = useState('dog')
  return (
    <div>
      {
        pet === 'dog' ? <Dog /> : <Cat />
      }
    </div>
  )
  
}

export default Index