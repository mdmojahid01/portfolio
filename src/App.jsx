import React from "react";
import "./app.scss";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/skills";
import Experience from "./components/experience/experience";
import Project from "./components/projects/projects";
// import Resume from "./components/resume/resume";
import Contact from "./components/contact/contact";
import "./global.scss";
import Footer from "./components/footer/footer";

function App() {
  // ---------------- jsx -------------------------
  return ( 
    <div className="app">
      <Intro />
      <Skills />
      <Experience />
      <Project />
      {/* <Resume /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
