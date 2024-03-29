import React from "react";
import "./experience.scss";
import InnerContainer from "./innerContainer";
import { EXPERIENCE_DATA } from "../../constants";

function experience() {
  return (
    <div className="experience" id="experience">
      <h1>Experience</h1>
      <div className="experience-div">
        <div className="left">
          {Object.entries(EXPERIENCE_DATA).map(([key, value], index) => {
            return (
              <InnerContainer
                key={key}
                image={value.image}
                companyName={value.companyName}
                experience={value.experience}
                designation={value.designation}
                description={value.description}
                responsibility={value.responsibility}
              />
            );
          })}
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
