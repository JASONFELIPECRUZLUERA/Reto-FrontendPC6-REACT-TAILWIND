import React from 'react'
import logo from '../assets/images/logo.svg'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className=' flex place-content-between items-center mb-8'>
        <img src={logo} alt='logo'></img>
        <Navbar></Navbar>
    </header>
  )
}

export default Header
