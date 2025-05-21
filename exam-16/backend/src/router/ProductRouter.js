import express from 'express'
import { createProduct, deleteProduct, getProduct } from '../controller/productController.js'

const productRouter=express.Router()

productRouter.get("/",getProduct)
productRouter.post("/",createProduct)
productRouter.delete("/:id",deleteProduct)
export default productRouter