import { createSlice } from "@reduxjs/toolkit";
export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todolist: [
      { id: 1, name: "first todo on redux" },
      { id: 2, name: "second todo in list" },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todolist.push(action.payload);
    },
  },
});

export const selectTodo = (state) => state.todo;
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;

// initialState：就是放所有狀態初始值
// reducers：通常是放很多的函式，會有兩個參數state和action
// state就是讓你修改狀態，你可以直接對state進行操作
// action就是讓你傳入參數。