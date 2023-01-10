import React from 'react'

const Index = () => {
  const [text, setText] = React.useState(true)
  const [count, setCount] = React.useState(0)

  React.useEffect(()=>{
    console.log('componentDidMount')
    setCount(n => n + 1)

    return () =>{
      console.log('componentWillUnmount')
      setCount(n => n + 2)
    }
  }, [text])

  console.log(text, count, 'text')
  return (
    <div>
      <button
        type="button"
        onClick={()=>setText(!text)}
      >
        點擊
      </button>
      {console.log('DOM 被渲染了~~')}
    </div>
   
  )
}

export default Index

/**
   * text, 'text'
   * DOM 被渲染了~~
   * componentDidMount
   * componentWillUnmount
   */
