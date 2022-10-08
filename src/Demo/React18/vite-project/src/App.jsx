import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Test from './test.jsx'

const Header = () =>{
  return (
    <div>123</div>
  )
}

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/test'" component={Test} />
      </Routes>
    </Router>
  )
}

export default App
