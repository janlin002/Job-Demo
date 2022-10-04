import React from 'react'
import { Link } from 'react-router-dom'
import '../src/assets/css/styles.css'

import HeaderList from '../src/assets/Data/HeaderList'

function Header(){
  return (
    HeaderList.map((item)=>(
      <button key={item.to} type="button">
        <Link to={`/${item.to}`}>{item.name}</Link>
      </button>
    ))
  )
}
export default Header