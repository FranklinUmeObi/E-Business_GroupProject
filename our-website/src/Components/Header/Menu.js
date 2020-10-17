import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Menu.css";

function Menu(props) {
  function handleClosePress() {
    props.setState({ show: 0 });
  }

  if (props.show === 1) {
    return (
      <div className="menu">
        <div className="padding" />

        <div className="menuContainer">
          <div className="closeContainer">
            <button className="btn menuButton" onClick={handleClosePress}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          <Link to="/">
            <button className="btn menuItem">
              <h3 className="menuItemText">Home</h3>
            </button>
          </Link>

          <Link to="/#packs">
            <button className="btn menuItem">
              <h3 className="menuItemText">Family Pack</h3>
            </button>
          </Link>

          <Link to="/#packs">
            <button className="btn menuItem">
              <h3 className="menuItemText">Corporate Pack</h3>
            </button>
          </Link>

          <Link to="/checkout">
            <button className="btn menuItem">
              <h3 className="menuItemText">About Us</h3>
            </button>
          </Link>

          <Link to="/checkout">
            <button className="btn menuItem">
              <h3 className="menuItemText">Customer Care</h3>
            </button>
          </Link>

          <Link to="/checkout">
            <button className="btn menuItem">
              <h3 className="menuItemText">Contact</h3>
            </button>
          </Link>
          <br/>
        </div>
      </div>
    );
  } else return <div></div>;
}

export default Menu;
