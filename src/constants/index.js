import {
  fiverr,
  java,
  javascript,
  mongodb,
  mysql,
  nodejs,
  reactjs,
  tailwind,
  web
} from "../assets";
import cozyplacePng from "../assets/cozyplace.png";
import idePng from "../assets/IDE.png";
import StockifyPng from "../assets/test.png";

  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "skills",
      title: "Skills",
    },
    // {
    //   id: "experience",
    //   title: "Experience",
    // },
    {
      id: "projects",
      title: "Projects",
    },

  ];
  
  const technologies = [

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
      name: "React JS",
      icon: reactjs,
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
  
  ];
  const services = [
    {
      title: "Web Developer",
      icon: web,
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
      name: "Stockify",
      link: "https://stock-simulator-project.vercel.app/",
      description:
        "A full stack stock simulator designed to learn investment through virtual stocks with real time insights ",

      tags: [
        {
          name: "ReactJs",
          color: "blue-text-gradient",
        },
        {
          name: "NodeJS",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "red-text-gradient",
        },
      ],
      image: StockifyPng,
      source_code_link: "https://github.com/Huzaifa-Jambagi/Stock-Simulator-Project.git",
    },
    {
  name: "CodeSyncAI",
  link: "https://online-collaborative-ide.vercel.app/",
  description:
    "A real-time collaborative code editor built with React, CodeMirror, and Socket.IO. It supports multiple programming languages (C++, Java, Python, JavaScript, C), allows users to write and execute code using the Piston API, and provides AI-powered code reviews via Google Gemini. Users can collaborate live in shared rooms, with instant code synchronization and syntax highlighting.",
  tags: [
    {
      name: "ReactJS",
      color: "blue-text-gradient",
    },
    {
      name: "NodeJS",
      color: "green-text-gradient",
    },
    {
      name: "Socket.IO",
      color: "orange-text-gradient",
    },
    {
      name: "CodeMirror",
      color: "purple-text-gradient",
    },
  ],
  image: idePng,
  source_code_link: "https://github.com/Huzaifa-Jambagi/Online-Collaborative-IDE.git",
},
  ];
  
  export { /*experiences ,*/ projects, services, technologies };
  

