import React from 'react'

const Index = () => {
  const [data, setData] = React.useState('View to Component')

  return (
    <>
      <div>
        <input type="text" onChange={e=>setData(e.target.value)}/>
      </div>
      
      <div>{data}</div>
    </>
  )
}

// Component to View
// const Index = () => {
//   const [data, setData] = React.useState('Component to View')

//   return (
//     <>
//       <div>{data}</div>
//     </>
    
//   )
// }

export default Index