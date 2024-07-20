import React, { useContext } from "react";
import "./cart.css";
import { StoreContext } from "../../context/storecontext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
const{token} = useContext(StoreContext)
  const navigate = useNavigate();
  const {
    cartItems,
    addTocart,
    removeFromCart,
    food_Item,
    getTotalCartAmount,
  } = useContext(StoreContext);
  const tax = 1;
  const delivery = 2;
  const totalProductAmount = getTotalCartAmount();
  const totalAmount = tax + delivery + totalProductAmount;
   const handleButtonEvent=()=>{
     if(!token){
      alert("please login your account")
     }
     else{
      if(totalProductAmount==0){
        alert("Please add item")
     }else{
       navigate("/order")
     }
     }
    
    
   }


  return (
    <div className="add-to-cart">
      <div className="cart-item">
        <div className="cart-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Add</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        <div className="cart-title"></div>
        {food_Item.map((item, index) => {
          if (cartItems[item._id]) {
            return (
              <>
                <div className="add-to-card-item" key={index+1}>
                  <img src={`http://localhost:5001/images/${item.image}`} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    onClick={() => {
                      addTocart(item._id);
                    }}
                    className="addItem"
                  >
                    <i className="fa-solid fa-plus"></i>
                  </p>
                  <p
                    onClick={() => {
                      removeFromCart(item._id);
                    }}
                    className="addItem"
                  >
                    {" "}
                    <i className="fa-solid fa-minus"></i>{" "}
                  </p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
      <div className="card-bottom">
        <div className="card-bottom-left">
          <h1>Card Total</h1>
          <div className="subTotal">
            <p>Subtotal</p>
            <p>{totalProductAmount}</p>
          </div>
          <hr />
          <div className="subTotal">
            <p>Delivery Fee</p>
            <p>${totalProductAmount ? delivery : 0}</p>
          </div>
          <hr />
          <div className="subTotal">
            <p>Tax</p>
            <p>${totalProductAmount ? tax : 0}</p>
          </div>
          <hr />
          <div className="subTotal">
            <h2>Total</h2>
            <p>{totalProductAmount ? totalAmount : 0}</p>
          </div>
          <hr />
          <button onClick={handleButtonEvent}>
            Proceed to checkout
          </button>
        </div>
        <div className="card-bottom-right">
          <p>If you have a promo code, Enter it here</p>
          <div>
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
