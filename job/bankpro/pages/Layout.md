''`js
import React from 'react'

function Header() {
  return (
    <div>i am header</div>
  )
}

function Footer() {
  return (
    <div>i am Footer</div>
  )
}

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
```
