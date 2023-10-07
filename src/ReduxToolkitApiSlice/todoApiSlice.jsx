import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todoApiSlice = createApi({
  reducerPath: 'todo',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),
  endpoints: (builder) =>({
    getTodo: builder.query({
      query: () => '/todos',
    //   transformResponse: res => res.sort((a, b) => b.id - a.id),
    })
  })
})

export const { getTodo } = todoApiSlice