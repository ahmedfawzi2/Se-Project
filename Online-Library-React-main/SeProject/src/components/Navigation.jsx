import React from "react";
import { NavLink } from "react-router-dom";
import "../css/App.css";
function Navigation() {
  return (
    <div className="header">
      <div className="bg">
      <div className="brand">
        <div>
            <NavLink className="name" to="/">
               LIBRARY
            </NavLink>
        </div><br/>
        <div className="nav">
            
            <div className="header-right">
                <NavLink className="nav-link" to="/"> Home </NavLink>
                <NavLink className="nav-link" to="/Services">Services</NavLink>
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                <NavLink className="nav-link" to="/blog"> sign </NavLink>
                <NavLink className="nav-link" to="/log"> log </NavLink>
                <NavLink className="nav-link" to="/addcart"> add </NavLink>
            </div>
        </div>
     </div></div></div>
  );
}

export default Navigation;
