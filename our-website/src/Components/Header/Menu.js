import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

function Menu(props) {

if(props.show === 1)
{
    return (
        <div className="menu">
          <div className="padding" />
    
    
          <div className="menuContainer">
            <Link to="/checkout">
              <button className="btn menuItem">
                <h3 className="menuItemText">Home</h3>
              </button>
            </Link>
    
            <Link to="/checkout">
              <button className="btn menuItem">
                <h3 className="menuItemText">Family Pack</h3>
              </button>
            </Link>
    
            <Link to="/checkout">
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
    
          </div>
        </div>
      );
}
else return( 
    <div></div>
)

  
}

export default Menu;
