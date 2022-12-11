import React, { useEffect } from 'react'
import axios from 'axios'

const Index = () => {
  const [data, setData] = React.useState([])
  //   let response = axios.get('https://api.kcg.gov.tw/api/service/Get/99c8d84a-3553-4fe7-8321-f2f85c7a7715').then((res)=> console.log(res.data))

  //   let ubikedata

  //   const a = axios.get('https://api.kcg.gov.tw/api/service/Get/99c8d84a-3553-4fe7-8321-f2f85c7a7715')
  //     .then(function (response) {
  //       console.log(response)
  //       if(response.status === 200){ //有load完才跑下面
  //     	const ubikedata = response.data
  //         return ubikedata
  //     	// getList()
  //       }else{ 
  //     	console.log("error") //萬一沒load完就跑下面顯示錯誤提示
  //       }
  //     })

  const url = "https://api.kcg.gov.tw/api/service/Get/99c8d84a-3553-4fe7-8321-f2f85c7a7715"

  useEffect(()=>{
    axios.get(url)
      .then(function (response) {
        setData(response.data)
      })
  }, [])
  
  let ans = []
  data?.data?.forEach((item, index)=>{
    if(index < 10){
      ans.push(item)
    }
  })

  //   console.log(ans, 'ans')
  return (
    <div>Index</div>
  )
}

export default Index