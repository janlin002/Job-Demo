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

  // flat
  function flatten(arr) {
    while (arr.some(item => Array.isArray(item))) {
      arr = [].concat(...arr);
    }
    return arr;
  }

  const flat = flatten([1, [2, [3]]])

  //Debounce
  // function debounce(func, wait) {
  //   var timeout;
  //   return function () {
  //     var context = this;
  //     var args = arguments;
  //     clearTimeout(timeout)
  //     timeout = setTimeout(function(){
  //       func.apply(context, args)
  //     }, wait);
  //   }
  // }

  // function getUserAction(e) {
  //   console.log(this, e)  // 分别打印：node 这个节点 和 MouseEvent
  // }

  // let abc = debounce(getUserAction, 1000)

  // console.log(abc())

  // instanceOf
  // A instanceOf B
  // 构造函数的 prototype 属性是否出现在某个实例对象的原型链上
  // A.__proto__ === B.prototype

  function instanceOf(a, b){
    if (a === null || typeof a !== 'object') {
      return false
    }

    let proto = Object.getPrototypeOf(a)
    // getPrototypeOf => 取得物件的Prototype
    // prototype === null => 到底了(Object.prototype)

    if(proto === b.prototype){
      return true
    }else if(proto === null){
      return false
    }else {
      return instanceOf(a, b)
    }
  }

  instanceOf({}, Object) // true

  // setTimeOut
  // let setTimeout = (fn, timeout, ...args) => {
  //   // 初始当前时间
  //   const start = new Date()
  //   let timer, now
  //   const loop = () => {
  //     timer = window.requestAnimationFrame(loop)

  //     // 再次运行时获取当前时间
  //     now = new Date()
  //     // 当前运行时间 - 初始当前时间 >= 等待时间 ===>> 跳出
  //     if (now - start >= timeout) {
  //       fn.apply(this, args)
  //       window.cancelAnimationFrame(timer)
  //     }
  //   }
  //   window.requestAnimationFrame(loop)
  // }
  
  function showName(){ 
    console.log("Hello")
  }
  // let timerID = setTimeout(showName, 1000);

  function mysetTimeout(fn, time){
    let now = Date.now();
    let flag = true;
    while(flag){
      if(Date.now() - now >= time){
        flag = false;
        fn();
      }
    }
  }

  let test = mysetTimeout(showName, 1000)
  test

  function mysetInterval(fn, time){
    let timeId = null;
    let isClear = false;
    function interval(){
      if(isClear){
        isClear = false;
        clearTimeout(timeId);
      }else{
        fn();
        timeId = setTimeout(interval, time);
      }
    }
    timeId = setTimeout(interval, time);
    return () => {isClear = true};
  }

  mysetInterval(showName, 1000)
  
  return (
    <div>ARRAY_METHOD</div>
  )
}

export default Index

// 有更好的寫法會回來修正