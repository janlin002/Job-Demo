import React, { useTransition, useState , useEffect } from 'react'

const Index = () => {
  const [a, setA] = useState('A')
  const [b, setB] = useState('B')

  const [isPending, startTransition] = useTransition()

  useEffect(()=>{
    startTransition(()=>{
      setB('CB')
    })
    setA('CA')
  }, [])

  console.log(a, b, isPending)
  return (
    <div>Index</div>
  )
}

export default Index