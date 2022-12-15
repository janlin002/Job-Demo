import React, { useEffect, useMemo , useState } from 'react'

const ReferentialEqualityMistakes = () => {
  const [age, setAge] = useState('')
  const [name, setName] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  //   const person = { age, name }

  const person = useMemo(()=>{
    return { age, name }
  }, [age, name])

  useEffect(()=>{
    console.log(person)
  }, [person])

  return (
    <div style={{ background: darkMode ? '#333' : '#fff' }}>
        age:
      <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} />
        name: 
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />

      <button type="button" onClick={()=>setDarkMode(!darkMode)}>切換顏色</button>
    </div>
  )
}

export default ReferentialEqualityMistakes