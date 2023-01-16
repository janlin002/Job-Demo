import React from 'react'
import useName from './useName'

const Index = () => {
  const firstNameProps = useName('Mary')
  const lastNameProps = useName('Poppins')

  return (
    <div>
      <label>
        First name:
        <input {...firstNameProps} />
      </label>
      <label>
        Last name:
        <input {...lastNameProps} />
      </label>
      <p><b>Good morning, {firstNameProps.value} {lastNameProps.value}.</b></p>
    </div>
  )
}

export default Index
