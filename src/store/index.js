import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "../slice/todo"
import HelloReducer from '../slice/hello'

export default configureStore({
  reducer: {
    todo: todoReducer,
    hello: HelloReducer
    // 以功能作為區分
  },
})