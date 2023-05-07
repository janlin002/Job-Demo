const _ = require('lodash')

const selectList = ['1', '11']

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

const currentClass = [
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

const cleanCurrentClass = _.filter(currentClass, (item) => {
  // 检查 item 的 value 是否存在于 selectList 中
  if (selectList.includes(item.value)) {
    return false
  }

  // 检查 item 的 value 是否与 classA 中的任何一个 studentList 的 value 重复
  const isValueUnique = _.every(classA, (classItem) => {
    return !_.some(classItem.studentList, { value: item.value })
  })

  return isValueUnique
})

console.log(cleanCurrentClass)