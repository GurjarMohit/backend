//require('dotenv').config({path:'./env'})
import dotenv from "dotenv";

import connect from "./db/index.js";

dotenv.config({
    path:'./env'
})

connect()


























/*
import express from "express";
const app=express()
const connectDB =async () =>{
    try{
        const connectionInstance =await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error",()=>{
            console.log("Error",error);
            throw error;
        })
    app.listen(process.env.PORT,()=>{
        console.log(`App Is Listening on port ${Process.env.PORT}`);
    })
    }catch(error){
        console.log("MONGODB connection FAILED ", error);
        process.exit(1) 
    }
}
export default connectDB;
*/