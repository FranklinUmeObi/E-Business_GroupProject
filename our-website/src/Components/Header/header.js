import React, { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Menu from      './Menu'
import "./header.css";
import logo from "../../Assets/Logo/logo.png";

function Header() {

  const [state, setState] = useState({
      show: 0
  });

  function handleMenuPress() {
      let x = state.show
      let y
      if (x ===0) {
          y = 1
      } else {
          y = 0
      }
    setState({show:y})
  }

  return (
    <div>
    <div className="header">
      <div className="leftContainer">
        <button className="btn menuButton" onClick={handleMenuPress}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <input type="text" className="form-control" placeholder="Search..." />
      </div>

      <div className="logoContainer">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="rightContainer">
        <Link to="/checkout">
          <button className="btn menuButton cartButton">
            <h3 className="cartPrice">
              $0.00{" "}
              <FontAwesomeIcon className="cartIcon" icon={faShoppingCart} />
            </h3>
          </button>
        </Link>
      </div>
    </div>

    <Menu show={state.show}/>

   </div>
  );
}

export default Header;
