import React from 'react'
import './wrapper.css'
import { FaHeart } from "react-icons/fa6";
import { SlBasket } from "react-icons/sl";
import { Link } from 'react-router-dom';
const Wrapper = () => {
  return (
    <div className='wrapper'>
        <div className="heart"><Link className="link" to={"/wishlist"}><FaHeart/></Link></div>
        <div className="basket">
            <Link className="link" to={"/basket"}><SlBasket/></Link>
        </div>
        <button className="admin"><Link className="link" to={"/admin"}>Admin</Link></button>
    </div>
  )
}

export default Wrapper