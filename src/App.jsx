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
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  // ---------------- jsx -------------------------
  return (
    <div className="app">
      <ToastContainer autoClose={1000} pauseOnFocusLoss={false} />
      <Intro />
      <Experience />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
