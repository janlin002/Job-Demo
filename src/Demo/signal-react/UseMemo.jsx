/* eslint-disable react/prop-types */
import React, { useState } from 'react'

const Main = ({ setCart }) => {
  console.log('==== Main 被觸發了 ====')

  return (
    <div>
      <Product setCart={setCart}/>
    </div>
  )
}

const Product = ({ setCart }) =>{
  console.log('==== Product 被觸發了 ====')
  return (
    <div>
      <button
        type="button"
        onClick={()=>setCart((cart)=>[...cart, "product"])}
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

  return (
    <div>
        Cart: {JSON.stringify(cart)}
    </div>
  )
}

const Index = () => {
  console.log('==== Index 被觸發了 ====')
  const [cart, setCart] = useState([])

  return (
    <div>
      <Main setCart={setCart} />
      <Navbar cart={cart} />
    </div>
  )
}

export default Index