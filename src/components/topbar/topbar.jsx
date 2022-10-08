import React from "react";
import "./topbar.scss";
import resume from "../../images/resume/mojahid_cv.pdf";
import { HiOutlineDownload } from "react-icons/hi";

function topbar() {
  document.addEventListener("scroll", function () {
    const sticky = document.getElementById("sticky");
    sticky.classList.toggle("sticky", window.scrollY > 10);
  });
  // --------------------JSX------------------------------------------
  return (
    <div className="topbar" id="sticky">
      <div className="wrapper">
        <div className="left">
          <div className="logo">
            <a href="#intro">Mohammad Mojahid</a>
          </div>
        </div>
        <div className="right">
          <div className="menus">
            <ul>
              <li>
                <a href="#intro">Home</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#experience">Experiences</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact me</a>
              </li>
              {/* adding download iconfor  my resume */}
              <li className="resume-btn">
                <a href={resume} download="mojahid_cv.pdf">
                  <span> Resume</span>
                  <HiOutlineDownload style={{ fontSize: "16px" }} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* ---------------- toggle button ------------ */}
      </div>
    </div>
  );
}

export default topbar;
