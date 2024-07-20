import { createContext, useEffect, useState } from "react";
import { food_Item } from "../assets/assets";
import axios from "axios";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
const [data,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    pincode:"",
    country:"",
    phone:""
  })
const[orderId,setOrderId]=useState("");
const[cartItems,setCartItems]=useState({});
const[token,setToken]=useState("");
const[food_Item ,setFoodItem]=useState([]);
const fetchFoodItem=async()=>{
  const url="http://localhost:5001/api/food/list"
  const response=await axios.get(url);
  setFoodItem(response.data.data)
}
const addTocart=async(itemId)=>{
 
if(!cartItems[itemId]){
  setCartItems((prev)=>({...prev,[itemId]:1}));
 
}
else{
  setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
  
}
if(token){
   const url="http://localhost:5001/api/cart/add";
   const response=await axios.post(url,{itemId},{headers:{token}});
   
}
}

const removeFromCart=async(itemId)=>{
  setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  if(token){
    const url="http://localhost:5001/api/cart/remove";
    const response=await axios.post(url,{itemId},{headers:{token}});
   
  }
}

const getTotalCartAmount=()=>{
  let totalAmount=0;
  for(const item in cartItems){
    const iteminfo=food_Item.find((product)=>product._id==item)
    totalAmount=totalAmount+ iteminfo.price*cartItems[item];
 
  }
  return totalAmount;
}
const loadCartData=async(token)=>{
     const url="http://localhost:5001/api/cart/get";
     const response=await axios.post(url,{},{headers:{token}});
     setCartItems(response.data.data)
     
}

useEffect(()=>{
  async function loadData(){
    await fetchFoodItem();
    if(localStorage.getItem("token")){
      setToken(localStorage.getItem("token"));
      await loadCartData(localStorage.getItem("token"));
     }
  }
  loadData();

},[])


  const contextValue = {
    food_Item,
    cartItems,
    setCartItems,
    addTocart,
    removeFromCart,
    getTotalCartAmount,
    token,
    setToken,
    data,
    setData,
    orderId,
    setOrderId

  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
