import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlist } from '../redux/features/wishlistSlice'
import { Button, Table } from 'react-bootstrap'

const Wishlist = () => {
  const dispatch=useDispatch()
  const {wishlist} =useSelector((state)=>state.wishlist)
  return (
      <div style={{padding:"60px 0px"}} >
       <div className="table-responsive">
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
          <td style={{width:"300px"}}><img src={item.image} alt="" style={{maxWidth:"100%"}}/></td>
          <td>{item.title}</td>
          <td>${item.price}</td>
            <td><Button variant='danger' onClick={()=>{dispatch(removeWishlist(item._id))}}>Remove</Button></td>
        </tr>
          )
        })}
      </tbody>
    </Table>
       </div>
    </div>
  )
}

export default Wishlist