import React from 'react'

const Index = () =>{
  return (
    <div>
      <button
        type='button'
        onClick={
          ()=>import('./count')
            .then((module)=> console.log(module.count(1, 2)))}
      >
        點擊
      </button>
    </div>
  )
}

export default Index