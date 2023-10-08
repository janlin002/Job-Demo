import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import todoReducer from "../slice/todo"
import { todoApiSlice } from '../ReduxToolkitApiSlice/todoApiSlice'

const store = configureStore({
  reducer: {
    todo: todoReducer,
    [todoApiSlice.reducerPath]: todoApiSlice.reducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todoApiSlice.middleware)
})

export default store