import React, { useState, useEffect } from 'react'

const Index = () => {
  const [firstName, setFirstName] = useState('Taylor')
  const [lastName, setLastName] = useState('Swift')

  //   const [fullName, setFullName] = useState('')
  //   useEffect(() => {
  //     setFullName(firstName + ' ' + lastName)
  //   }, [firstName, lastName])

  const fullName = firstName + ' ' + lastName
  return (
    <>
      <label htmlFor="">
        <input type="text" onChange={(e)=>setFirstName(e.target.value)} />
        firstName
      </label>
      <label htmlFor="">
        <input type="text" onChange={(e)=>setLastName(e.target.value)} />
        lastName
      </label>
      <div>{fullName}</div>
    </>
  )
}

export default Index