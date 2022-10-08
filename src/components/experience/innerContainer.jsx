import React from "react";

function innerContainer(props) {
  return (
    <div className="innerExperience">
      <div className="companyLogodiv">
        <div className="logo">
          <img src={props.image} alt="logo" />
        </div>
        <div className="companyName">
          <h3>{props.companyName}</h3>
          <p className="experienceInterval">{props.experience}</p>
        </div>
      </div>
      {/* ----------- */}
      <div className="expDetails">
        <h2>{props.designation}</h2>
        <p>{props.description}</p>

        <span>Responsibilites:</span>

        <ul>
          <li>{props.bp1}</li>
          <li>{props.bp2}</li>
          <li>{props.bp3}</li>
          <li>{props.bp4}</li>
          <li>{props.bp5}</li>
        </ul>
      </div>
    </div>
  );
}

export default innerContainer;
