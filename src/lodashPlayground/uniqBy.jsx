import React from 'react'
import _ from 'lodash'

// 可減少打包的大小，或是使用 babel-plugin-import
// import { uniqBy } from 'lodash/uniqBy'
// import { flatMap } from 'lodash/flatMap'

const data = [
  [
    { code: '1', name: '123' },
    { code: '2', name: '123' },
    { code: '3', name: '123' },
    { code: '4', name: '123' },
    { code: '1', name: '123' },
    { code: '2', name: '123' }
  ],
  [
    { code: '1', name: '123' },
    { code: '2', name: '123' },
    { code: '3', name: '123' },
    { code: '4', name: '123' },
    { code: '5', name: '123' },
    { code: '6', name: '123' }
  ],
  [
    { code: '1', name: '123' },
    { code: '3', name: '123' },
    { code: '1', name: '123' },
    { code: '2', name: '123' },
    { code: '3', name: '123' },
    { code: '1', name: '123' }
  ],
  [
    { code: '1', name: '123' },
    { code: '7', name: '123' },
    { code: '1', name: '123' },
    { code: '1', name: '123' },
    { code: '2', name: '123' },
    { code: '1', name: '123' }
  ],
]

//   [
//     { code: '1', name: '123' },
//     { code: '2', name: '123' },
//     { code: '3', name: '123' },
//     { code: '4', name: '123' },
//     { code: '5', name: '123' },
//     { code: '6', name: '123' },
//     { code: '7', name: '123' }
//   ]

const UniqBy = () => {
  const result = _.uniqBy(_.flatMap(data), 'code')
    
  console.log(result, 'result')
  return (
    <div>
      UniqBy
    </div>
  )
}

export default UniqBy
