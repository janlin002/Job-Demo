import React, { useState } from 'react'

const UseName = (initialValue)=> {
  const [value, setValue] = useState(initialValue)

  function handleChange(e) {
    setValue(e.target.value)
  }

  const inputProps = {
    value: value,
    onChange: handleChange
  }

  return inputProps
}

export default UseName
