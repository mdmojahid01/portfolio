import React from "react";
import "./skills.scss";
import InnerSkillDiv from "./innerSkillDiv";
import { TiHtml5, TiCss3 } from "react-icons/ti";
import { SiJavascript } from "react-icons/si";

function skills() {
  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>
      <div className="skill-div">
        <InnerSkillDiv
          icon={<TiHtml5 style={{ color: "orangered" }} />}
          name="HTML5"
        />
        <InnerSkillDiv
          icon={<TiCss3 style={{ color: "blue" }} />}
          name="CSS3"
        />
        <InnerSkillDiv
          icon={<SiJavascript style={{ color: "yellow" }} />}
          name="JavaScript"
        />
        <InnerSkillDiv icon={<TiHtml5 />} name="HTML5" />
        <InnerSkillDiv icon={<TiHtml5 />} name="HTML5" />
        <InnerSkillDiv icon={<TiHtml5 />} name="HTML5" />
        <InnerSkillDiv icon={<TiHtml5 />} name="HTML5" />
        <InnerSkillDiv icon={<TiHtml5 />} name="HTML5" />
        <InnerSkillDiv icon={<TiHtml5 />} name="HTML5" />
      </div>
    </div>
  );
}

export default skills;
