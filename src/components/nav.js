import React from 'react'
import './nav.css'
import logo from '../assets/logo.png'
import menu from '../assets/menu.svg'


function Nav() {
  return (
    <nav>
        <img src={logo}/>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Features</li>
            <li>Solution</li>
        </ul>
        <img src={menu} className='menu-icon'/>
    </nav>
  )
}

export default Nav
