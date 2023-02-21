import React from 'react'

const Index = () => {
  // const target = {}
  // const proxy = new Proxy(target, {})

  // proxy.test = 5

  // console.log(target.test, proxy.test, 'proxy-test')

  const getTarget = {
    name: "Tom",
    age: 18,
  }

  const proxy = new Proxy(getTarget, {
    get: function(target, property, receiver) {
      console.log(`Reading property ${property}`, receiver, 'proxyyy')
      return target[property]
    },
    set: function(target, property, value, receiver){
      console.log(target, property, value, receiver, 'setttt')
      return true
    }
  })

  console.log(proxy.name) // Reading property name, Tom
  console.log(proxy.age) // Reading property age, 18

  const setTarget = []

  const setProxy = new Proxy(setTarget, {
    set: function(target, property, value, receiver){
      console.log(target, property, value, receiver, 'settt')
      return true
    }
  })

  setProxy.push('123')
  return (
    <div>Index</div>
  )
}

export default Index