import React from 'react'
import Logo from '../logo/Logo'
import Navlist from '../navlist/Navlist'
import Wrapper from '../wrapper/Wrapper'
import './navbar.css'
const Navbar = () => {
  return (
    <div className='container nav-navbar'>
        <Logo/>
        <Navlist/>
        <Wrapper/>
    </div>
  )
}

export default Navbar