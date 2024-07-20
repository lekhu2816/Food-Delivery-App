import React from "react";
import "./order.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const Order = () => {
  const [order, setOrder] = useState([]);
  const getOrder = async () => {
    const url = "http://localhost:5001/api/order/listOrder";
    const response = await axios.get(url);
   
    setOrder(response.data.order);
  };

   const statusHandler=async(event,orderId)=>{
     const url="http://localhost:5001/api/order/status";
     const response=await axios.post(url,{orderId:orderId,status:event.target.value});
     console.log(response)
   }

  useEffect(() => {
    getOrder();
  }, []);
  return (
    <div className="order">
      <h1>Orders</h1>
      <div className="order-list">
        {order.map((item, index) => {
          return (
            <div className="order-item" key={index}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdUgs26KWu5CSGSx1bIy31e5sgXub-R9f14Q&s"
                alt=""
              />
              <div className="order-desc">
                <div className="food-desc">
                  <p>
                    {item.items.map((foodItem, index) => (
                    foodItem.name+ " x "+ foodItem.quantity + " , "
                      
                    ))}
                  </p>
                </div>
                <div className="address-desc">
                  <p>
                    <span>Name : </span>
                    {item.address.firstName} {item.address.lastName}
                  </p>
                  <p>
                    
                    <span>City : </span>
                    {item.address.city}
                  </p>
                  <p>
                    <span> Pincode : </span>
                    {item.address.pincode}
                  </p>
                  <p>
                    <span>State : </span>
                    {item.address.state}
                  </p>
                  <p>
                    <span>Phone No. : </span>
                    {item.address.phone}
                  </p>
                </div>
              </div>
              <div className="quantity">
                <p>Quantity : {item.items.length}</p>
              </div>
              <div className="price">
                <p>Amount: ${item.amount}</p>
              </div>
              <div className="order-status">
          <select id="status" value={item.status} onChange={(event)=>{statusHandler(event,item._id)}}>
                  <option value="Food Processing">Food Processing</option>
                  <option value="Out of Delivery">Out of Delivery</option>
                  <option value="Delived">Delived</option>
                </select>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Order;
