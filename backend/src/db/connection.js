import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("connect mongo");
    
}).catch(()=>{
    console.log("disconnect mongo");
    
})