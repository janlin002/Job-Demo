import React from 'react';

import {
  useDispatch,
  useSelector
} from 'react-redux'

import {
  selectTodo,
  addTodo
} from '../../slice/todo'

const ReduxToolkitTest = () =>{
  const dispatch = useDispatch()
  const states = useSelector(selectTodo)

  console.log(states, 'states')

  const handleChangeRedux = () =>{
    dispatch(
      addTodo({ id: 3, name: "a new todo item" })
    )
  }

  return (
    <ul>
      {states.todolist.map((i) => (
        <li key={i.id}>{i.name}</li>
      ))}
      <button 
        type="button"
        onClick={handleChangeRedux}
      >
        點擊更改
      </button>
    </ul>
  )
}

export default ReduxToolkitTest