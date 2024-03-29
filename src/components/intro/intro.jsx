import React from "react";
import Typewriter from "typewriter-effect";
import Topbar from "../topbar/topbar";
import "./intro.scss";
import { HiOutlineMail } from "react-icons/hi";
import { IoSchoolSharp } from "react-icons/io5";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import { CONNECT_ME } from "../../constants";

function intro() {
  return (
    <div className="first-div" id="intro">
      <Topbar></Topbar>
      <div className="first-div-container-center">
        <div className="first-div-container">
          <div className="intro">
            <div className="left">
              <div className="introduction">
                <h1>
                  Front-End React <br /> Developer.
                  <span className="wave">👋</span>
                </h1>
                <p>
                  Hi, I'm Mohammad Mojahid. A passionate Front-end React <br />
                  Developer based in India.
                </p>
                <div className="social_handle">
                  <a
                    href={`mailto:${CONNECT_ME.EMAIL_ID}`}
                    target={"_blank"}
                    rel="noreferrer"
                    className="email"
                  >
                    <HiOutlineMail />
                  </a>
                  <a
                    href={CONNECT_ME.LINKEDIN_PROFILE}
                    target={"_blank"}
                    className="linkedin"
                    rel="noreferrer"
                  >
                    <AiOutlineLinkedin />
                  </a>
                  <a
                    href={CONNECT_ME.GITHUB_PROFILE}
                    target={"_blank"}
                    rel="noreferrer"
                    className="github"
                  >
                    <AiOutlineGithub />
                  </a>
                </div>
              </div>
            </div>
            {/* ---------------------------------------------------------------- */}
            <div className="right">
              <div className="img-parent">
                <div
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "/images/my_image.png"
                    })`,
                  }}
                  className="image"
                ></div>
              </div>
            </div>{" "}
          </div>
          {/* --------------------------------------------------------------- */}
          <div className="education">
            <p>highest qualification</p>
            <div className="edu-content">
              <div className="edu-div">
                <IoSchoolSharp />
                <div className="edu-name">
                  <h1>
                    Bachelor degree in Computer Science Engineering{" "}
                    <span className="dn">|</span>{" "}
                    <br style={{ display: "none" }} id="break-year" />
                    (2019-2023)
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default intro;
