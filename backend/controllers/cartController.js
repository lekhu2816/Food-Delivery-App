import e from "express";
import userModel from "../models/userModel.js";

// add items to cart
const addToCart=async(req,res)=>{
 const{userId,itemId}=req.body;
try {
    const userData=await userModel.findById(userId);
    const cartData=await userData.cartData; 
    if(!cartData[itemId]){
       cartData[itemId]=1;
    }
    else{
       cartData[itemId]=cartData[itemId]+1;
    }
    await userModel.findByIdAndUpdate(userId,{cartData});
    console.log(userData)
    res.json({success:true,message:"item added succesfully"})
} catch (error) {
    console.log(error)
    res.json({success:false,message:"Error occured while adding item"})
}
}

// remove item from cart
const removeFromCart=async(req,res)=>{
const {userId,itemId}=req.body;
try {
    const userData=await userModel.findById(userId);
    const cartData=await userData.cartData;
    if(cartData[itemId]>0){
      cartData[itemId]-=1;
    }
    await userModel.findByIdAndUpdate(userId,{cartData});
    res.json({success:true,message:"item removed successfully"})
} catch (error) {
    console.log(error)
    res.json({success:false,message:"Error occured while adding item"})
}
}
// get user cart data
const getCart=async(req,res)=>{
  const {userId}=req.body;
  try {
    const userData=await userModel.findById(userId);
    const cartData=await userData.cartData;
    res.json({success:true,data:cartData});
  } catch (error) {
    console.log(error);
    res.json({success:false,message:"error occured while getting cart data"})
  }
}
export {addToCart,removeFromCart,getCart}