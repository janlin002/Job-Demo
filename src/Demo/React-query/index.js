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
  const { data, isLoading, isError, isSuccess } = useQuery('userData', fetchPlanets, {
    // staleTime: 5000,
  })

  console.log({ data, isLoading, isError })
  if (isLoading) return 'Loading...'

  return (
    <div>
      {isSuccess &&
        data.results.map((planet) => {
          return (
            <div key={planet.name} style={{ width: '200px' }}>
              <div className="card">
                <h4>{planet.name}</h4>
                <p>population: {planet.population}</p>
                <p>terrain : {planet.terrain}</p>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default ReactQuery