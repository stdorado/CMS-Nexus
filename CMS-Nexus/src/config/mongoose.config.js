import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

 mongoose.connect(process.env.MONGO_CONNECT)
.then (()=>{
    console.log("Conexion exitosa con db")
}).catch((err)=>{
    console.log(err)
})

export default mongoose