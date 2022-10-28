import React from 'react'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Test from './Demo/test.jsx'

const Header = () =>{
  return (
    <Link to="/test">Test</Link>
  )
}

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/test" element={<Test /> } />
      </Routes>
    </Router>
  )
}

export default App
