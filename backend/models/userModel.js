import mongoose from "mongoose";
const userSchema=mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
    cartData:{type:Object,default:{}}
},{timestamp:true},{minimize:false})

const userModel=mongoose.models.user|| mongoose.model("user",userSchema);
export default userModel;