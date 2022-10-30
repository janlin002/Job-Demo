import React from 'react'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'

import '../src/index.css'

import Test from './Demo/test.jsx'
import Transition from './Demo/transition.jsx'
import UseDeferredValue from './Demo/useDeferredValue.jsx'

const Header = () =>{
  return (
    <>
      <Link to="/test" className="link">Test</Link>
      <Link to="/transition" className="link">Transition</Link>
      <Link to="/useDeferredValue" className="link">useDeferredValue</Link>
    </>
  )
}

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/test" element={<Test /> } />
        <Route path="/transition" element={<Transition /> } />
        <Route path="/useDeferredValue" element={<UseDeferredValue /> } />
      </Routes>
    </Router>
  )
}

export default App
