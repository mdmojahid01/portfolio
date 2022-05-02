import React from "react";
import "./skills.scss";

function innerSkillDiv(props) {
  return (
    <div className="inner-skill-div">
      {props.icon}
      <h1>{props.name}</h1>
    </div>
  );
}

export default innerSkillDiv;
