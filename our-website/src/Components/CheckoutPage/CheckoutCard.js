import React from 'react'
import "./CheckoutCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function CheckoutCard(props) {
    return (
        <div className="check">
            <img className="checkImg" src={require(`../../Assets/ProductImages/${props.image}`)}  alt="Product"/>
            
            <div className="checkText">
                <h2 className="checkTit">{props.name}</h2>
                <h3 className="checkPri">{props.price}</h3>
            </div>

            <div className="checkExtras">
                <button className="btn menuButton buttonClose" onClick={() => props.removeItemFromCart(props.name, props.price)}>
                <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
            
            
        </div>
    )
}

export default CheckoutCard
