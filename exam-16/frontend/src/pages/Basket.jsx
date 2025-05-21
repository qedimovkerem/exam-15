import React from 'react'
import{Table , Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { minus_btn, plus_btn, removeBasket } from '../redux/features/basketSlice';
const Basket = () => {
  const {basket}=useSelector((state)=>state.basket)
  const dispatch=useDispatch()
  return (
    <div style={{padding:"60px 0px"}} >
       <div className="table-responsive">
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
          <td style={{width:"300px"}}><img src={item.image} alt="" style={{maxWidth:"100%"}}/></td>
          <td>{item.title}</td>
          <td>${item.price}</td>
          <td>
           <div className="btn_area" style={{display:"flex", alignItems:"center"}}>
             <Button variant='danger' onClick={()=>{dispatch(minus_btn(item._id))}}>-</Button>
            <span>{item.count}</span>
            <Button variant='success' onClick={()=>{dispatch(plus_btn(item._id))}}>+</Button>
           </div>
            </td>
            <td><Button variant='danger' onClick={()=>{dispatch(removeBasket(item._id))}}>Remove</Button></td>
        </tr>
          )
        })}
      </tbody>
    </Table>
       </div>
    </div>
  )
}

export default Basket