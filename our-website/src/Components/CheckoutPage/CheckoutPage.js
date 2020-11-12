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
      <div className="pageContainer">
        <h1>Checkout</h1>
        <div className="actualContainer">
          <div className="items">
            {items}
          </div>

          <div className="payment">
              <div className="inputLine">
                <TextField id="filled-basic" label="First Name" variant="filled" className="inputBox"/>
                <TextField id="filled-basic" label="Last Name" variant="filled" className="inputBox"/>
              </div>
              <div className="inputLine">
                <TextField id="filled-basic" label="Address Line 1" variant="filled" className="inputBox"/>
                <TextField id="filled-basic" label="Address Line 2" variant="filled" className="inputBox"/>
              </div>
              <div className="inputLine">
                <TextField id="filled-basic" label="PostCode" variant="filled" className="inputBox"/>
                <TextField id="filled-basic" label="Country" variant="filled" className="inputBox"/>
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
      </div>
    </div>
  );
}

export default CheckoutPage;
