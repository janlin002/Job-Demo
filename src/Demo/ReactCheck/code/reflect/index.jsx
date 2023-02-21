import React from 'react'

const Index = () => {
  let list = {}
  
  Reflect.set(list, 'name', 'jan')

  console.log(Reflect.set(list, 'name', 'jan'), 'check')// true 這邊的 true 代表的是有沒有成功設定的意思

  list['age'] = 24

  console.log(list, 'aTest') // reflect 跟 object 是可以共用的

  const bTest = Reflect.has(list, 'name')

  console.log(bTest, Reflect.has(list, 'name'),  'bTest')
  return (
    <div>Index</div>
  )
}

export default Index