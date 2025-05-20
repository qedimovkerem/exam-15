import express from 'express'
import 'dotenv/config'
import './src/db/connection.js'
import cors from "cors"
import productRouter from './src/routers/productRouter.js'
const app=express()

app.use(express.json())
app.use(cors())
app.use("/api/products",productRouter)
const port =process.env.PORT||3001


app.listen(port,()=>{
    console.log(`server is running ${`http://localhost:${port}`}`);
    
})