import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "../slice/todo"
import todoApiSlice from '../ReduxToolkitApiSlice/todoApiSlice'

const store = configureStore({
  reducer: {
    todo: todoReducer,
    [todoApiSlice.reducerPath]: todoApiSlice.reducer
  },
})

export default store