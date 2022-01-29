import React from "react";
import "./Device.css";

const Device = () => {
  return (
    <div className="perdect__device-main">
      <div className="perdect__device-main-row1">
        <div className="perdect__device-main-row1-content">
          <h3>Pick Up Where You Left Off</h3>
          <h6>
            Import your designs from your favorite design tools with a simple,
            one-click importer.
          </h6>
          <p>
            Your designs will appear in Principle, ready for you to breathe new
            life into them. And if you make changes, importing again will
            intelligently merge your work.
          </p>
        </div>
        <div className="perdect__device-main-row1-image">
          <img src="./Images/Group 63.svg" alt="" />
        </div>
      </div>
      <div className="perdect__device-main-row2">
        <div className="perdect__device-main-row2-image">
          <img src="./Images/Group 73.svg" alt="" />
        </div>

        <div className="perdect__device-main-row2-content">
          <h3>Design For Mobile, Web, and Desktop</h3>
          <h6>
            Choose a device preset or enter a custom Artboard size to design for
            your favorite platform.{" "}
          </h6>
          <p>
            Hover events and mouse wheel scrolling make it easy to make web and
            desktop prototypes that feel like the real thing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Device;
