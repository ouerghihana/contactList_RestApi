import React from 'react'
import'./Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    
    <div className='body_nav'>
    <div className="background-one">
      <div className="link-container">
        <Link className="link-one" to={'/'}>
          Home
        </Link>
      </div>
    </div>
    <div className="background-two link-container">
      <Link className="link-two" to={'/contact'}>
        Contact List
      </Link>
    </div>
    <div className="background-three link-container">
      <Link className="link-three" to={'/addcontact'}>
        Add Contact
      </Link>
    </div>
    <div className='body_button'>
      <a href="/" className="cta">
        <span>Login/Logout</span>
        <svg width="13px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5" />
          <polyline points="8 1 12 5 8 9" />
        </svg>
      </a>
    </div>
  </div>


     
  )
}

export default Navbar

