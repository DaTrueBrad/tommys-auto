import React from 'react'
import {NavLink, Link} from 'react-router-dom'

function Header() {
  return (
    <header id='main-header'>
      <img src="/logo2.png" alt="" />
      <nav>
        <NavLink to='/home' activeStyle={{backgroundColor: '#6B172B'}}>Home</NavLink>
        <NavLink to='/about' activeStyle={{backgroundColor: '#6B172B'}}>About</NavLink>
        <NavLink to='/contact' activeStyle={{backgroundColor: '#6B172B'}}>Contact</NavLink>
      </nav>
    </header>
  )
}

export default Header
