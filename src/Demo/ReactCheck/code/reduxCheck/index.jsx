import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import {
  reduxCheck
} from 'Redux/action'

import {
  reduxCheckNumber
} from 'Redux/selector'

const ChildComponent = () =>{
  console.log('=== 次畫面被更新了 2 ===')

  return (
    <SubScribe />
  )
}

export const SubScribe = () =>{

  console.log('=== 訂閱者被更新了 3 ===')

  return (
    <Four />
  )
}

export const Four = () => {
  console.log('=== 訂閱者被更新了 4 ===')

  return (
    <div>4</div>
  )
}

const Index = () => {
  const dispatch = useDispatch()

  const [renderTest, setRenderTest] = useState('')

  const checkText = useSelector(reduxCheckNumber)

  console.log('==== 主畫面更新了 1 ====')

  const handleClick = () => {
    dispatch(reduxCheck(1))
  }
  return (
    <div>
      <button onClick={()=>handleClick()}>
        點擊+1
      </button>
      <span>{checkText}</span>
      <ChildComponent />
      <input type="text" onChange={(e)=>setRenderTest(e.target.value)} />
    </div>
  )
}

export default Index

// Redux 更新會導致 React 的 re-render，当 Redux store 中的状态更新时，Redux 会订阅了该状态的组件，並執行重新渲染
// Redux 的更新會就跟一般 state 一樣，會讓 Child 重新渲染，不管有沒有傳遞 Props 進去
// Redux 中，如果頁面有 dispatch，但是沒有調用 selector 畫面就不會更新(reducer的值有更動)
// child component 會一路更新到底