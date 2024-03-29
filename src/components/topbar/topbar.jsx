import React, { useState } from "react";
import "./topbar.scss";
import { HiOutlineDownload } from "react-icons/hi";
import { AiOutlineAlignRight } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { CONNECT_ME } from "../../constants";

function Topbar() {
  const [activeToggle, setActiveToggle] = useState(false);
  document.addEventListener("scroll", function () {
    const sticky = document.getElementById("sticky");
    sticky.classList.toggle("sticky", window.scrollY > 10);
    if (sticky.classList[2] === "sticky") {
      setActiveToggle(!activeToggle);
    }
  });

  const togglebtn = () => {
    setActiveToggle(!activeToggle);
  };
  // --------------------JSX------------------------------------------
  return (
    <div
      className={`topbar ${activeToggle ? `active-topbar` : ``}`}
      id="sticky"
    >
      <div className="wrapper">
        <div className="left">
          <div className="logo">
            <a href="#intro">Mohammad Mojahid</a>
          </div>
          {/* --------- Toggle btn ---------- */}
          <div className="toggleBtn" onClick={togglebtn}>
            {activeToggle ? <ImCross /> : <AiOutlineAlignRight />}
          </div>
        </div>
        <div
          className={`right ${activeToggle ? `active-right` : ``}`}
          id="right-block"
        >
          {/* --------- Menu Btn --------- */}
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
                <a href={CONNECT_ME?.RESUME_LINK} target="blank">
                  <span>Resume</span>
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

export default Topbar;
