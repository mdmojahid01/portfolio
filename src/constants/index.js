import { TiCss3, TiHtml5 } from "react-icons/ti";
import {
  SiAxios,
  SiJavascript,
  SiRedux,
  SiSass,
  SiTypescript,
} from "react-icons/si";
import { FaGithub, FaReact } from "react-icons/fa";
import { TbApi, TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import {
  todo,
  bookList,
  tictac,
  portfolio,
  codermaniaa,
  legitbytes,
  buddynoise,
} from "./images";

export const CONNECT_ME = {
  RESUME_LINK:
    "https://drive.google.com/file/d/1-gUJy55S8DwSHYQaUKY8GumKez6yuP2S/view",
  LINKEDIN_PROFILE: "https://www.linkedin.com/in/mdmojahid01",
  GITHUB_PROFILE: "https://github.com/mdmojahid01",
  EMAIL_ID: "mojahidmd92@gmail.com",
  PHONE_NUMBER: "+917903109130",
  WHATSAPP_NUMBER: "https://wa.me/7903109130",
};

export const PROJECT_LINK = {
  PORTFOLIO: "https://github.com/mdmojahid01/portfolio",
  BOOK_LISTING: "https://github.com/mdmojahid01/book-listing",
  TIC_TAC_TOE: "https://mdmojahid01.github.io/tic-tac-toe/",
  TO_DO: "https://md-react-todo-app.netlify.app/",
};

export const EXPERIENCE_DATA = {
  LEGITBYTES: {
    image: legitbytes,
    companyName: "LegitBytes IT Services LLP",
    experience: "Jun 2023 - Present",
    designation: "Frontend Developer | SDE-1",
    description: "",
    responsibility: {
      1: "Developing web applications from designs using Next.js, React.js, HTML, CSS, JavaScript, and other relevant technologies",
      2: "Successfully resolved numerous bugs in existing codebases",
      3: "Maintained open communication channels with clients, actively seeking and incorporating feedback",
      4: "Worked closely with backend team members to integrate feature updates seamlessly",
      5: "Making the required changes suggested by client",
    },
  },
  CODERMANIAA: {
    image: codermaniaa,
    companyName: "Codermaniaa Labs Pvt Ltd",
    experience: "Jan 2022 - Sep 2022",
    designation: "Frontend Developer | Intern",
    description:
      "I worked on a project as a React JS Intern in this organization. Mostly my task was to develop UI screen in React JS using functional component.",
    responsibility: {
      1: "Developed responsive websites from design concepts using ReactJS, HTML, CSS, and JavaScript",
      2: "Improved UI/UX by updating the code of existing pages, fixing issues, and incorporating feedback",
    },
  },
};

export const SKILLS = {
  html5: {
    title: "Html5",
    name: "HTML5",
    icon: <TiHtml5 style={{ color: "orange" }} />,
  },
  css3: {
    title: "CSS",
    name: "CSS3",
    icon: <TiCss3 style={{ color: "blue" }} />,
  },
  js: {
    title: "JavaScript",
    name: "JavaScript",
    icon: <SiJavascript style={{ color: "#f0dc4e" }} />,
  },
  ts: {
    title: "TypeScript",
    name: "TypeScript",
    icon: <SiTypescript style={{ color: "#3178c6" }} />,
  },
  reactjs: {
    title: "ReactJS",
    name: "ReactJS",
    icon: <FaReact style={{ color: "#5ed3f3" }} />,
  },
  nextjs: {
    title: "NextJS",
    name: "NextJS",
    icon: <TbBrandNextjs style={{ color: "black" }} />,
  },
  redux: {
    title: "Redux",
    name: "Redux",
    icon: <SiRedux style={{ color: "#764abc" }} />,
  },
  axios: {
    title: "Axios",
    name: "Axios",
    icon: <SiAxios style={{ color: "#6424dd" }} />,
  },
  api: {
    title: "API",
    name: "API",
    icon: <TbApi style={{ color: "black" }} />,
  },
  sass: {
    title: "SASS",
    name: "SASS",
    icon: <SiSass style={{ color: "#cd6799" }} />,
  },
  github: {
    title: "Github",
    name: "Github",
    icon: <FaGithub style={{ color: "black" }} />,
  },
  reactNative: {
    title: "React-native",
    name: "React-native",
    icon: <TbBrandReactNative style={{ color: "#5ed3f3" }} />,
  },
};

export const PROJECTS = {
  // PORTFOLIO: {
  //   image: portfolio,
  //   projectName: "Personal Portfolio",
  //   description: "built in React js",
  //   href: PROJECT_LINK.PORTFOLIOportfolio,
  //   usedTech: [SKILLS.html5, SKILLS.css3, SKILLS.js, SKILLS.reactjs],
  // },
  BUDDYNOISE: {
    image: buddynoise,
    projectName: "BuddyNoise",
    description: "It's a straightforward WebRTC web application",
    href: PROJECT_LINK.PORTFOLIOportfolio,
    usedTech: [SKILLS.html5, SKILLS.css3, SKILLS.js, SKILLS.reactjs],
  },
  TODO: {
    image: todo,
    projectName: "To Do App",
    description:
      "Streamline your daily tasks effortlessly with our responsive web application",
    href: PROJECT_LINK.TO_DO,
    usedTech: [SKILLS.html5, SKILLS.css3, SKILLS.js, SKILLS.reactjs],
  },
  TIC_TAC_TOE: {
    image: tictac,
    projectName: "Tic Tac Toe",
    description:
      "Simple game where two players take turns marking spaces on a 3x3 grid with either 'X' or 'O'",
    href: PROJECT_LINK.TIC_TAC_TOE,
    usedTech: [SKILLS.html5, SKILLS.css3, SKILLS.js, SKILLS.reactjs],
  },
  BOOK_LISTING: {
    image: bookList,
    projectName: "Book listing library",
    description: "This app is developed using React js.",
    href: PROJECT_LINK.BOOK_LISTING,
    usedTech: [
      SKILLS.html5,
      SKILLS.css3,
      SKILLS.js,
      SKILLS.reactjs,
      SKILLS.redux,
      SKILLS.api,
    ],
  },
};
