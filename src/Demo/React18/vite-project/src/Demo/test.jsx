import React, { useId } from 'react'

const Test = () => {
  const email = useId()

  console.log(email, 'email')
  console.log('123')
  return (
    <div>Test</div>
  )
}

export default Test