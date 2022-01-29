import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="perdect__header-main">
      <div className="perdect__header-container">
        <div className="perdect__header-logo-container">
          <img src="../Images/logo.png" alt="" />
        </div>
        <ul className="perdect__header-navigation">
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Tutorials</a>
          </li>
        </ul>
      </div>
      <div className="perdect__header-button">
        <button className="perdect__header-button-register">Register</button>
        <button className="perdect__header-button-login">Login</button>
      </div>
    </div>
  );
};

export default Header;
