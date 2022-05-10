import React from "react";
import "./skills.scss";

function innerSkillDiv(props) {
  return (
    <div className="inner-skill-div">
      {props.icon}
      <h4>{props.name}</h4>
    </div>
  );
}

export default innerSkillDiv;
