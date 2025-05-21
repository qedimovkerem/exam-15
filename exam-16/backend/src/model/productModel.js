import mongoose from "mongoose";

const productSchema=mongoose.Schema({
    title:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    description:{type:String,required:true},
},{collection:"Products"})

const Product=mongoose.model("Product" ,productSchema)
export default Product