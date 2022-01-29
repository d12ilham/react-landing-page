import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="perdect__services-main-div">
      <div className="perdect__services-title-container">
        <h3>Built for the biggest imaginations</h3>
        <p>
          A short animation, a slick interaction, or an extensive multi-screen
          app. No matter what you’re doing, you can do it with Principo.{" "}
        </p>
      </div>
      <div className="perdect__services-grid">
        <div className="perdect__services-item">
          <div className="perdect__services-item-top">
            <img src="../Images/Group 6697.svg" alt="" />
            <h4>Design</h4>
          </div>
          <p>
            Always think it’s hard to mack animation? Principlo timeline makes
            it quick work to illustrate the perfect bounce, ease,and pop.
          </p>
        </div>
        <div className="perdect__services-item">
          <div className="perdect__services-item-top">
            <img src="../Images/Group 47.svg" alt="" />
            <h4>Development</h4>
          </div>
          <p>
            Always think it’s hard to mack animation? Principlo timeline makes
            it quick work to illustrate the perfect bounce, ease,and pop.
          </p>
        </div>
        <div className="perdect__services-item">
          <div className="perdect__services-item-top">
            <img src="../Images/Group 6698.svg" alt="" />
            <h4>Multiple Screens</h4>
          </div>
          <p>
            It’s breeze to design the flow of a multi-screen app; and when
            you’re done you’ll have a bird’s- eye view of all your screens.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
