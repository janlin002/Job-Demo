import React from 'react'
import { filter } from 'lodash/filter'
// import _ from 'lodash'

const users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
]

const Filter = () => {
//   const item = _(users).filter((i)=>{
//     i.user === 'fred'
//   })
  const item = users.filter(item => item.user === 'fred')

  console.log(item, 'item')
  return (
    <div>Filter</div>
  )
}

export default Filter