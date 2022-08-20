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

  // Promise
  function Promise(exector) {
    console.log(exector, 'exector')
    
    this.pending = [];
    this.value = undefined;

    console.log(this.pending, 'pending')
    console.log(this.value, 'value')

    const resolve = value => {
      if (this.pending) {
        this.value = value;

        console.log(value, 'value')
        
        for (const onFulfilled of this.pending) {

          console.log(onFulfilled, 'onFulfilled')
          // 通知观察者。
          onFulfilled(this.value);
        }
        this.pending = undefined;
      }
    };

    console.log(resolve, 'resolve')

    exector(resolve);
  }
  Promise.prototype.then = function (onFulfilled) {
    console.log(onFulfilled, 'onFulfilled')
    if (this.pending) {
      // 还没决议，先注册观察者。
      this.pending.push(onFulfilled);
    } else {
      // 已决议，直接通知。
      onFulfilled(this.value);
    }
  };
  // 测试一下。
  const p = new Promise(resolve => {
    setTimeout(() => resolve(666), 100);
  })
  p.then(res => console.log('res: %s', res));
  // 输出：
  // res: 666

  return (
    <div>ARRAY_METHOD</div>
  )
}

export default Index

// 有更好的寫法會回來修正