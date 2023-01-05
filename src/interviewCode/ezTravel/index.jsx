import React, { useState, useRef , useEffect } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const CustomButton = ({ 
  text, 
  handleStatusEvent,
  itemId,
  disabled
}) =>{
  return (
    <button
      type="button"
      className='custom-basic-button'
      onClick={()=>handleStatusEvent(itemId)}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

const TodoList = ({ todoList, setTodoList }) =>{
  const [editItem, setEditItem] = useState('')
  // 是否正在編輯
  const [isEdit, setIsEdit] = useState(false)
  // 記錄目前是在編輯哪一筆
  const [edit, setEdit] = useState('')
  const [checkboxList, setCheckboxList] = useState([])

  const handleEditEvent = (id) =>{
    const targetItem = todoList.findIndex((item)=>item.id === id)
    // 編輯
    if(isEdit === false){
      setIsEdit(!isEdit)
      setEdit(id)
    }else {
      // 更新
      setIsEdit(!isEdit)
      setEdit('')
      todoList[targetItem] = {
        id: id,
        value: editItem
      }
    }
  }

  const handleEditChange = (ele) => {
    setEditItem(ele.target.value)
  }

  const handleDeleteEvent = (id) =>{
    const splitItem = todoList.filter((item)=> item.id !== id)
    setTodoList(splitItem)
    setEdit('')
  }

  const NOT_FOUND = -1
  const handleCheckboxClick = (id) =>{
    const checkTarget = checkboxList.findIndex((item)=>item === id)

    if(checkTarget === NOT_FOUND){
      setCheckboxList([
        ...checkboxList, id
      ])
    }else {
      setCheckboxList(checkboxList.filter((item)=> item !== id))
    }
  }

  return (
    <div>
      {
        todoList.map((item)=>(
          <div key={item.id}>
            <label htmlFor="">
              <input 
                type="checkbox"
                className="custom-checkbox-input"
                onClick={()=>handleCheckboxClick(item.id)}
              />
              <input 
                type="text"
                className={
                  (item.id === edit && isEdit) ? 'custom-edit-input' : 'custom-unedit-input'
                }
                style={
                  checkboxList.includes(item.id) ? { textDecoration:'line-through' } : null
                }
                defaultValue={item.value}
                onChange={e=>handleEditChange(e, item.id)}
                disabled={item.id !== edit}
              />

              <CustomButton 
                text={(item.id === edit && isEdit) ? '更新' : '編輯'}
                handleStatusEvent={handleEditEvent}
                itemId={item.id}
                disabled={edit !== '' && item.id !== edit}
              />
              <CustomButton 
                text="刪除"
                handleStatusEvent={handleDeleteEvent}
                itemId={item.id}
                disabled={edit !== '' && item.id !== edit}
              />
            </label>
          </div>
        ))
      }
    </div>
  )
}

const Index = () => {
  const [todoList, setTodoList] = useState([])
  const [editList, setEditList] = useState('')

  const handleCreateClick = () =>{
    setTodoList([
      ...todoList,
      {
        id: Math.random(),
        value: editList
      }
    ])
    setEditList('')
  }

  return (
    <div style={{ marginLeft: '500px', marginTop: '200px' }}>
      <div className="box-wrapper">
        <h3 className="custom-black">To Do List</h3>
        <div className="child-wrapper">
          <input 
            type="text" 
            className="custom-text-input"
            onChange={e => setEditList(e.target.value)}
            value={editList}
          />
          <button 
            type="button"
            className="custom-create-button"
            onClick={()=>handleCreateClick()}
          >
            新增
          </button>
        </div>
        <div className='child-wrapper'>
          {
            todoList.length > 0 && (
              <TodoList 
                todoList={todoList}
                setTodoList={setTodoList}
              />
            )
          }
          
        </div>
      </div>
    </div>
    
  )
}

export default Index

TodoList.propTypes = {
  todoList: PropTypes.instanceOf(Array).isRequired,
  setTodoList: PropTypes.func.isRequired,
}

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  handleStatusEvent: PropTypes.func.isRequired,
  itemId: PropTypes.number.isRequired,
  disabled: PropTypes.bool,
}
CustomButton.defaultProps={
  disabled: false
}