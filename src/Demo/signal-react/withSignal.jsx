/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react'
import { signal, effect, computed, batch } from "@preact/signals-react"

const Child = ({ number, count }) =>{
  console.log(number, count ,'123')
  effect(()=>{
    console.log(count, 'count-child')
  })

  return (
    <div>
      {count}
    </div>
  )
}

const WithSignal = () => {
  // signal
  const count = signal(0)
  const counter = signal(0)
  const effectCount = signal(0)
  
  // useState
  const [number, setNumber] = useState(0)

  // useRef
  const countRef = useRef(0)

  const Counter = () => {
    // effect(() => console.log(count.value))
    return <button 
      onClick={() => {
        count.value++
        counter.value++
        countRef.current++
      }}
    >
      {count}
    </button>
  }

  const name = signal("Jane")
  const surname = signal("Doe")

  const fullName = computed(() => name.value + " " + surname.value)
  //   const fullName = name.value + " " + surname.value

  //   console.log(fullName.value, 'fullName')

  name.value = 'John'

  //   console.log(fullName.value, 'change')

  effect(()=>{
    // console.log(counter.value, 'counter')

    // Whenever this effect is triggered, increase `effectCount`.
    // But we don't want this signal to react to `effectCount`
    effectCount.value = effectCount.peek() + 1
  })

  //   console.log(effectCount, 'effectCount')

  // 多個 update 合併為單一個 update
  batch(() => {
    name.value = "Foo"
    surname.value = "Bar"
  })

  //   console.log(name.value, surname.value)
  return (
    <>
      <Counter />
      <Child 
        number={number}
        count={count}
      />
      <button
        onClick={()=>setNumber(prev => prev + 1)}
      >
        點擊+1
      </button>
      <div>{countRef.current}</div>
    </>
  )
}

export default WithSignal