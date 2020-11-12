import React from 'react'
import "./CheckoutCard.css";

function CheckoutCard() {
    return (
        <div className="check">
            <img className="checkImg" src={require("../../Assets/ProductImages/1.png")}  alt="Product"/>
            <div className="checkText">
                <h2 className="checkTit">Red Reindeer from samoa</h2>
                <h3 className="checkPri">10.65</h3>
            </div>
            <div className="checkExtras">
                <button>hi</button>
            </div>
            
            
        </div>
    )
}

export default CheckoutCard
