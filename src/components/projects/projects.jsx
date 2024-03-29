import React from "react";
import "./projects.scss";
import InnerProjectDiv from "./innerProjectDiv";
import { PROJECTS } from "../../constants";

function projects() {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div>
        {/* Each row having only 4 conatiner of innerprojectdiv */}
        {/* row 1 start */}
        <div>
          {/* Only 4 project in 1st row, index 0 to 3 */}
          {Object.entries(PROJECTS)
            .filter(([key, value], index) => {
              return index <= 3;
            })
            .map(([key, value], index) => {
              return (
                <div key={key}>
                  <InnerProjectDiv
                    image={value.image}
                    projectName={value.projectName}
                    description={value.description}
                    href={value.href}
                    usedTech={value.usedTech}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default projects;
