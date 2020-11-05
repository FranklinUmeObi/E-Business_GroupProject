import React from 'react'
import "./CheckoutPage.css";
function CheckoutPage(props) {

    const items = props.cart.cartItems.map((product) => (
    <li>{product.name}</li>
      ));

    return (
        <div className="page" id="about">
             <div className="pageContainer" >
                <h1>Checkout</h1>
                <ul>{items}</ul>
             </div>
        </div>
    )
}

export default CheckoutPage
