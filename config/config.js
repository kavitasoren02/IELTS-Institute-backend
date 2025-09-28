import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI

export const ConnectToMongo = async() => {
    try{
        await mongoose.connect(MONGODB_URI);
        console.log("Mongodb Connected successfully."); 
    }
    catch (error) {
        console.log("Mongodb Connection failed: ", error)
    }
}