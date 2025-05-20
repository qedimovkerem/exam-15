import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import "./product.css"
import { useDispatch, useSelector } from 'react-redux';
import { addBasket } from '../../redux/features/basketSlice';
import { addwishlidt } from '../../redux/features/wishlistSlice';
import { useNavigate } from 'react-router-dom';
const Product = ({product}) => {
      const {basket}=useSelector((state)=>state.basket)
  const dispatch=useDispatch()
   const {wishlist}=useSelector((state)=>state.wishlist)
   const findWishlist=wishlist.find((item)=>item._id===product._id)
   const navigate =useNavigate()
  return (
    <div className='prduct-cards' onClick={()=>navigate(`/detailpages/${product._id}`)}>
        <div className="product_image">
            <img src={product.image} alt="" style={{borderRadius:"50%"}}/>
            <div className="product_heaRT">
                <FaRegHeart onClick={(e)=>{e.stopPropagation(), dispatch(addwishlidt(product))}} style={{color:findWishlist? "red" :"black"}}/>
            </div>
        </div>
       <div className="content">
         <h3 className="product_title">{product.title}</h3>
        <p className='desc'>{product.description}</p>
         <button className="addbadket" onClick={(e)=>{e.stopPropagation(), dispatch(addBasket(product))}}>Add To Basket</button>
       </div>
       <div className="product_price">
        <div className="price">${product.price}</div>
       </div>
    </div>
  )
}

export default Product