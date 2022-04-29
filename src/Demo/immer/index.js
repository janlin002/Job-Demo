import React from 'react';
import produce from 'immer';
import { useImmer } from 'use-immer'

const Immer = () =>{
//   const [name, setName] = React.useState({
//     name: '馬雲',
//     age: '56'
//   })

  const [name, setName] = useImmer({
    name: '馬雲',
    age: '56'
  })

  const array = [
    {
      value: 0
    },
    {
      value: 1
    },
    {
      value: 2
    },
  ]

  const newArray = produce(array, draft =>{
    draft[0].value = 10
  })

  const handleBack18Yr = () =>{
    setName(draft =>{
      draft.age = '18'
    })
  }

  console.log(name)
  return (
    <div>
      <button type="button" onClick={handleBack18Yr}>回春術</button>
      <div>{name.name}</div>
      <div>{name.age}</div>
    </div>
  )
}

export default Immer