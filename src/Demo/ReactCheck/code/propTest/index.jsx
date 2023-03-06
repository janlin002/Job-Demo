import React from 'react'

const FAKE_BOOK_DATA = [
  {
    title: 'Learn React',
    author: 'Jan'
  },
  {
    title: 'Learn Vue',
    author: 'Bill'
  },
  {
    title: 'Learn Anular',
    author: 'Eric'
  }
]

const Book = (item) =>{
  const { title, author } = item
  return (
    <>
      <h1>{title}</h1>
      <h3>{author}</h3>
    </>
  )
}

const Index = () => {
  const data = FAKE_BOOK_DATA
  return (
    <div>
      <div>
        {data?.map((item, index)=>{
          return <Book key={index} {...item}/>
        })}
      </div>
    </div>
    
  )
}

export default Index