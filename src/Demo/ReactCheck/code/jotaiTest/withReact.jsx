import React from 'react'
import {
  atom
} from 'jotai'
import {
  useAtom,
  useSetAtom
} from 'jotai/react'
import { $ } from 'jotai-signal'

const initCount = atom(0)

const WithReact = () => {
//   const [jotaiCount, setJotaiCount] = useAtom(initCount)
  //   const [count, setCount] = useState(0)

  const jotaiCount = useAtom(initCount)
  const setJotaiCount = useSetAtom(initCount)

  const handleClick = () =>{
    // setCount(prev => prev + 1)
    setJotaiCount(prev => prev + 1)
  }

  console.log(jotaiCount, 'jotaiCount')

  return (
    <div>
      <button onClick={()=>handleClick()}>點擊加一</button>
      {/* <div>{count}</div> */}
      <div>{Math.random()}</div>

      <button onClick={()=>handleClick()}>點擊加一</button>
      <div>{$(jotaiCount)}</div>
      <div>{Math.random()}</div>
    </div>
  )
}

export default WithReact