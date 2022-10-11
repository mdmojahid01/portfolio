import React from "react";
import { TiHtml5, TiCss3 } from "react-icons/ti";

function innerProjectDiv(props) {
  return (
    <a href={props.href} className="innerProjectDiv" target="blank">
      {/* <div> */}
      <div className="projectImage">
        <img src={props.image} alt="project_screenshot" />
      </div>
      <h1>{props.projectName}</h1>
      <p>{props.description}</p>
      <div className="hrDiv"></div>
      <div className="usedTechnology">
        {/* ========== maximum 6 tech add=========== */}
        {props.usedTech.map((item, index) => {
          return (
            <div title={item.title} key={index}>
              {item.icon}
            </div>
          );
        })}

        {/* <div title="html5">
          <TiHtml5 style={{ color: "orange" }} />
        </div>
        <div>
          <TiCss3 />
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div> */}
        {/* {props.usedTechnology.map((item, index) => {
          return (
            <div>
              <img src={item} alt="" />
            </div>
          );
        })} */}
      </div>
      {/* </div> */}
    </a>
  );
}

export default innerProjectDiv;
