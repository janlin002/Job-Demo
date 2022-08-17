import React from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
  // Push
  var arr = [1, 2, 3, 4, 5]
  function push() {
    for (var i = 0; i < arguments.length; i++) {
      arr[arr.length] = arguments[i];
    }
    return arr
  }
  push(6, 7)//[1,2,3,4,5,6,7]

  // Reverse
  const arr2 = [10, 5, 3, 8, 2] // 2,8,3,5,10

  function reverse(arr2){
    const arr3 = [...arr2]
    for(let i = 0; arr2.length > i; i++){
      arr2[i] = arr3[arr3.length - 1 - i]
    }
    return arr2
  }

  const arrayReverse = reverse(arr2)

  // pop
  const arr4 = [10, 5, 3, 8, 2]

  function pop(arr){
    let item = []
    for(let i= 0; arr4.length - 1 > i; i++){
      item.push(arr[i])
    }
    return item
  }

  pop(arr4)
  
  // shift
  const arr5 = [10, 5, 3, 8, 2]

  function shift(arr){
    let item = []
    for(let i= 1; arr4.length > i; i++){
      item.push(arr[i])
    }
    return item
  }

  shift(arr5)

  //unshift
  const arr6 = [10, 5, 3, 8, 2]

  function unshift(arr, ...other){
    return [...other, ...arr]
  }

  unshift(arr6, 1, 2)

  return (
    <div>ARRAY_METHOD</div>
  )
}

export default Index

// 有更好的寫法會回來修正