import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterProduct, getProduct, sort } from '../../redux/features/productSlice'
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
        <div className="products_tite">
            <h2>Discover Our Exclusive Menu</h2>
        </div>
        <div className="container">
            <div className="filter">
                <div className="product_search">
                    <input type="text" className='search' onChange={(e)=>dispatch(filterProduct(e.target.value))}/>
                    <button className='product_btn1'>search</button>
                </div>
                <div className="product_btn">
                    <button className='product_btn' onClick={()=>{dispatch(sort("low"))}}>Hight to low</button>
                    <button className='product_btn' onClick={()=>{dispatch(sort("hight"))}}>Low to Hight</button>
                   
                </div>
            </div>
            <div className="products">
                {products && products.map((product)=><Product key={product._id} product={product}/>)}
            </div>
        </div>
    </section>
  )
}

export default Products