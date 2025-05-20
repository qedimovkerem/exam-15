import React from 'react'
import { FaRegHeart } from "react-icons/fa";

import { SlBasket } from "react-icons/sl";
import './wrapper.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Wrapper = () => {
   const {basket}=useSelector((state)=>state.basket)
  const total =basket.reduce((sum, item)=>sum +item.count,0)  
  return (
    <div className='wrapper'>
        <div className="heart"><Link className="link" to="/wishlist"><FaRegHeart/></Link></div>
        <div className="basket"><Link className="link" to="/basket"><SlBasket/><sup>{total}</sup></Link></div>
        <button className='admin'><Link className="link" to="/admin">Admin</Link></button>
    </div>
  )
}

export default Wrapper