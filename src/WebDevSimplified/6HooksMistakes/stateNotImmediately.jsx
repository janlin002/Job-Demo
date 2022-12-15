import React from 'react'

const SetStateSnapshot = () => {
  const [count, setCount] = React.useState(0)

  // corrent
  React.useEffect(()=>{
    console.log(count)
  }, [count])

  const handleClick = (item) => {
    setCount((prev)=> prev + item)

    // error
    console.log(count)
  }
  return (
    <div>
      <button
        type="button"
        onClick={()=>handleClick(+1)}
      >
        點擊+1
      </button>
      <h1>{count}</h1>
      <button
        type="button"
        onClick={()=>handleClick(-1)}
      >
        點擊-1
      </button>
    </div>
    
  )
}

export default SetStateSnapshot