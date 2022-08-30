import React from 'react'

const UnControl = () => {
  const handleSubmitClick = () => {
    // const name = this._name.value;

    // console.log(name)
    // do something with `name`

    console.log('submit', 'submit')
  };
  return (
    <div>
      <input type="text" ref={(input) => (console.log(input, 'input'))} />
      <button onClick={handleSubmitClick}>Sign up</button>
    </div>
  )
}

export default UnControl