import React from 'react'

const a = [
  { name: '0928360517', value: '0928360517' },
  { value: 'panda22', name: 'panda22' }
]
const b = ['panda22', 'panda23', 'panda24']

const TwoSelect = () => {
  return (
    <div>
      TwoSelect
    </div>
  )
}

export default TwoSelect

// 本班學生
// panda1

// 其他班的學生 1
// - panda1 -

// 其他班的學生 2
// - panda1 -

// 本班學生
const selectList = ['1', '11']

// 已選的部分
const classA = [
  { 
    name: '0928360517',
    value: '0928360517',
    studentList: [
      {
        value: '1',
        name: '1'
      },
      {
        value: '2',
        name: '2'
      },
      {
        value: '3',
        name: '3'
      }
    ]
  },
  { 
    name: '0928360517',
    value: '0928360517',
    studentList: [
      {
        value: '11',
        name: '1'
      },
      {
        value: '22',
        name: '2'
      },
      {
        value: '22',
        name: '2'
      }
    ]
  },
]

// 目前班級資料
const cuurentClass = [
  {
    value: '1',
    name: '1'
  },
  {
    value: '2',
    name: '2'
  },
  {
    value: '3',
    name: '3'
  },
  {
    value: '4',
    name: '4'
  }
]

// lodash 如何實現目前班級的直都是為一值？
// 條件如下:
// 1. cuurentClass 的 value 不能跟 selectList 裡面任何一個直重複
// 2. cuurentClass 的 value 不能跟 classA 裡面的 studentList 裡面的 value 重複

// 並且回傳一個乾淨的 cuurentClas （沒有任何重複得部分）