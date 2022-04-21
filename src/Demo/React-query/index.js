import React from 'react';
import { QueryClient, QueryClientProvider, useMutation, useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import axios from 'axios'

const ReactQuery = () =>{
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <Example />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
const fetchPlanets = async (key, page) => {
  // const res = await fetch('https://swapi.dev/api/planets/')
  // return res.json()
  const { data } = await axios.get('https://swapi.dev/api/planets/')
  
  return data
}

const Example = () =>{
  const [page, setPage] = React.useState(1) 
  
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['userData', page],
    fetchPlanets, 
  )

  console.log({ data, isLoading, isError }, 'axios')
  if (isLoading) return 'Loading...'

  if(isError) return 'Error...'

  // const mutation = useMutation(
  //   async (data)=>{
  //     const res = await axios.get('https://swapi.dev/api/planets/', {
  //       name: data
  //     })
  //     return res;
  //   },
  //   {
  //     // 成功回调
  //     onSuccess(res) {
  //       console.log(res);
  //     },
  //     // 失败回调
  //     onError(err) {
  //       console.log(err);
  //     },
  //   }
  // )

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
      {/* <button 
        type="button"
        onClick={mutation.mutate('David')}>
          點擊
      </button> */}
    </div>
  )
}

export default ReactQuery