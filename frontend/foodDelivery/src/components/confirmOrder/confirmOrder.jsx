import React, { useContext, useEffect, useState } from 'react'
import './confirmOrder.css'
import { StoreContext } from '../../context/storecontext'
import success from '../../assets/success.png'
import cancelLogo from '../../assets/cancelLogo.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const ConfirmOrder = () => {
    const navigate=useNavigate();
    const [orderData,setOrderData]=useState(null);
    const{getTotalCartAmount,orderId}=useContext(StoreContext);
      
     
      const makeOrder=async()=>{
       const url="http://localhost:5001/api/order/verify"
       if(orderData=="confirm"){
       
         const response=await axios.post(url,{
            success:true,
            orderId:orderId
           });
       }
       else if(orderData=="reject"){
        const response=await axios.post(url,  {
            success:false,
            orderId:orderId
           });
        
       }
       else{
        // console.log("some Error happend")
       }
      }

      useEffect(()=>{
         makeOrder()
      },[orderData])
  return (
    <div className='confirm-order'>
        {orderData?"":<div  className='confirm-order-title'>
     <h1>Payment Confirmation</h1>
     </div>}
     

      {orderData=="confirm"? <div  className='confirm-order-title-accept'>
     <h1>Success</h1>
     </div>:""}
     {orderData=="reject"? <div  className='confirm-order-title-reject'>
     <h1>Success</h1>
     </div>:""}
       {orderData=="confirm"? <div className="order-status">
         <img src={success} alt="successlogo" />
         <p>Order Recieved </p>
      </div>: "" }
      {orderData=="reject"?<div className="order-status">
         <img src={cancelLogo} alt="successlogo" />
         <p>Cancelled Order </p>
      </div>: ""}
      {orderData?"":<div className='order-description'>
      <p>Please confirm your payment</p>
      <h2>Total Amount: ${getTotalCartAmount()+2}</h2>
      </div>}
      
      
       {orderData=="confirm"?<button onClick={()=>{navigate('/user-order')}} className='order-status-button-accept'>Track Your Order</button>:""}
      {orderData=="reject"?<button onClick={()=>{navigate('/')}} className='order-status-button-reject'>Order Now</button>:""}
      
     {orderData?"":<div className="confirm-order-button">
        <button onClick={()=>{setOrderData("reject")}} className='reject order-btn'>Reject</button>
        <button onClick={()=>setOrderData("confirm")} className='make-payment order-btn'>Confirm</button>
      </div>}
     
      
     
    </div>
  )
}

export default ConfirmOrder
