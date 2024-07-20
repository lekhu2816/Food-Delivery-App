import React, { useContext, useState } from "react";
import "./payment.css";
import upi from "../../assets/upi.png";
import { StoreContext } from "../../context/storecontext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Payment = () => {
  const navigate=useNavigate();
  const { getTotalCartAmount, data,food_Item,token,cartItems,setOrderId} = useContext(StoreContext);
  const [paymentMode, setPaymentMode] = useState(null);
  const [upiPaymentMode, setUPIPaymentMode] = useState(null);
  const onClickHandler = (event) => {
    setPaymentMode(event.target.id);
  };
  const onUPIClickHandler = (event) => {
    setUPIPaymentMode(event.target.id);
  };

  const makePayment=async(event)=>{
    event.preventDefault();
    let orderItems=[];
    food_Item.map((item)=>{
     if(cartItems[item._id]>0){
      let itemInfo={...item,quantity:cartItems[item._id]}
      orderItems.push(itemInfo);
     }
    })
    let orderData={
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+2
    }
    
    const url="http://localhost:5001/api/order/payment"
    const response=await axios.post(url,orderData,{headers:{token}})
    setOrderId(response.data.orderId)

    navigate('/confirm-order')
  }

  return (
    <>
      <div className="payment">
        <div className="payment-left">
          <div className="heading">
            <h1>PAYMENT OPTIONS</h1>
          </div>
          <div className="payment-options">
            <div
              className={`${
                paymentMode == "UPI" ? "setBackground" : ""
              } upi display-flex`}
            >
              <input
                type="radio"
                name="paymentOption"
                id="UPI"
                onClick={onClickHandler}
              />
              <div className="upi-title">
                <div className="upi-text display-flex">
                  <img src={upi} alt="" />
                  <p className="title">UPI</p>
                </div>
                <div
                  className={
                    paymentMode === "UPI" ? "upi-options" : "displayNone"
                  }
                >
                  <div className="google-pay display-flex">
                    <input
                      type="radio"
                      name="upi"
                      id="GooglePay"
                      onClick={onUPIClickHandler}
                    />
                    <div>
                      <p className="title">GooglePay</p>
                      <form onSubmit={makePayment}
                        className={
                          upiPaymentMode == "GooglePay"
                            ? "upi-payment-mode"
                            : "displayNone"
                        }
                      >
                        <input
                          type="text"
                          placeholder="Enter Google Pay UPI id"
                          required
                        />
                        <button className="pay">
                          pay ${getTotalCartAmount() + 2}
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="phonepay display-flex">
                    <input
                      type="radio"
                      name="upi"
                      id="phonePay"
                      onClick={onUPIClickHandler}
                    />
                    <div>
                      <p className="title">PhonePay</p>
                      <form onSubmit={makePayment}
                        className={
                          upiPaymentMode == "phonePay"
                            ? "upi-payment-mode"
                            : "displayNone"
                        }
                      >
                        <input
                          type="text"
                          placeholder="Enter Phone Pay UPI id"
                          required
                        />
                        <button className="pay">
                          pay ${getTotalCartAmount() + 2}
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="paytm display-flex">
                    <input
                      type="radio"
                      name="upi"
                      id="paytm"
                      onClick={onUPIClickHandler}
                    />
                    <div>
                      <p className="title">Paytm</p>
                      <form onSubmit={makePayment}
                        className={
                          upiPaymentMode == "paytm"
                            ? "upi-payment-mode"
                            : "displayNone"
                        }
                      >
                        <input
                          type="text"
                          placeholder="Enter Paytm Pay UPI id"
                          required
                        />
                        <button className="pay">
                          pay ${getTotalCartAmount() + 2}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <p className="subheading">Pay by an UPI app</p>
              </div>
            </div>

            <hr />

            <div
              className={`${
                paymentMode == "card" ? "setBackground" : ""
              } card display-flex`}
            >
              <input
                type="radio"
                name="paymentOption"
                id="card"
                onClick={onClickHandler}
              />
              <div>
                <div className="card-title">
                  <p className="title">Credit/Debit/ATM Card</p>
                  <div>
                    <form onSubmit={makePayment}
                      className={
                        paymentMode == "card" ? "card-details" : "displayNone"
                      }
                    >
                      <input
                        type="number"
                        id="cardNumber"
                        name="cardNumber"
                        maxLength="12"
                        pattern="\d{12}"
                        placeholder="Enter card Number"
                        required
                      />
                      <div className="card-middle">
                        <input
                          type="month"
                          id="expiryDate"
                          name="expiryDate"
                          placeholder="Expiry Date"
                          required
                        />
                        <input
                          type="password"
                          id="cvv"
                          name="cvv"
                          maxLength="3"
                          pattern="\d{3}"
                          placeholder="CVV"
                          required
                        />
                      </div>
                      <button className="pay">
                        Pay ${getTotalCartAmount() + 2}
                      </button>
                    </form>

                    <p className="subheading">
                      {" "}
                      Add and secure cards as per RBI guidelines
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div
              className={`${
                paymentMode == "cod" ? "setBackground" : ""
              } cash display-flex`}
            >
              <input
                type="radio"
                name="paymentOption"
                id="cod"
                onClick={onClickHandler}
              />
              <div className="cod-title">
                <p className="title">Cash on Delivery</p>
                <div>
                  <div
                    className={
                      paymentMode == "cod" ? "cod-mode" : "displayNone"
                    }
                  > <form onSubmit={makePayment}>
                    <button className="pay" >
                      Pay via Cash ${getTotalCartAmount() + 2}
                    </button>
                    </form>
                  </div>
                  <p className="subheading">Pay via UPI or by Cash</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="payment-right">
          <h1>PRICE DETAILS</h1>
          <div className="price-summary">
            <p>Price</p> <p>${getTotalCartAmount()}</p>
          </div>
          <div className="price-summary">
            <p>Delivery Charge</p> <p>$2</p>
          </div>
          <div className="price-summary">
            <p>Payment mode</p> <p>{paymentMode}</p>
          </div>
          <hr />
          <div className="price-summary">
            <h2>Amount Payable</h2> <h2>${getTotalCartAmount() + 2}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
