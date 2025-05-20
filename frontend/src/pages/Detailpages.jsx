import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";
import { addBasket } from '../redux/features/basketSlice';

const Detailpages = () => {
   const {products}=useSelector((state)=>state.products)
   const {basket}=useSelector((state)=>state.basket)
    const dispatch=useDispatch()
    let {_id}=useParams()
    const findproduct=products.find((item)=>item._id===_id)
  return (
    <div>
         <div className='prduct-cards'>
              <div className="product_image">
                  <img src={findproduct.image} alt=""/>
                  <div className="product_heaRT">
                      <FaRegHeart onClick={(e)=>{e.stopPropagation(), dispatch(addwishlidt(findproduct))}}/>
                  </div>
              </div>
             <div className="content">
               <h3 className="product_title">{findproduct.title}</h3>
              <p className='desc'>{findproduct.description}</p>
               <button className="addbadket" onClick={(e)=>{e.stopPropagation(), dispatch(addBasket(findproduct))}}>Add To Basket</button>
             </div>
             <div className="product_price">
              <div className="price">${findproduct.price}</div>
             </div>
          </div>
    </div>
  )
}

export default Detailpages