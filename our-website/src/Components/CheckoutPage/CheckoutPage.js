import React from "react";
import "./CheckoutPage.css";
import CheckoutCard from "./CheckoutCard";


import TextField from '@material-ui/core/TextField';

function CheckoutPage(props) {
  const items = props.cart.cartItems.map((product, index) => (
    <CheckoutCard
    key={index}
      name={product.name}
      price={product.price}
      image={product.img}
      removeItemFromCart={props.removeItemFromCart}
    />
  ));


function sendAlert() {
  alert("Payment was made using saved Card Details");
}


  return (
    <div className="page" id="about">
      <div className="pageContainerChe">
        <h1>Checkout</h1>
        <div className="actualContainer">
          <div className="items">
            {items}
          </div>

          <div className="payment">
              <div className="inputLine">
                <TextField id="standard-basic" label="First Name"  className="inputBox"/>
                <TextField id="standard-basic" label="Last Name"  className="inputBox"/>
              </div>
              <div className="inputLine">
                <TextField id="standard-basic" label="Address Line 1"  className="inputBox"/>
                <TextField id="standard-basic" label="Address Line 2"  className="inputBox"/>
              </div>
              <div className="inputLine">
                <TextField id="standard-basic" label="PostCode"  className="inputBox"/>
                <TextField id="standard-basic" label="Country"  className="inputBox"/>
              </div>

              <div className="outputText">
                <h2>Complete Payment</h2>
                <p className="margBot">Total (incl. vat) €{props.cart.price}</p>
                <button className="btn menuButton cartButton" onClick={sendAlert}>
                  <h3 className="cartPrice">Place Order</h3>
                </button>
              </div>


          </div>
        </div>
        <br/>
        <br/>
        <br/>
      </div>
     
    </div>
    
  );
}

export default CheckoutPage;
