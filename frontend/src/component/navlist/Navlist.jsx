import React from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import './navlist.css'
const Navlist = () => {
  return (
    <div>
        <ul className="list">
            <li>
                <Link className="link" to="/">Home</Link>
            </li>
            <li>
                <Link className="link" to="/menu">Menu</Link>
            </li>
            <li>
                <Link className="link" to="/special">Specialties</Link>
            </li>
            <li>
                <Link className="link" to="/reservation">Reservation</Link>
            </li>
            <li>
                <Link className="link" to="/blog">Blog</Link>
            </li>
            <li>
                <Link className="link" to="/about">About</Link>
            </li>
            <li>
                <Link className="link" to="/contact">Contact</Link>
            </li>
        </ul>
        <div className="hamburger"><GiHamburgerMenu/></div>
    </div>
  )
}

export default Navlist