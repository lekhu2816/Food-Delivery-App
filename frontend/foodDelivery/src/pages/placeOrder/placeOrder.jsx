import React, { useContext, useState } from "react";
import "./placeOrder.css";
import { StoreContext } from "../../context/storecontext";
import axios from "axios";
import {useNavigate} from "react-router-dom"
const Placeorder = () => {
  const navigate=useNavigate();
  const{getTotalCartAmount, food_Item,token,cartItems,data,setData}= useContext(StoreContext)
   
  
  const onHandleChange=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setData((data)=>({...data,[name]:value}))
  }

  const placeOrder=(event)=>{
   event.preventDefault();
    navigate('/payment')
  }
  return (
    <form onSubmit={placeOrder} className="placeorder" >
      <div className="placeorder-left">
        <h1>Delivery information</h1>
        <div className="multi-fields">
          <input type="text" placeholder="Firstname" name="firstName" onChange={onHandleChange} value={data.firstName} required/>
          <input type="text" placeholder="Lastname" name="lastName" onChange={onHandleChange} value={data.lastName} />
        </div>
        <input type="email" placeholder="Your Email" name="email" onChange={onHandleChange} value={data.email}/>
        <input type="text" placeholder="Street" name="street" onChange={onHandleChange} value={data.street} required />
        <div className="multi-fields">
          <input type="text" placeholder="City" name="city" onChange={onHandleChange} value={data.city} required />
          <input type="text" placeholder="State" name="state" onChange={onHandleChange} value={data.state} required/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Pincode" name="pincode" onChange={onHandleChange} value={data.pincode} required />
          <input type="text" placeholder="Country" name="country" onChange={onHandleChange} value={data.country} required/>
        </div>
        <input type="text" placeholder="Phone number" name="phone" onChange={onHandleChange} value={data.phone} required/>
      </div>
      <div className="placeorder-right">
        <h1>Card Total</h1>
        <div className="subTotal">
          <p>Subtotal</p>
          <p>${getTotalCartAmount()}</p>
        </div>
        <hr />
        <div className="subTotal">
          <p>Delivery Fee</p>
          <p>$2</p>
        </div>
        <hr />
        <div className="subTotal">
          <p>Tax</p>
          <p>$1</p>
        </div>
        <hr />
        <div className="subTotal">
          <h2>Total</h2>
          <p>{getTotalCartAmount()+2+1}</p>
        </div>
        <hr />
        <button type="submit">click here to proceed</button>
      </div>
    </form>
  );
};

export default Placeorder;
