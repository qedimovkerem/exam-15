import React, { useEffect } from 'react'
import { createProduct, deleteProduct, getProduct } from '../redux/features/productSlice'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {useFormik} from 'formik'
const Admin = () => {
   const {products}=useSelector((state)=>state.products)
    const dispatch=useDispatch()
      useEffect(()=>{
            dispatch(getProduct())
        },[dispatch])


        const {values, errors, handleSubmit,handleChange}=useFormik({
          initialValues:{
            title:"",
            image:"",
            price:"",
            description:""
          },
          onSubmit:(values,{resetForm})=>{
            dispatch(createProduct(values))
            resetForm()
            useEffect(()=>{
              dispatch(getProduct())
            })
          }
        })
        const {title, image, price, description}=values
  return (
     <div style={{padding:"100px"}} className=''>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" 
        onChange={handleChange}
        name='title'
        value={title}
        />
        <input type="url" 
        onChange={handleChange}
        name='image'
        value={image}
        />
        <input type="number" 
        onChange={handleChange}
        name='price'
        value={price}
        />
        <input type="text" 
        onChange={handleChange}
        name='description'
        value={description}
        />
        <button type='submit'>create</button>
        </form>
      <Table responsive="sm">
      <thead>
        <tr>
          <th>image</th>
          <th>Name</th>
          <th>price</th>
          <th>Setting</th>
        </tr>
      </thead>
      <tbody>
        {products && products.map((item)=>{
          return(
            <tr key={item._id} style={{textAlign:"center", verticalAlign:"middle"}}>
          <td style={{height:"300px", width:"300px"}}><img src={item.image} alt="" /></td>
          <td>{item.title}</td>
          <td>${item.price}</td>
            <td><Button variant="danger" onClick={()=>dispatch(deleteProduct(item._id))}>Remove</Button></td>
        </tr>
          )
        })}
        
      </tbody>
    </Table>
    </div>
  )
}

export default Admin