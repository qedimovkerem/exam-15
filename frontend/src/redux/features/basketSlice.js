import {  createSlice } from '@reduxjs/toolkit'
const initialState = {
  basket: [],
}


export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addBasket:(state,action)=>{
      const findBasket=state.basket.find((item)=>item._id===action.payload._id)
      if (!findBasket) {
      state.basket.push({...action.payload,count:1})
        
      }else{
        findBasket.count++
      }
    },
    plus_btn:(state,action)=>{
       const findBasket=state.basket.find((item)=>item._id===action.payload)
      if (findBasket) {
        findBasket.count++
      }
    },
     minus_btn:(state,action)=>{
       const findBasket=state.basket.find((item)=>item._id===action.payload)
      if (findBasket && findBasket.count>1) {
        findBasket.count--
      }
    },
    removeBasket:(state,action)=>{
      const findBasket=state.basket.findIndex((item)=>item._id===action.payload)
      state.basket.splice(findBasket,1)
    },
  }
})

export const {addBasket,plus_btn,minus_btn,removeBasket} = basketSlice.actions

export default basketSlice.reducer