import { useState } from 'react'

export default function Counter() {
  const [number, setNumber] = useState(0)

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 5)
        setTimeout(() => {
          alert(number)
        }, 100)
      }}>+5</button>
    </>
  )
}

// export default function Counter(){
//   let number = 0

//   while(number<3){
//     number = number + 1
//     console.log({ number })

//     setTimeout(()=>{
//       console.log('setimeout', number)
//     }, 100)
//   }

//   return
// }

// react 有 snapshot ，所有的 state 在 reducering 時就已經決定了
// https://beta.reactjs.org/learn/state-as-a-snapshot