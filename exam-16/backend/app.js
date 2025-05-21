import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import './src/db/connection.js'
import productRouter from './src/router/ProductRouter.js'
const app =express()
const port =process.env.PORT ||4001
app.use(express.json())
app.use(cors())
app.use('/api/products',productRouter)
app.listen(port, ()=>{
    console.log(`server is running ${`http://localhost:${port}`}`);
    
})