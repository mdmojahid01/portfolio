import React from "react";
import "./skills.scss";
import InnerSkillDiv from "./innerSkillDiv";
import { TiHtml5, TiCss3 } from "react-icons/ti";
import { SiJavascript, SiMongodb, SiRedux, SiSass } from "react-icons/si";
import { FaReact, FaGithub } from "react-icons/fa";
import { IoLogoNodejs, IoLogoPython } from "react-icons/io";
import { TbApi } from "react-icons/tb";

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
          <InnerSkillDiv
            icon={<TiHtml5 style={{ color: "orangered" }} />}
            name="HTML5"
          />
          <InnerSkillDiv
            icon={<TiCss3 style={{ color: "blue" }} />}
            name="CSS3"
          />
          <InnerSkillDiv
            icon={<SiSass style={{ color: "#cd6799" }} />}
            name="Sass"
          />
          <InnerSkillDiv
            icon={<SiJavascript style={{ color: "yellow" }} />}
            name="JavaScript"
          />
          <InnerSkillDiv
            icon={<FaReact style={{ color: "skyblue" }} />}
            name="React JS"
          />
          <InnerSkillDiv
            icon={<SiRedux style={{ color: "skyblue" }} />}
            name="Redux"
          />
          <InnerSkillDiv
            icon={<TbApi style={{ color: "black" }} />}
            name="Integration"
            title="API Integration"
          />
          <InnerSkillDiv
            icon={<FaGithub style={{ color: "black" }} />}
            name="Github"
          />

          {/* <InnerSkillDiv
            icon={<SiMongodb style={{ color: "lightgreen" }} />}
            name="MongoDB"
          />

          <InnerSkillDiv
            icon={<IoLogoNodejs style={{ color: "green" }} />}
            name="Node JS"
          />
          <InnerSkillDiv
            icon={<IoLogoPython style={{ color: "darkblue" }} />}
            name="Python"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default skills;
