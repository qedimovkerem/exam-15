import React from 'react'
import './product.css'
import { FaHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { addBasket } from '../../redux/features/basketSlice';
import { addWishlist } from '../../redux/features/wishlistSlice';
const Product = ({product}) => {
  const {basket}=useSelector((state)=>state.basket)
  const dispatch=useDispatch()
  const {wishlist} =useSelector((state)=>state.wishlist)
  let findWishlist=wishlist.find((item)=>item._id===product._id)
  return (
    <div>
        <div className="cards">
            <div className="card_image">
                <img src={product.image} alt=""  style={{width:"100%", borderRadius:"8px"}}/>
                <div className="card_heart"
                 onClick={(e)=>{e.stopPropagation(); dispatch(addWishlist(product))}}
                 style={{color:findWishlist ? "red" :"black"}}
                 ><FaHeart/></div>
            </div>
            <div className="card_content">
                <div className="card_title">{product.title}</div>
                <div className="card_price">${product.price}</div>
                <button className='addtocard' onClick={(e)=>{e.stopPropagation(); dispatch(addBasket(product))}}>Add To Basket</button>
            </div>
        </div>
    </div>
  )
}

export default Product