import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,} from '@fortawesome/free-solid-svg-icons'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

import './header.css';

import logo from '../../Assets/Logo/logo.png'



function header() {

function handleMenuPress() {
    
}

    return (
        <div className="header">

            <div className="leftContainer">
                <button className="btn menuButton" onClick={handleMenuPress}>
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <input type="text" className="form-control" placeholder="Search..." />
            </div>


            <div className="logoContainer">
                <img src={logo} alt="Logo" className="logo"/>
            </div>


            <div className="rightContainer">
                <Link to="/checkout">
                    <button className="btn menuButton cartButton" onClick={handleMenuPress}>
                        <h3 className="cartPrice">$0.00  <FontAwesomeIcon className="cartIcon" icon={faShoppingCart} /></h3>
                       
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default header
