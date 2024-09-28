import mongoose from "mongoose";

const schema = new mongoose.Schema({
    image:{
        type:String
    },
    blogg:{
        type:String
    }
    
}) 
export const User = mongoose.model("userBhai",schema)