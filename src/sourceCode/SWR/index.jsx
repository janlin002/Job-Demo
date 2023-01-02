import React, { useEffect, useState , createContext, useContext } from 'react'

const globalConfigContext = createContext({})

export { globalConfigContext }

const useFetch = (url, fetcher, options) => {
  const [data, setData] = useState(undefined)
  // ...
    
  const getKeyArgs = _key => {
    let localKey
    if (typeof _key === 'function') {
      // 重點 1 !!!!
      // 允許第一個參數是一個 function
      // 如果函數執行出錯的話（也許是依賴於其他請求的參數還沒有回傳），就先指定為空字串
      try {
        localKey = _key()
      } catch (err) {
        localKey = ''
      }
    } else {
      localKey = String(_key || '')
    }
    return localKey
  }
  
  const key = getKeyArgs(url)
   
  const config = Object.assign(
    {},
    useContext(globalConfigContext),
    options
  )

  let fn = fetcher
  if(typeof fn === 'undefined') {
    // fallback 回 global config 的 fetcher
    fn = config.fetcher
  }
    
  useEffect(() => {
    //   ...
    const fetchData = async () => {
      try {
        const newData = await fn(key)
        setData(newData)
      } catch(error) {
        //   .....
        console.error(error)
      }
    }
  
    fetchData()
      
    // 重點 2 !!!!!!
    // 當前一個請求完成後會因為 setData 觸發 re-render
    // re-render 後依賴於此請求的請求的 key 會改變，因此觸發 useEffect 中的 fetchData
      
  }, [key])
  
  // ...
}

export { useFetch }

// const { data: a } = useFetch('/api/a')
// const { data: b } = useFetch(()=> '/api/b=' + b)