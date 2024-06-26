import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  const navStyle = {
    display: 'inline',
    fontSize: 20,
    marginLeft: 10
  }
  return (
    <nav>
      <Link to = "/" className = "nav-link" style = {navStyle}>Home</Link>
      <Link to = "/Resume" className = "nav-link" style = {navStyle}>Resume</Link>
      <Link to = "/Project" className = "nav-link" style = {navStyle}>Side Project</Link>
      <Link to = "/Blog" className = "nav-link" style = {navStyle}>Blog</Link>
      <Link to = "/Contact" className = "nav-link" style = {navStyle}>Contact</Link>
    </nav>

  )
}

export default Navbar;