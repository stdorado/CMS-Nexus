import express from "express"
import mongoose from "./config/mongoose.config.js"
import UserRouter from "./router/user.routes.js"
import PostRouter from "./router/post.routes.js"
const app = express()
app.use(express.json())
app.use(express.urlencoded({extends : true}))

app.use("/api/",UserRouter)
app.use("/api/",PostRouter)


const port = process.env.PORT || 6000;
app.listen(port,()=> {
    console.log("puerto en ejecucion", port)
})