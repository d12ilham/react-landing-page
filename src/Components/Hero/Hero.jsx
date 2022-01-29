import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="perdect__hero-main">
      <div className="perdect__hero-container-left">
        <h1>Creative Design & Development</h1>
        <h4 className="custom-sizing">
          UI/UX design, web & mobile app development, and cloud solutions.
        </h4>
        <div>
          <button className="perdect__hero-button-1">Buy Now</button>
          <button className="perdect__hero-button-2">Sale for $1000</button>
        </div>
        <p>Or Renew, or Add Seats</p>
      </div>
      <div className="perdect__hero-container-right">
        <img src="./Images/Hero.png" alt="" className="hero-image" />
      </div>
    </div>
  );
};

export default Hero;
