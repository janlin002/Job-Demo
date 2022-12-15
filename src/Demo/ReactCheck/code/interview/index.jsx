import React from 'react'

const Index = () => {
  const arr = [100 ,200, 300]

  for(var i = 0; i < 3; i++){
    (
      function(num){
        console.log(num)
        setTimeout(()=>{
          console.log(arr[num], num)
        })
      }
    )(i)
    
  }
  return (
    <div>Index</div>
  )
}

export default Index