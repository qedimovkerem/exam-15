import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../redux/features/productSlice'
import Product from '../product/Product'
import './products.css'
const Products = () => {
    const {products}=useSelector((state)=>state.products)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getProduct())
    },[dispatch])
    console.log(products);
    
  return (
    <section id='products'>
        <div className="container">
            <div className="products">
                {products && products.map((product)=><Product key={product._id} product={product}/>)}
            </div>
        </div>
    </section>
  )
}

export default Products