import React, { useState } from 'react'
import {
  useDispatch,
  useSelector
} from 'react-redux'
import {
  selectTodo,
  addTodo
} from '../../slice/todo'
import {
  useGetTodoQuery,
  useAddTodoMutation
} from '../../ReduxToolkitApiSlice/todoApiSlice'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTrash, faUpload } from '@fortawesome/free-solid-svg-icons'

const ReduxToolkitTest = () =>{
  const dispatch = useDispatch()
  const [newTodo, setNewTodo] = useState('')
  const states = useSelector(selectTodo)

  const check = useSelector(state => state)

  const handleChangeRedux = () =>{
    dispatch(
      addTodo({ id: 3, name: "a new todo item" })
    )
  }

  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetTodoQuery()
  const [addTodo, addTodoResponse] = useAddTodoMutation()

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ userId: 1, title: newTodo, completed: false })
    setNewTodo('')
  }

  console.log(data, 'data')

  return (
    <ul>
      <button 
        type="button"
        onClick={handleChangeRedux}
      >
        點擊更改
      </button>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-todo">Enter a new todo item</label>
        <div className="new-todo">
          <input
            type="text"
            id="new-todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Enter new todo"
          />
        </div>
        <button className="submit">
          {/* <FontAwesomeIcon icon={faUpload} /> */}
          點擊
        </button>
      </form>
      {
        isSuccess && (
          data.map(todo => { //JSON.stringify(todos)
            return (
              <article key={todo.id}>
                <div className="todo">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    id={todo.id}
                    // onChange={() => updateTodo({ ...todo, completed: !todo.completed })}
                  />
                  <label htmlFor={todo.id}>{todo.title}</label>
                </div>
                <button 
                  className="trash" 
                  // onClick={() => deleteTodo({ id: todo.id })}
                >
                  {/* <FontAwesomeIcon icon={faTrash} /> */}
                  點擊
                </button>
              </article>
            )
          })
        )
      }
    </ul>
  )
}

export default ReduxToolkitTest