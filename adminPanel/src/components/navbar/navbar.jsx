import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import profileImg from "../../assets/profileImg.jpg";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
        <h3>Admin panel</h3>
      </div>
      <div className="profile">
        <img src={profileImg} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
