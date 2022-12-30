import React from 'react'
import useSWR from 'swr'
import axios from 'axios'

const index = () => {
  const api = '	https://tcgbusfs.blob.core.windows.net/blobtcmsv/TCMSV_allavailable.json'
  const fetcher = url => axios.get(url).then(res => res.data)

  const { data, error, isLoading } = useSWR(api, fetcher)

  //   React.useEffect(()=>{
  //     axios.get(api).then((res)=> console.log(res.data, '2'))
  //   }, [])

  console.log(data?.data?.park, 'data')
  return (
    <div>index</div>
  )
}

export default index