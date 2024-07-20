import React, { useContext, useEffect, useState } from "react";
import "./userOrder.css";
import axios from "axios";
import { StoreContext } from "../../context/storecontext";
import orderImage from "../../assets/orderImage.png";
const UserOrder = () => {
 
  const [userName,setUserName]=useState("User")
  const { token } = useContext(StoreContext);
  const [orderData, setOrderData] = useState([]);
  const getOrder = async () => {
    try {
      const url = "http://localhost:5001/api/order/userOrder";
      const response = await axios.post(url, {}, { headers: { token } });
      setOrderData(response.data.data);
      console.log(response.data.data)
    } catch (error) {
      console.error("Error fetching order:", error);
    }
  };
  useEffect(() => {
    if (orderData.length > 0 && orderData[0].address) {
      setUserName(orderData[0].address.firstName)
    }
  }, [orderData]);
  useEffect(() => {
    if (token) {
      getOrder();
    }
 
  }, [token]);

  return (
    <>
      <div className="user-order">
        <div className="user-order-header">
          <h1>Welcome ! {userName} </h1>
        </div>
        <div className="user-order-title">
          <h1>Your Orders</h1>
        </div>
        {
          orderData.map((item,index)=>{
             return (
           <div className="user-order-list" key={index}>
          <img src={orderImage} alt="" />
          <div className="order-items">
          {item.items.map((food)=>{
            return(
           
            <p>{food.name} x {food.quantity}</p>
         
            )
          })}
           </div>
          
          <div className="user-order-amount">
            <p>${item.amount}</p>
          </div>
          <div className="user-order-quantity">
            <p>Items: {item.items.length}</p>
          </div>
          <div className="user-order-status">
           
            <div className= {item.status=="Food processing"?"red-bg":"green-bg"}> </div> <p>{item.status}</p>
          </div>
          <div className="track-order">
            <button>Track order</button>
          </div>
        </div>
             ) 
          })
        }
        
      </div>
    </>
  );
};

export default UserOrder;
