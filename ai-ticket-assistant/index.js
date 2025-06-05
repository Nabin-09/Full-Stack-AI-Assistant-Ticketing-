import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import userRoutes from "./routes/user.js"
import 'dotenv/config'


const PORT = process.env.PORT || 3000
const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/auth" , userRoutes)

mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        console.log(`MongoDb connected`);
        app.listen(PORT,()=>{
            console.log(`Server Running at ${PORT}`)
        })
    })
    .catch((err)=>console.log(`MongoDb Error : ${err}`))