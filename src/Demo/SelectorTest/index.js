import React from 'react';
import { useSelector } from 'react-redux';
import { checkSagaData } from '../../Redux/selector'

const SelectorTest = () =>{
  // Push
  var arr = [1, 2, 3, 4, 5]
  //给push封装，向数组尾部追加值
  function push() {
    // console.log(arguments.length, 'arguments')
    //arguments 伪数组,遍历伪数组，存入arr中，每循环一次，arr.length的值会加一。进而可以存值
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

  return (
    <div>123</div>
  )
}

export default SelectorTest

/**
 * 此方法可行
 */