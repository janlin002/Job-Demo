import { createSlice } from "@reduxjs/toolkit"
export const HelloSlice = createSlice({
  name: "hello",
  initialState: {
    todolist: [
      { id: 1, name: "first todo on redux" },
      { id: 2, name: "second todo in list" },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todolist.push(action.payload)
    },
  },
})

const a = (state) => console.log(state)

export const selectTodo = (state) => state.todo
// todo 指向 store 裡面的 todo
export const { addTodo } = HelloSlice.actions
export default HelloSlice.reducer

// initialState：就是放所有狀態初始值
// reducers：通常是放很多的函式，會有兩個參數state和action
// state就是讓你修改狀態，你可以直接對state進行操作
// action就是讓你傳入參數。

// Redux-toolkit