import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Table,Button}from 'react-bootstrap';
import { minus_btn, plus_btn, removeBasket } from '../redux/features/basketSlice';

const Basket = () => {
  const {basket}=useSelector((state)=>state.basket)
  const dispatch=useDispatch()
  const total =basket.reduce((sum, item)=>sum +item.count*item.price,0)  
  return (
    <div style={{padding:"100px"}}>
      <div className="basket_title" style={{backgroundColor:"green", padding:"20px", textAlign:"center"}}>
        Basket
      </div>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>image</th>
          <th>Name</th>
          <th>price</th>
          <th>count</th>
          <th>Setting</th>
        </tr>
      </thead>
      <tbody>
        {basket && basket.map((item)=>{
          return(
            <tr key={item._id} style={{textAlign:"center", verticalAlign:"middle"}}>
          <td style={{height:"300px", width:"300px"}}><img src={item.image} alt="" /></td>
          <td>{item.title}</td>
          <td>${item.price}</td>
          <td>
            <Button variant="danger" onClick={()=>dispatch(minus_btn(item._id))}>-</Button>
            {item.count}
             <Button variant="success" onClick={()=>dispatch(plus_btn(item._id))}>+</Button>
            </td>
            <td><Button variant="danger" onClick={()=>dispatch(removeBasket(item._id))}>Remove</Button></td>
        </tr>
          )
        })}
        
      </tbody>
    </Table>
    <p>total price :${total}</p>
    </div>
  )
}

export default Basket