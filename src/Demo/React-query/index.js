import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import axios from 'axios'

const ReactQuery = () =>{
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

const Example = () =>{
  const fetchPlanets = async () => {
    const res = await fetch('https://swapi.dev/api/planets/')
    return res.json()
  }
  const { data, isLoading, isError } = useQuery('userData', fetchPlanets)

  console.log({ data, isLoading, isError })
  if (isLoading) return 'Loading...'

  return (
    <div>
      react-query
    </div>
  )
}

export default ReactQuery