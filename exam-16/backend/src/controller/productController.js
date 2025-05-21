import Product from "../model/productModel.js"


export const getProduct=async(req,res)=>{
    try {
        let findProduct=await Product.find()
        if (!findProduct) {
            res.status(404).send("product not found")
        }
        res.status(200).send(findProduct)
    } catch (error) {
        res.status(500).send("server error")
    }
}

export const createProduct=async(req,res)=>{
    try {
        let newProduct=new Product(req.body)
        await newProduct.save()
        res.status(200).send(newProduct)
    } catch (error) {
        res.status(500).send("server error")
    }
}
export const deleteProduct=async(req,res)=>{
    let {id}=req.params
    try {
        let deleteProduct=await Product.findByIdAndDelete(id)
        if (!deleteProduct) {
            res.status(400).send("product not succes delete")
        }
        res.status(200).send('product delete success')
    } catch (error) {
        res.status(500).send("server error")
    }
}