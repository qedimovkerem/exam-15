import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addwishlidt, removeWishlist } from '../redux/features/wishlistSlice'
import { Button, Table } from 'react-bootstrap'

const Wishlist = () => {
  const {wishlist}=useSelector((state)=>state.wishlist)
  const dispatch=useDispatch()
  console.log(wishlist);
  
  return (
    <div style={{padding:"100px"}}>
      <div className="basket_title" style={{backgroundColor:"green", padding:"20px", textAlign:"center"}}>
        Wishlist
      </div>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>image</th>
          <th>Name</th>
          <th>price</th>
          <th>Setting</th>
        </tr>
      </thead>
      <tbody>
        {wishlist && wishlist.map((item)=>{
          return(
            <tr key={item._id} style={{textAlign:"center", verticalAlign:"middle"}}>
          <td style={{height:"300px", width:"300px"}}><img src={item.image} alt="" /></td>
          <td>{item.title}</td>
          <td>${item.price}</td>
            <td><Button variant="danger" onClick={()=>dispatch(removeWishlist(item._id))}>Remove</Button></td>
        </tr>
          )
        })}
        
      </tbody>
    </Table>
    </div>
  )
}

export default Wishlist