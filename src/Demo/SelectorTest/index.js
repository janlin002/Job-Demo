import React from 'react';
import { useSelector } from 'react-redux';
import { checkSagaData } from '../../Redux/selector'

const SelectorTest = () =>{
  var arr = [1, 2, 3, 4, 5]
  //给push封装，向数组尾部追加值
  function push() {
    console.log(arguments.length, 'arguments')
    //arguments 伪数组,遍历伪数组，存入arr中，每循环一次，arr.length的值会加一。进而可以存值
    for (var i = 0; i < arguments.length; i++) {
      arr[arr.length] = arguments[i];
    }
    console.log(arr);
  }
  push(6, 7)//[1,2,3,4,5,6,7]

  return (
    <div>123</div>
  )
}

export default SelectorTest

/**
 * 此方法可行
 */