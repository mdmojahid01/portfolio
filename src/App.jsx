import React from "react";
import "./app.scss";
import Topbar from "./components/topbar/topbar";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/skills";
import Experience from "./components/experience/experience";
import Project from "./components/projects/projects";
import Resume from "./components/resume/resume";
import Contact from "./components/contact/contact";

function App() {
  // ---------------- jsx -------------------------
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro />
        <Skills />
        <Experience />
        <Project />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;
