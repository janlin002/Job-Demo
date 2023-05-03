import React from 'react'

const Filter = () => {

  function removeDuplicate(arr) {
    return arr.filter((item, index, array) => {
      console.log('item:', item, 'index:', index, 'array:', array)
      //   console.log(array.indexOf(item), 'indexOf')
      array.indexOf(item) === index}
    )
  }
      
  let arr = [1, 2, 3, 2, 3, 8]
  let arrAfter = removeDuplicate(arr)
      
  console.log(arrAfter, 'arrAfter') // [1, 2, 3, 8]
  return (
    <div>
      Filter
    </div>
  )
}

export default Filter
