import React from 'react'

const Header = () =>{
    return (
        <div>i am header</div>
    )
}

const Footer = () =>{
    return (
        <div>i am Footer</div>
    )
}


const Layout = ({children}) => {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout