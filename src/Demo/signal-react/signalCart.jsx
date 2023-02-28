/* eslint-disable react/prop-types */
import React from 'react'
import { signal, effect, computed } from "@preact/signals-react"

const Main = ({ cart }) => {
  console.log('==== Main 被觸發了 ====')

  return (
    <div>
      <Product cart={cart}/>
    </div>
  )
}

const Product = ({ cart }) =>{
  console.log('==== Product 被觸發了 ====')

  effect(()=>{
    console.log(cart.value, 'effect')
  })

  const handleClick = () =>{
    console.log('click')
    cart.value = [...cart.value, 'product']
  }
  return (
    <div>
      <button
        type="button"
        onClick={()=> {
          handleClick()
        }}
      >
        加到購物車
      </button>
    </div>
  )
}

const Navbar = ({ cart }) => {
  console.log('==== Navbar 被觸發了 ====')

  return (
    <div>
      <Cart cart={cart}/>
    </div>
  )
}

const Cart = ({ cart }) =>{
  console.log('==== Cart 被觸發了 ====')

  effect(()=>{
    console.log(cart, 'cart222')
  })

  return (
    <div>
        Cart: {JSON.stringify(cart.value)}
    </div>
  )
}

const Index = () => {
  console.log('==== Index 被觸發了 ====')
  const cart = signal([])

  return (
    <div>
      <Main cart={cart} />
      <Navbar cart={cart} />
    </div>
  )
}

export default Index
