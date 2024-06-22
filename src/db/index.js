import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";





const connect=async()=>{
    try {
        const connectionInstance=
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n mongoDb connected !! DB HOSt:${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Mongo Db connection error");
        process.exit(1);
    }
}


export default connect;