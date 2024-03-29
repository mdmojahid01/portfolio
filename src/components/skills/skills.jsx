import React from "react";
import "./skills.scss";
import InnerSkillDiv from "./innerSkillDiv";
import { SKILLS } from "../../constants";

function skills() {
  return (
    <div className="skills" id="skills">
      <h1>Technical Skills</h1>
      <div className="skill-div">
        <div className="left">
          <img
            src={process.env.PUBLIC_URL + "/images/skill.svg"}
            alt="Skill images"
          />
        </div>
        <div className="right">
          {Object.entries(SKILLS).map(([key, value]) => {
            return (
              <InnerSkillDiv key={key} icon={value.icon} name={value.name} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default skills;
