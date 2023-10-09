import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const currentPathname = window.location.pathname;
  const firstPath = currentPathname.split("/")[1];


  return (
    <nav className='navbar'>
        <Link to="/" className={firstPath == "" ? "currentPath" : ""}>home</Link>
        <Link to="/about" className={firstPath == "about" ? "currentPath" : ""}>about</Link>
        <Link to="/products" className={firstPath == "products" ? "currentPath" : ""}>products</Link>
        <Link to="/collections" className={firstPath == "collections" ? "currentPath" : ""}>collections</Link>
        <Link to="/contact" className={firstPath == "contact" ? "currentPath" : ""}>contact</Link>
    </nav>
  )
}

export default Navbar
