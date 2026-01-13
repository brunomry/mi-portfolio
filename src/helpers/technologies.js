import html5 from "../assets/icons/html5.svg";
import css3 from "../assets/icons/css3.svg";
import bootstrap5 from "../assets/icons/bootstrap5.svg";
import tailwind from "../assets/icons/tailwind.svg";
import javascript from "../assets/icons/javascript.svg";
import react from "../assets/icons/react.svg";
import reactbootstrap from "../assets/icons/reactbootstrap.svg";
import reactrouter from "../assets/icons/reactrouter.svg";
import form from "../assets/icons/reacthookform.svg";
import redux from "../assets/icons/redux.svg";
import axios from "../assets/icons/axios.svg";
import figma from "../assets/icons/figma.svg";
import node from "../assets/icons/nodejs.svg";
import express from "../assets/icons/express.svg";
import mysql from "../assets/icons/mysql.svg";
import mongodb from "../assets/icons/mongodb.svg";
import postman from "../assets/icons/postman.svg";
import mongoose from "../assets/icons/mongoose.svg";

const technologies = {
  frontend: [
    { name: "React", icon: react },
    { name: "React Router", icon: reactrouter },
    { name: "React Bootstrap", icon: reactbootstrap },
    { name: "React Hook Form", icon: form },
    { name: "Redux Toolkit", icon: redux },
    { name: "JavaScript", icon: javascript },
    { name: "Tailwind CSS", icon: tailwind },
    { name: "Bootstrap 5", icon: bootstrap5 },
    { name: "Axios", icon: axios },
    { name: "HTML5", icon: html5 },
    { name: "CSS3", icon: css3 },
  ],
  ui: [{ name: "Figma", icon: figma }],
  backend: [
    { name: "Node.js", icon: node },
    { name: "Express.js", icon: express },
    { name: "Postman", icon: postman },
    { name: "Mongoose", icon: mongoose },
  ],
  bd: [
    { name: "MongoDB", icon: mongodb },
    { name: "MySQL", icon: mysql },
  ],
};

export default technologies;
