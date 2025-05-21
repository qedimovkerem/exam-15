import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"
const initialState = {
  products: [],
  allProduct:[],
}

const Base_url='http://localhost:4000/api/products'

export const getProduct=createAsyncThunk("product/get",async()=>{
    let {data}=await axios.get(Base_url)
    return data
})

export const createProduct=createAsyncThunk("product/create",async(product)=>{
    let {data}=await axios.post(Base_url,product)
    return data
})

export const deleteProduct=createAsyncThunk("product/delte",async(_id)=>{
    await axios.delete(`${Base_url}/${_id}`)
    return _id
})

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    sort:(state,action)=>{
        if (action.payload==="hight") {
            state.products.sort((a,b)=>a.price-b.price)
        }else if (action.payload==="low") {
            state.products.sort((a,b)=>b.price-a.price)
        }
    },
    filterProduct:(state,action)=>{
        state.products=state.allProduct.filter((item)=>item.title.toLowerCase().includes(action.payload.toLowerCase()))
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.products=action.payload
      state.allProduct=action.payload
    })
     builder.addCase(createProduct.fulfilled, (state, action) => {
      state.products.push(action.payload)
      
    })
     builder.addCase(deleteProduct.fulfilled, (state, action) => {
      let findProduct=products.findIndex((item)=>item._id===action.payload)
      state.products.splice(findProduct,1)
    })
  },
})

export const {sort ,filterProduct} = productSlice.actions

export default productSlice.reducer