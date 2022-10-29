import React from "react";
import "./projects.scss";
import InnerProjectDiv from "./innerProjectDiv";
// ===== project image imported --------
import todo from "../../images/project image/todo.png";
import bookList from "../../images/project image/booklist.png";
import tictac from "../../images/project image/tictactoe.png";
import portfolio from "../../images/project image/portfolio.png";
// ======= imported Icon for used project tech---------
import { TiHtml5, TiCss3 } from "react-icons/ti";
import { SiJavascript, SiMongodb, SiRedux, SiSass } from "react-icons/si";
import { FaReact, FaGithub } from "react-icons/fa";
import { IoLogoNodejs, IoLogoPython } from "react-icons/io";
import { TbApi } from "react-icons/tb";

function projects() {
  let html5 = {
    title: "Html5",
    icon: <TiHtml5 style={{ color: "orange" }} />,
  };
  let css3 = {
    title: "CSS",
    icon: <TiCss3 style={{ color: "blue" }} />,
  };
  let js = {
    title: "JavaScript",
    icon: <SiJavascript style={{ color: "yellow" }} />,
  };
  let reactjs = {
    title: "React Js",
    icon: <FaReact style={{ color: "skyblue" }} />,
  };
  let redux = {
    title: "Redux Js",
    icon: <SiRedux style={{ color: "skyblue" }} />,
  };
  let api = {
    title: "API",
    icon: <TbApi style={{ color: "black" }} />,
  };
  // ==================================
  const todoUsedTech = [html5, css3, js, reactjs];
  const tictacUsedTech = [html5, css3, js, reactjs];
  const bookListUsedtech = [html5, css3, js, reactjs, redux, api];
  const portfolioUsedTech = [html5, css3, js, reactjs];
  // =====================================
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div>
        {/* === Each row having only 4 conatiner of innerprojectdiv === */}
        {/* ====== row start ==== */}
        <div>
          {/*======> 1st project item <========= */}
          <div>
            <InnerProjectDiv
              image={todo}
              projectName="To Do App"
              description="This is to do listing app developed using React js."
              href="https://md-react-todo-app.netlify.app/"
              usedTech={todoUsedTech}
            />
          </div>
          {/*======> 2nd project item <======*/}
          <div>
            <InnerProjectDiv
              image={tictac}
              projectName="Tic Tac Toe"
              description="This is simple game app developed using React js."
              href="https://mdmojahid01.github.io/tic-tac-toe/"
              usedTech={tictacUsedTech}
            />
          </div>
          {/*======> 3rd project item <======*/}
          <div>
            <InnerProjectDiv
              image={bookList}
              projectName="Book listing library"
              description="This app is developed using React js."
              href="https://github.com/mdmojahid01/book-listing"
              usedTech={bookListUsedtech}
            />
          </div>
          {/*======> 4th project item <======*/}
          <div>
            <InnerProjectDiv
              image={portfolio}
              projectName="Personal Portfolio"
              description="build with React js"
              href="https://github.com/mdmojahid01/portfolio"
              usedTech={portfolioUsedTech}
            />
          </div>
        </div>
        {/* =================== row End ================== */}
        {/*=============== Format of Adding New Row ==============*/}
        {/* <div>
          <div>
            <InnerProjectDiv />
          </div>
          <div>
            <InnerProjectDiv />
          </div>
          <div>
            <InnerProjectDiv />
          </div>
          <div></div>
        </div>  */}
        {/*============================================================*/}
      </div>
    </div>
  );
}

export default projects;
