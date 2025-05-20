import express from 'express'
import { getProduct } from '../controllers/productController.js'
import { deleteProduct } from '../controllers/productController.js'
import { createProduct } from '../controllers/productController.js'

const productRouter=express.Router()

productRouter.get("/",getProduct)
productRouter.post("/",createProduct)
productRouter.delete("/:id",deleteProduct)

export default productRouter