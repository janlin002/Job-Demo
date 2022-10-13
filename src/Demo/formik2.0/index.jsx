import React, { useState } from 'react'

// import Search from './search'
// import Result from './search'

const Formik20 =()=>{
  const [page, setPage] = useState('main')
  const handleSubmit = () =>{
    setPage('next')
  }
  const mainPage = () =>{
    setPage('main')
  }
  // const changePage = () =>{
  //   if(page === 'main'){
  //     <Search 
  //       handleSubmit={handleSubmit}/>
  //   }else if(page=== 'result'){
  //     <Result 
  //       mainPage={mainPage}/>
  //   }
  // }
  console.log(page)
  return (
    // <Search handleSubmit={handleSubmit}/>
    <div>123</div>
  )
}

export default Formik20