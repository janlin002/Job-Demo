import React from 'react'
import { useTodos } from './index' 

const index2 = () => {
  const { data } = useTodos()

  console.log(data, 'data222')
  return (
    <div>index2</div>
  )
}

export default index2