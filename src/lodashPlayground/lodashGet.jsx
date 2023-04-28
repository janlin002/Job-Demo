import React from 'react'
import _ from 'lodash'

const LodashGet = () => {
  let object = { 'a': [{ 'b': { 'c': 3 } }] }

  const test = _.get(object, 'a[0].b.c')

  console.log(test, 'test')
  return (
    <div>LodashGet</div>
  )
}

export default LodashGet