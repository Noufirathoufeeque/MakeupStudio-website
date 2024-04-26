import React from 'react'
import Logo from '../assets/images/beauty-logo.webp'

const Navbar = () => {
  return (
    <header className='header'>
        <a href="" className='logo'>
            <img src={Logo} alt="" />
        </a>
        <nav className='navbar'>
           <a href="">HOME</a>
           <a href="">ABOUT</a>
           <a href="">PRODUCTS</a>
           <a href="">CONTACT</a>
           
        </nav>
        <div className='headerIcon'>
          <div className='phone'><i className="fa-solid fa-phone"></i></div>
          <p>+91 9946 1310 73</p>
        </div>
    </header>
  )
}

export default Navbar