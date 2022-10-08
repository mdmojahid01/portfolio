import React from "react";
import "./experience.scss";
import InnerContainer from "./innerContainer";
import codermaniaa from "../../images/company logo/codermaniaa.png";
function experience() {
  return (
    <div className="experience" id="experience">
      <h1>Experience</h1>
      <div className="experience-div">
        <div className="left">
          <InnerContainer
            image={codermaniaa}
            companyName="Codermaniaa Labs Pvt Ltd"
            experience="Jan 2022 - Sept 2022"
            designation="Frontend developer"
            description="I worked on a project as a React JS Intern in this organization. Mostly my task was to develop UI screen in React JS using
functional component feature."
            bp1="Converting the designs into working site"
            bp2="Cleaning existing pages and converting to newer designs"
            bp3="Constantly delivering and receiving the feedback"
            bp4="Fixing any problems in previously written code"
            bp5="Making the required changes suggested by client"
          />
          {/* <InnerContainer />
          <InnerContainer />
          <InnerContainer /> */}
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
