import React, { useContext } from "react";
import "./foodItem.css";
import { StoreContext } from "../../context/storecontext";

const FoodItem = ({ id, name, description, price, image }) => {
  const { cartItems, addTocart,removeFromCart}=useContext(StoreContext);
  return (
    <div className="foodItem">
      <div className="image-Container">
        <img src={`http://localhost:5001/images/${image}`} alt="foodImages" />

        {!cartItems[id] ? (
          <i
            onClick={() =>addTocart(id)}
            className="fa-solid fa-plus add"
          ></i>
        ) : (
          <div className="setCounter">
            <i
              onClick={() => removeFromCart(id)}
              className="fa-solid fa-minus substraction "
            ></i>
            <p>{cartItems[id]}</p>
            <i
              onClick={() => addTocart(id)}
              className="fa-solid fa-plus addition"
            ></i>
          </div>
        )}
      </div>
      <div className="foodItem-info">
        <p>{name}</p>
        <div className="rating">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>
      </div>
      <p className="foodItem-description">{description}</p>
      <p className="foodItem-price">${price}</p>
    </div>
  );
};

export default FoodItem;
