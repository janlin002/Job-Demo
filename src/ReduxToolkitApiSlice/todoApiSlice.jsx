import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todoApiSlice = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),
  tagTypes: ['Todos'],
  endpoints: (builder) =>({
    getTodo: builder.query({
      query: () => '/todos',
      providesTags: ['Todos']
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: '/todos',
        method: 'POST',
        body: todo
      }),
      invalidatesTags: ['Todos']
    }),
  })
})

export const { useGetTodoQuery, useAddTodoMutation } = todoApiSlice

