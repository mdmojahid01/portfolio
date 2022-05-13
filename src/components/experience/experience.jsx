import React from "react";
import "./experience.scss";
import InnerContainer from "./innerContainer";
function experience() {
  return (
    <div className="experience" id="experience">
      <h1>Experience</h1>
      <div className="experience-div">
        <div className="left">
          <InnerContainer />
          <InnerContainer />
          <InnerContainer />
          <InnerContainer />
        </div>
        <div className="right">
          <img
            src={process.env.PUBLIC_URL + "/images/experience.svg"}
            alt="Experience"
          />
        </div>
      </div>
    </div>
  );
}

export default experience;
