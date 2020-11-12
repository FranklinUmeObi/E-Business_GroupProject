import React from "react";
import "./CheckoutPage.css";
import CheckoutCard from "./CheckoutCard";
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

  return (
    <div className="page" id="about">
      <div className="pageContainer">
        <h1>Checkout</h1>
        <div className="actualContainer">
          <div className="items">{items}</div>

          <div className="payment">
            <h2>Address</h2>
            <h2>Address</h2>
            <h2>Address</h2>
            <h2>Address</h2>
            <h2>Address</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
