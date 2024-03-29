import React from "react";

function innerContainer({
  image,
  companyName,
  experience,
  designation,
  description,
  responsibility,
}) {
  return (
    <div className="innerExperience">
      <div className="companyLogodiv">
        <div className="logo">
          <img src={image} alt="logo" />
        </div>
        <div className="companyName">
          <h3>{companyName}</h3>
          <p className="experienceInterval">{experience}</p>
        </div>
      </div>
      {/* ----------- */}
      <div className="expDetails">
        <h2>{designation}</h2>
        <p>{description}</p>
        <span>Responsibilites:</span>
        <ul>
          {Object.values(responsibility).map((point) => {
            return <li key={point}>{point}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default innerContainer;
