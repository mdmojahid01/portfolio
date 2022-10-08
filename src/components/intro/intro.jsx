import React from "react";
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

function intro() {
  return (
    <div className="first-div" id="intro">
      <Topbar></Topbar>

      <div className="intro">
        <div className="left">
          <div className="image">
            <img
              src={process.env.PUBLIC_URL + "/images/my_image.jpeg"}
              alt="profile_pic"
            />
          </div>
          <div className="designation">
            <h1 className="name">Mohammad Mojahid</h1>
            <h2 className="desig">Software Engineer</h2>
          </div>
          <div className="social_handle">
            <a
              href="mailto:mojahidmd92@gmail.com"
              target={"_blank"}
              rel="noreferrer"
              className="email"
            >
              <HiOutlineMail />
            </a>
            <a
              href="https://www.linkedin.com/in/mdmojahid01/"
              target={"_blank"}
              className="linkedin"
              rel="noreferrer"
            >
              <AiOutlineLinkedin />
            </a>
            <a
              href="https://github.com/mdmojahid01"
              target={"_blank"}
              rel="noreferrer"
              className="github"
            >
              <AiOutlineGithub />
            </a>
            <a
              href="https://www.facebook.com/mdmojahid01/"
              target={"_blank"}
              rel="noreferrer"
              className="facebook"
            >
              <AiOutlineFacebook />
            </a>
            <a
              href="https://www.instagram.com/mdmojahid01/"
              target={"_blank"}
              rel="noreferrer"
              className="instagram"
            >
              <AiOutlineInstagram />
            </a>
          </div>
        </div>
        <div className="right">
          <div className="introduction">
            <h1>Introduction</h1>
            <p>
              Hi, My name is Mohammad Mojahid.
              <br />
              Currently, I'm studying in Computer Science Engineering at Rayat
              Institute of Engineering and Information Technology. I'm 7
              <sup>th</sup> semester student. I'm from Bihar and I have done my
              10
              <sup>th</sup> and 10+2<sup>th</sup> from Bihar School Examination
              Board,Patna.
              <br />
              <br />I have a great interest in Software Development. Currently,
              I am working to enhance my Web Development Skills ( like HTML5,
              CSS3, bootstrap4, JavaScript and React Js ). In future, I would
              like to work in MERN Stack Technology. Now, I am looking forward
              to Placements. I want to work for an organization where I can
              enhance my technical knowledge and get experience by achieving the
              organization goal.
            </p>
          </div>
          <div className="education">
            <h1>Education</h1>
            <div className="edu-content">
              <div className="edu-div">
                <IoSchoolSharp />
                <div className="edu-name">
                  <h3>B.tech 2019-present</h3>
                  <p>
                    RAYAT INSTITUTE OF ENGINEERING AND INFORMATION TECHNOLOGY,
                    PUNJAB
                  </p>
                </div>
              </div>
              <div className="edu-div">
                <IoSchoolSharp />
                <div className="edu-name">
                  <h3>
                    Higher Secondary Education (10+2)<sup>th</sup>
                  </h3>
                  <p>DR. JAGANNATH MISHRA COLLEGE, MUZAFFARPUR, BIHAR</p>
                </div>
              </div>{" "}
              <div className="edu-div">
                <IoSchoolSharp />
                <div className="edu-name">
                  <h3>
                    Secondary Education (10)<sup>th</sup>
                  </h3>
                  <p>SHRI RAM SEVAK SAHU HIGH SCHOOL, SARFUDDINPUR </p>
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
