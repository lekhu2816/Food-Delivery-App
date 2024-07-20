import React from "react";
import "./footer.css";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={logo} alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam in
            tempora unde neque necessitatibus ea esse. Totam soluta quisquam
            facere sed, amet corrupti aperiam quas quam recusandae eveniet sunt.
          </p>
          <div className="socialMedia-icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-whatsapp"></i>
          </div>
        </div>

        <div className="footer-middle">
          <h1>Company</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Privacy policy</li>
            <li>Delivery</li>
          </ul>
        </div>

        <div className="footer-right">
          <h1>Get in touch</h1>

          <p>
            <i className="fa-solid fa-phone  "></i> +91-9823456735
          </p>
          <p>
            <i className="fa-regular fa-envelope"></i> lsfoodservice@gamil.com{" "}
          </p>
        </div>
      </div>
      <hr />
      <p className="copyright">Copyright 2024 © lsfoodservice.com - All rights preserved</p>
    </div>
  );
};

export default Footer;
