import React from 'react'
import { Button } from 'react-bootstrap'
import logo from "../../assets/images/BriBooks.svg"
import "./navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar__left__container'>
            <img src={logo} alt="BriBooks" />
        </div>
        <div className='navbarRight__container'>
        <Button variant="success">Change Theme</Button>
        <Button variant="primary">Noah bel</Button>
        </div>
    </div>
  )
}

export default Navbar