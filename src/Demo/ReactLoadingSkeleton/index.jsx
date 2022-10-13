// input point
import React, { useState, useEffect } from 'react'
// import { Suspense } from 'react';
// import { fetch } from 'react-fetch';
// import Skeleton from 'react-loading-skeleton'

import data from './data'
import BlogList from './blogList'
import SkeletonCard from './skeletonCard'

import './index.css'

const Suspences = () =>{
  const [blog, setBlog] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    setIsLoading(true)
    const timing = setTimeout(()=>{
      setBlog(data)
      setIsLoading(false)
    }, 4000)

    return ()=>clearTimeout(timing)
  }, [])

  return (
    <>
      <div style={{ width: '60%' }}>
        {isLoading && <SkeletonCard />}
        {!isLoading &&
      blog.map((list, index) => {
        return (
          <div key={index}>
            <BlogList list={list} />
            <hr />
          </div>
        )
      })}
      </div>
    </>
    
  )
}

export default Suspences