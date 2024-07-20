import React, { useContext } from "react";
import './displayfood.css'
import { StoreContext } from "../../context/storecontext";
import FoodItem from "../foodItem/foodItem";


const Displayfood = ({ category }) => {
  const { food_Item } = useContext(StoreContext);
  
  return (
    <div className="display-food" id="display-food">
      <h1>Top food near you</h1>
      <div className="display-food-list">
        {food_Item.map((item, index) => {
            if(category=="All"||category==item.category){
             return <FoodItem
             key={index}
             id={item._id}
             name={item.name}
             image={item.image}
             description={item.description}
             price={item.price}

           />
            }

           
        })}
      </div>
    </div>
  );
};

export default Displayfood;
