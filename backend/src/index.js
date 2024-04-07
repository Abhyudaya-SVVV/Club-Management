import dotenv from "dotenv"
dotenv.config({
    path: "./.env"
})
import mongoose from "mongoose"
import app from './app.js'

const DB_NAME = "Cards"

const connectDB = async ()=>{
    try {
        const connectionIntance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`Mongo Connnect !!!!`);
    } catch (error) {
        console.log("Mongo not connect !!",error);
        process.exit(1)
    }
    
}

connectDB()
.then(()=>{
    app.listen(process.env.PORT ,()=>{
        console.log(`Server is lintening on port : ${process.env.PORT}`);

    })
})
.catch((error)=>{
    console.error("Mongoose contion failed",error)
})


