import React from 'react'

let s  = [
  {
    id: 1,
    value: 2
  },
  {
    id: 1,
    value: 2
  },
  {
    id: 1,
    value: 2
  },
]

let a  = [
  {
    id: 1,
    value: 2
  },
  {
    id: 1,
    value: 2
  },
  {
    id: 1,
    value: 2
  },
  {
    id: 1,
    value: 2
  }
]

let b  = [
  {
    id: 1,
    value: 2
  },
  {
    id: 1,
    value: 2
  },
  {
    id: 1,
    value: 2
  }
]

let dataSet = [5,3,2]
// const arr = [3,4,3] [0,2,3] [0,0,2] [0,0,0]

const Filter = () =>{
  const sLength = s.length
  const aLength = a.length
  const bLength = b.length
    
  const arr = [sLength, aLength, bLength]

  let sCount
  let aCount
  let bCount

  for(let i = 0; i< dataSet.length ;i++){
    for(let j = 0; j< arr.length; j++){
      if(dataSet[0] < arr[j]){
        sCount = dataSet[0]
        arr[0] = dataSet[0]
      }
    }
  }

  console.log(sCount, arr)
  return (
    <div>Music-dad</div>
  )
}

export default Filter