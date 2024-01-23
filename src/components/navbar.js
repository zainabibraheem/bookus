import React, { useState } from 'react'
import logo from '../images/logo2.jpeg'
import { Link, NavLink } from 'react-router-dom'
import { RxCross2 } from 'react-icons/rx'
import { FiMenu } from 'react-icons/fi'
import './navbar.css'



function Navbar() {
  const activeStyle = {
    textDecoration: 'underline',
    color: '',
    fontSize: '15px',
    font: 'bold'

  }

  const [toggle, settoggle] = useState(false)

  const toggleNavbar = () => {
    settoggle(prevSetToggle => !prevSetToggle)
  }


  return (
    <div>
      <nav>
        <div className='navbar'>
          <img src={logo} alt='bookus logo' width={80} height={60} />
          <div className={toggle? 'nav-routes-toggle' : 'nav-routes'}>
          <div className='nav-links'>
            <NavLink
              to='/' className='nav-link'
              style={({ isActive }) => isActive ? activeStyle : null}
            >
              Home
            </NavLink>

            <NavLink
              to='mission' className='nav-link'
              style={({ isActive }) => isActive ? activeStyle : null}
            >
              Our Mission
            </NavLink>

            <NavLink
              to='search' className='nav-link'
              style={({ isActive }) => isActive ? activeStyle : null}
            >
              Search
            </NavLink>

            <NavLink
              to='contact' className='nav-link'
              style={({ isActive }) => isActive ? activeStyle : null}
            >
              Contact Us
            </NavLink>

          </div>

          <div className='buttons-div'>
            <Link to='login'>
            <button className='nav-button'>Log in</button>
            </Link>

            <Link to='signup' >
            <button className='nav-button'> Sign Up</button>
            </Link>
            
            
          </div>

          </div>
          <button onClick={toggleNavbar} className='menu-button'>{toggle ? <RxCross2 size={24} /> : <FiMenu size={24} />} </button>


        </div>
      </nav>
    </div>
  )
}

export default Navbar
