import React from 'react'
import { Link } from 'react-router-dom'

import HeaderList from '../src/assets/Data/HeaderList'

function Header(){
  return (
    HeaderList.map((item)=>(
      <button key={item.to}>
        <Link to={item.to}>{item.name}</Link>
      </button>
    ))
  )
}
export default Header