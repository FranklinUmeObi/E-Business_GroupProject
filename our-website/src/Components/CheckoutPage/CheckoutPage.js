import React from 'react'
import "./CheckoutPage.css";
import CheckoutCard from      './CheckoutCard'
function CheckoutPage(props) {

    const items = props.cart.cartItems.map((product) => (
    <li>{product.name}</li>
      ));

    return (
        <div className="page" id="about">
             <div className="pageContainer" >
                <h1>Checkout</h1>
                <div className="actualContainer">

                  <div className="items">
                  <CheckoutCard/>
                  <CheckoutCard/>
                  <CheckoutCard/>
                  <CheckoutCard/>
                  <CheckoutCard/>
                  <CheckoutCard/>
                  <CheckoutCard/>
                  <CheckoutCard/>
                  <CheckoutCard/>
                  <CheckoutCard/>
                  </div>

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
    )
}

export default CheckoutPage
