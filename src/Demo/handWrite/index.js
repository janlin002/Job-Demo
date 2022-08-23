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

  // toString

  const arr7 = [10, 5, 3, 8, 2]

  function toString(){
    let args = arguments

    return [...args].join(',')
  }

  const tostring = toString(arr7)

  // reduce

  const arr9 = [10, 5, 3, 8, 2]

  function reduce(arr){
    const len = arr.length
    let reducer = 0
    for(let i = 0; len > i; i++){
      reducer += arr[i]
    }
    return reducer
  }

  const toReduce = reduce(arr9)

  // sort

  const arr8 = [10, 5, 3, 8, 2]

  // [2, 3, 5, 8, 10]
  function bSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
      for (var j = 0; j < len - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        }
      }
    }
    return arr;
  }

  const toSort1 = bSort(arr8)

  // splice
  let arr10 = ['first', 'second', 'third']

  Array.prototype.mySplice = function (...arg) {
    let index = arg[0]//準備刪除的位置 => 2
    let count = arg[1]//刪除的個數 => 1
    let add_arr = [] //添加的元素數組
    let delIndex_arr = [] //刪除數組的索引
    let _return_arr = []//返回的數組

    for (let i = index; i < index + count; i++) {
      console.log(i, 'i')
      delIndex_arr.push(i)
    }
    let this_finishArr = [] //存放處理之後的數組
    // 把索引之前的原數組成員全放到新數組裏去
    this.forEach((im, idx) => {
      if (idx < index) {
        this_finishArr.push(im)
      }
    })
    // 處理返回值
    delIndex_arr.forEach((im) => {
      _return_arr.push(this[im])
    })
    // 把用戶輸入需要添加的元素放到新數組裏去
    for (let i = 2; i < arg.length; i++) {
      this_finishArr.push(arg[i])
    }
    // 把添加之後，原數組的剩餘成員，全部添加到新數組
    for (let i = index + count; i < this.length; i++) {
      this_finishArr.push(this[i])
    }
    // 將新數組深拷貝給原數組
    this.length = this_finishArr.length
    for (let i = 0; i < this.length; i++) {
      this[i] = this_finishArr[i]
    }
    return _return_arr

  }
  // console.log(arr10.mySplice(2, 1)) //[third]
  // console.log(arr10) //[first,second]

  // slice
  const arr11 = [1, 2, 3, 4, 5, 6]
  Array.prototype.slice = function (start, end) {
    // 保存结果
    let res = [];
    // this指向调用slice方法的数组
    let len = this.length;

    // 確定有傳值
    start = start === undefined ? 0 : start;
    end = end === undefined ? len : end;

    start = start < 0 ? start + len : start;
    start = Math.max(0, start); // 算取最大值

    end = end < 0 ? end + len : end;
    end = Math.min(end, len) // 算取最小值
    
    // 截取[start,end)这个区间的元素
    for (let i = start; i < end; i++) {
      res.push(this[i])
    }
    return res;
  }

  const test = arr11.slice(0, 5)

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
  
  // function showName(){ 
  //   console.log("Hello")
  // }
  // let timerID = setTimeout(showName, 1000);

  function setTimeout(fn, time){
    let now = Date.now();
    let flag = true;
    while(flag){
      if(Date.now() - now >= time){
        flag = false;
        fn();
      }
    }
  }

  // let test = mysetTimeout(showName, 1000)
  // test

  function setInterval(fn, time){
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

  // mysetInterval(showName, 1000)
  
  return (
    <div>ARRAY_METHOD</div>
  )
}

export default Index

// 有更好的寫法會回來修正
// mysetTimeout, mysetInterval => https://juejin.cn/post/7005863255990075399