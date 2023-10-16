import { createSlice, createSelector } from "@reduxjs/toolkit";
import { todoApiSlice } from "../../ReduxToolkitApiSlice/todoApiSlice";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todolist: [
      { id: 1, name: "first todo on redux" },
      { id: 2, name: "second todo in list" },
    ],
    todoTest: "",
  },
  reducers: {
    addTodo: (state, action) => {
      state.todolist.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      todoApiSlice.endpoints.getTodo.matchFulfilled,
      (state, action) => {
        state.todoTest = action.payload;
      }
    );
  },
});

export const getStudentStatus = createSelector(
  (state) => state.todo.studentRecord, // 這邊的 todo 就是 configureStore 裡面的 todo
  (todoItem) => todoItem
);

export const selectTodo = (state) => state.todo;
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;

// initialState：就是放所有狀態初始值
// reducers：通常是放很多的函式，會有兩個參數state和action
// state就是讓你修改狀態，你可以直接對state進行操作
// action就是讓你傳入參數。

// Redux-toolkit
