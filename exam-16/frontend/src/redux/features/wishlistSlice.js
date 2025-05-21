import {  createSlice } from '@reduxjs/toolkit'
const initialState = {
  wishlist: [],
}

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
      addWishlist:(state,action)=>{
      const findwishlist=state.wishlist.find((item)=>item._id===action.payload._id)
      if (!findwishlist) {
        state.wishlist.push({...action.payload, count:1})
      }else{
        const findwishlist=state.wishlist.findIndex((item)=>item._id===action.payload)
       state.wishlist.splice(findwishlist,1)
      }
    },
      removeWishlist:(state,action)=>{
       const findwishlist=state.wishlist.findIndex((item)=>item._id===action.payload)
       state.wishlist.splice(findwishlist,1)
    }
  }

})

export const {addWishlist,removeWishlist} = wishlistSlice.actions

export default wishlistSlice.reducer