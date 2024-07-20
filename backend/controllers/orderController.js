import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js"



// placing order for frontend
const placeOrder=async(req,res)=>{
  
    
    try {
        const newOrder=new orderModel({
            userId:req.body.userId,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address,
           
           
        })

       await newOrder.save();
       await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});
       
       
        res.json({
            success:true,orderId:newOrder._id})
    } catch (error) {
      
        res.json({
            success:false,message:"Error occured while placing order"})
    }
}

const verifyOrder=async(req,res)=>{
 const {success,orderId}=req.body;
 try {
    if(success==true){
        await orderModel.findByIdAndUpdate(orderId,{payment:true});
        res.json({success:true,message:"payment done"})
       
   }
   else{
      await orderModel.findByIdAndDelete(orderId);
      res.json({success:false,message:"payment failed"})
   }
 } catch (error) {
    res.json({
        success:false,message:"Error in the verify order"})

 }

}
const userOrder=async(req,res)=>{
   
    const {userId}=req.body;
    try {
        const order=await orderModel.find({userId:req.body.userId});
        res.json({success:true,data:order});
    } catch (error) {
        res.json({success:false,message:"cannot get user order"})
    }
}

const orderList=async(req,res)=>{
  try {
    const data  = await orderModel.find({});
    res.json({success:true,order:data})
  } catch (error) {
     res.json({success:false,message:"Error while sending the orders"})
  }
}

// api for updation of order status
const updateStatus=async(req,res)=>{
try {
    const{orderId,status}=req.body;
    await orderModel.findByIdAndUpdate(orderId,{status:status});
    res.json({success:true,message:"status updated"})
} catch (error) {
    res.json({success:false,message:"error in updating status"})
}
}

export  {placeOrder,verifyOrder,userOrder,orderList,updateStatus};