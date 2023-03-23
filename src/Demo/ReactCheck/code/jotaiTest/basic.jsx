import React from 'react'

import { useAtom, atom, useSetAtom, useAtomValue } from 'jotai'

/**
 * atom have three patterns
 * 
 * Read-only atom
 * Write-only atom
 * Read-Write atom
 */

// init value
const initValue = atom(0)
const priceAtom = atom(10)
const messageAtom = atom('hello')
const productAtom = atom({ id: 12, name: 'good stuff' })
const countAtom = atom(100)

// Read-only atom 只讀
const getSomthing = atom((get)=> Number(get(initValue)) + 1)

// Write-only atom 只寫
const writeOnlyAtom = atom(
  null,
  (get, set, update) => {
    set(priceAtom, get(priceAtom) - update)
  }
)

// Read-Write atom 讀寫
const readWriteAtom = atom(
  (get) => get(priceAtom) * 2,
  (get, set, newPrice) => {
    set(priceAtom, newPrice / 2)
    // you can set as many atoms as you want at the same time
  }
)

const decrementCountAtom = atom(
  (get) => get(countAtom),
  (get, set, _arg) => set(countAtom, get(countAtom) - 1)
)

/**
 * 語法總結
 * set(對象, 更改成的樣子, 傳遞的參數)
 */

const Index = () => {
  const [text, setText] = useAtom(initValue)
  const [getter] = useAtom(getSomthing)
  const [, seTest] = useAtom(writeOnlyAtom)
  // const [count, decrement] = useAtom(decrementCountAtom)
  const [price] = useAtom(priceAtom)

  const decrement = useSetAtom(decrementCountAtom)
  const count = useAtomValue(decrementCountAtom)

  const handleChange = (e) =>{setText(e.target.value)}

  console.log(price, 'price')

  return (
    <div>
      <input type="text" onChange={(e)=>handleChange(e)} />
      <div>text: {text}</div>
      <button onClick={decrement}>點擊-1</button>
      <div>{count}</div>
      <button onClick={()=>seTest(1)}>測試</button>
    </div>
  )
}

export default Index