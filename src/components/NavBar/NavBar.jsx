import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav className='navBar'>
      <div className='navBar__logo'>BANIWAZ</div>
      <div className='navBar__navLink'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/affiliate">Affliate</Link>
          </li>
          <li>
            <Link to="/faqs">FAQs</Link>
          </li>
          <li>
            <Link to="/terms">Terms</Link>
          </li>
        </ul>
      </div>
      <div>
        <Button title="SIGN IN" color="white" />
      </div>
    </nav>
  )
}

export default NavBar