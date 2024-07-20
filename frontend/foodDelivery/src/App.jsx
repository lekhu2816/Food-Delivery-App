import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Cart from "./pages/cart/cart";
import Placeorder from "./pages/placeOrder/placeOrder";
import Footer from "./components/footer/footer";
import Loginpopup from "./components/loginpopup/loginpopup";
import Payment from "./components/payment/payment";
import ConfirmOrder from "./components/confirmOrder/confirmOrder";
import UserOrder from "./components/userOrder/userOrder";
import { useState } from "react";
function App() {
const[showLogin,setShowLogin]=useState(false);
  return (
    <>
    {showLogin?<Loginpopup setShowLogin={setShowLogin}/>:<></>}
    <Navbar  setShowLogin={setShowLogin}/>
    <div className="app">
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/cart" element={<Cart></Cart>} />
        <Route path="/order" element={<Placeorder></Placeorder>} />
        <Route path="/payment" element={<Payment></Payment>} />
        <Route path="/confirm-order" element={<ConfirmOrder></ConfirmOrder>}/>
        <Route path="/user-order" element={<UserOrder></UserOrder>}/>
      </Routes>
     </div>
    <Footer></Footer>
    </>
  );
}

export default App;
