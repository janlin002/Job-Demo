import React, { useState, useEffect } from 'react'

const SetStateSnapshot = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  //   const [fullName, setFullName] = useState('')

  const fullName = `${firstName} ${lastName}`

  //   useEffect(()=>{
  //     setFullName(`${firstName} ${lastName}`)
  //   }, [firstName, lastName])
  return (
    <div>
      <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
      <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} />
      {fullName}
    </div>
    
  )
}

export default SetStateSnapshot