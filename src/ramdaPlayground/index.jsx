import React from 'react'
import * as _ from 'ramda'
// import * as R from 'ramda'

const Index = () => {
  const a = ['1','2','3']

  console.log(_.filter((item)=>item === '2', a), 'filter')
  return (
    <div>Index</div>
  )
}

export default Index