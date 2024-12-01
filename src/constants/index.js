import {
  css,
  fiverr,
  git,
  html,
  java,
  javascript,
  mongodb,
  mysql,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  typescript,
  vscode
} from "../assets";
import cozyplacePng from "../assets/cozyplace.png";
import portfolioPng from "../assets/Portfolio.png";

  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },

  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
        name: "Java",
        icon: java,
      },
      {
        name: "MySQL",
        icon: mysql,
      },
      {
        name: "VSCode",
        icon: vscode,
      },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
  
    {
      title: "Freelancing Web Developer",
      company_name: "Fiverr",
      icon: fiverr,
      iconBg: "#E6DEDD",
      date: "Dec 2024 - Present",
      points: [
        "Developing and maintaining web applications using MongoDB,NodeJs,Expressjs and React.js other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
         "Building scalable and efficient backend systems using Node.js, Express.js, and MongoDB for web applications",
      ],
    },
    
  ];
  

  
  const projects = [
    {
      name: "Cozy Place",
      link: "https://travel-website-mern-project.onrender.com/listings",
      description:
        "CozyPlace is a feature-rich platform for listing and exploring cozy rental places. It provides a secure login authentication and authorization system to ensure user data protection and role-based access.",

      tags: [
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "red-text-gradient",
        },
      ],
      image: cozyplacePng,
      source_code_link: "https://github.com/Huzaifa-Jambagi/Travel_Website_Mern_project/tree/master",
    },
    {
      name: "Portfolio",
      link: "#",
      description:
        "This is where I share a bit about myself and the work I’ve been doing as a full stack developer. ",

      tags: [
        {
          name: "ReactJs",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJs",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "red-text-gradient",
        },
      ],
      image: portfolioPng,
      source_code_link: "https://github.com/Huzaifa-Jambagi/Travel_Website_Mern_project/tree/master",
    },
  ];
  
  export { experiences, projects, technologies };
