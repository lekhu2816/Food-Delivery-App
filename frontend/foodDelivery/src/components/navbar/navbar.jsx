import React, { useContext, useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import{Link, useNavigate} from 'react-router-dom'
import { StoreContext } from "../../context/storecontext";
import userProfile from "../../assets/userProfile.png";
const Navbar = ({setShowLogin}) => {
 const navigate= useNavigate();
  const{getTotalCartAmount,token,setToken}=useContext(StoreContext)
  const [menu, setMenu] = useState("home");
  const [input, setinput] = useState(false);
  const logout=()=>{
    localStorage.removeItem("token")
    setToken("")
  }
  return (
    <div className="navbar" id="navbar">
      <Link to={'/'}><img src={logo} alt="logo" className="nav-logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/'
          onClick={() => {
            setMenu("home");
          }}
          className={`${menu === "home" ? "active" : ""}`}
        >
          Home
        </Link>
       
        <a href="#explore-menu"
          onClick={() => {
            setMenu("menu");
          }}
          className={`${menu === "menu" ? "active" : ""}`}
        >
          menu
        </a>
      
       
        <a href="#appdownload"
          onClick={() => {
            setMenu("mobile");
          }}
          className={`${menu === "mobile" ? "active" : ""}`}
        >
          mobile-app
        </a>
        <a href="#footer"
          onClick={() => {
            setMenu("contact");
          }}
          className={`${menu === "contact" ? "active" : ""}`}
        >
          Contact us
        </a>
      </ul>
      <div className="nav-right">
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            className={`${input ? "selectInput" : "notSelectInput"}`}
          />
          <i
            onClick={() => {
              setinput((prev) => {
                return !prev;
              });
            }}
            className={`fa-solid fa-magnifying-glass`}
          ></i>
        </div>
         <div className="cart">
          <Link to={'/cart'}>
          <i className="fa-solid fa-bag-shopping"></i>
          </Link>
          {getTotalCartAmount()?<div></div>:<></>}
         
         </div>
         {
         
           (!token)?<button onClick={()=>{setShowLogin(prev=>!prev)}} className="btn">sign in</button>:<div className="nav-profile">
            <img src={userProfile} alt="userProfile"/>
            <ul className="nav-profile-dropdown">
              <li onClick={()=>{navigate('/user-order')}}><i className="fa-solid fa-basket-shopping"></i> <p>Orders</p></li>
              <li onClick={logout}><i className="fa-solid fa-arrow-right-from-bracket"></i><p>Logout</p></li>
              <li><i className="fa-solid fa-gear"></i><p>Setting</p></li>
            </ul>
           </div>
         }
        
      </div>
    </div>
  );
};

export default Navbar;
