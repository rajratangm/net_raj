import mongoose from "mongoose"
const databaseConnection =()=>{
        await mongoose.connect(process.env.M)
    
}