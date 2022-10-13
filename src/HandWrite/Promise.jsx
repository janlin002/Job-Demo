/* eslint-disable no-undef */
// https://www.youtube.com/watch?v=wtAP6REoWco&t=210s

class Commitment {
  static PENDING = '待定'
  static FULFILLED = '成功'
  static REJECTED = '失敗'

  constructor(func){
    this.status = Commitment.PENDING
    this.result = null
    this.resolveCallbacks = []
    this.rejectCallbacks = []

    try {
      func(
        this.resolve.bind(this),
        this.reject.bind(this)
      )
    }catch(error){
      this.reject(error)
    }
  }

  // 成功事件
  resolve(result){
    setTimeout(()=>{
      if(this.status === Commitment.PENDING){
        this.status = Commitment.FULFILLED
        this.result = result
        this.resolveCallbacks.forEach((callback)=>{
          callback(result)
        })
      }
    })
  }

  // 失敗事件
  reject(result){
    setTimeout(()=>{
      if(this.status === Commitment.PENDING){
        this.status = Commitment.REJECTED
        this.result = result
        this.rejectCallbacks((callback)=>{
          callback(result)
        })
      }
    })
  }

  then(onFULFILLED, onREJECTED){
    onFULFILLED = typeof onFULFILLED === 'function' ? onFULFILLED : ()=>{}
    onREJECTED = typeof onREJECTED === 'function' ? onREJECTED : ()=>{}

    if(this.status === Commitment.PENDING){
      this.resolveCallbacks.push(onFULFILLED)
      this.rejectCallbacks.push(onREJECTED)
    }

    if(this.status === Commitment.FULFILLED){
      setTimeout(()=>{
        onFULFILLED(this.result)
      })
    }

    if(this.status === Commitment.REJECTED){
      setTimeout(()=>{
        onREJECTED(this.result)
      })
    }
  }
}

console.log('1')
let test = new Commitment((resolve, reject)=>{
  console.log('2')
  setTimeout(()=>{
    resolve('3')
    reject('4')
    console.log('5')
  })
})

test.then(
  result => console.log(result),
  result => console.log(result.message)
)

console.log('6')

// Promise.all() => https://juejin.cn/post/7006200103157383175
function MyPromiseAll(args){
  return new Promise((resolve, reject)=>{
    const promises = Array.from(args) // shallow copy

    const result = []

    let count = 0

    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(res => {
        result[i] = res
        count++
        if (count === promises.length) {
          resolve(result)
        }
      }).catch(err => reject(err))
    }
  })
}

MyPromiseAll(['a', 'b', 'c'])

// Promise.race() => 只要有結果就顯示出來
Promise.race = function(promiseArr) {
  return new Promise((resolve, reject) => {
    promiseArr.forEach(p => {
      Promise.resolve(p).then(val => {
        resolve(val)
      }, err => {
        rejecte(err)
      })
    })
  })
}

for (let i = 0; i < 10; i++) {
  console.log('hi')
  setTimeout(function printValue() { 
    console.log(`The number is ${i}`) 
  }, 1000) 
}
    