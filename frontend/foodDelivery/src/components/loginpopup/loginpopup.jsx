import React, {useContext, useRef, useState } from "react";
import axios from "axios";
import "./loginpopup.css";
import { StoreContext } from "../../context/storecontext";
const Loginpopup = ({setShowLogin}) => {
  const{token ,setToken}=useContext(StoreContext)
  const [data,setData]=useState({
    name:"",
    email:"",
    password:""
  });
  const [currState, setCurrState] = useState("sign in");
 

  const onChangeHandler=(event)=>{
   const name=event.target.name;
   const value=event.target.value;
   setData((prev)=>({...prev,[name]:value})) 
  }
  const onLogin=async(event)=>{
    event.preventDefault();
    console.log(data);
     let url=""
     if(currState =="sign in"){
         url="http://localhost:5001/api/user/register"
     }
     else{
       url="http://localhost:5001/api/user/login";
    }
     const response=await axios.post(url,data);
    
     
     if(response.data.success){
      setToken(response.data.token);
      localStorage.setItem("token",response.data.token);
      console.log(token)
      setShowLogin(false);
     }
     else{
      alert(response.data.message)
     }

  
    
  }
  return (
    <div className="loginpopup">
      <form onSubmit={onLogin} className="loginpopup-container">
        <div className="loginpopup-title">
          <h1>{currState}</h1>
          <i onClick={()=>{setShowLogin(false)}} className="fa-solid fa-xmark"></i>
        </div>
        <div className="loginpopup-input">
          {currState == "sign in" ? (
            <input type="text" name="name" onChange={onChangeHandler} value={data.name}placeholder="Your Name" required  />
          ) : (
            <></>
          )}
          <input type="email" name="email" onChange={onChangeHandler} value={data.email}  placeholder="Your Email" required />
          <input type="password" name="password" value={data.password} onChange={onChangeHandler}  placeholder="Password" required  />
        </div>

        <button type="submit"> {currState == "sign in" ? "Create account" : "login"}</button>
        <div className="loginpopup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree the terms of use & privacy policy</p>
        </div>
        {currState == "sign in" ? (
          <p>
            Alredy have account ? <span onClick={()=>setCurrState("login")}>Login here</span>
          </p>
        ) : (
          <p>
            Create a new account ? <span onClick={()=>setCurrState("sign in")}>Click here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Loginpopup;
