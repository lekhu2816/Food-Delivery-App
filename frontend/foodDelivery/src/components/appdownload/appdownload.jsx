import React from "react";
import "./appdownload.css";
import playstore from "../../assets/playstore.png";
import apple from "../../assets/apple.webp";

const Appdownload = () => {
  return (
    <div className="app-download" id="appdownload">
      <h1>For Better Experience download Our App</h1>
      <div className="app-info">
        <div className="getapp">
          <img src={playstore} alt="" />
          <div className="content">
            <p>GET IT ON</p>
            <h2>Google Play</h2>
          </div>
        </div>
        <div className="getapp">
          <img src={apple} alt="" />
          <div className="content">
            <p>GET IT ON</p>
            <h2>Apple Store</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appdownload;
