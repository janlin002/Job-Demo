/** @jsxImportSource jotai-signal */

import React from 'react'

import {
  atom,

  useAtom,
  useSetAtom
} from 'jotai'

import { $ } from 'jotai-signal'

const initCount = atom(0)
const initNumber = atom(0)

const WithReact = () => {
  // const [jotaiCount, setJotaiCount] = useAtom(initCount)
  // const [count, setCount] = useState(0)

  const [jotaiCount] = useAtom(initCount)
  const setJotaiCount = useSetAtom(initCount)

  const [test, setTest] = useAtom(initNumber)

  console.log(jotaiCount, test, initCount, 'chcek')

  const handleClick = () =>{
    // setCount(prev => prev + 1)
    setJotaiCount(prev => prev + 1)
  }

  return (
    <div>
      <button onClick={()=>handleClick()}>點擊加一</button>
      <div>{jotaiCount}</div>
      <div>{Math.random()}</div>

      <button onClick={()=>handleClick()}>點擊加一</button>
      <div>Count: {$(initCount)} {Math.random()}</div>
      <div></div>
    </div>
  )
}

export default WithReact