import React from "react";
import "./topbar.scss";

function topbar() {
  return (
    <div className="topbar">
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
              {/* adding later download iconfor  my resume */}
            </ul>
          </div>
        </div>
        {/* ---------------- toggle button ------------ */}
      </div>
    </div>
  );
}

export default topbar;
