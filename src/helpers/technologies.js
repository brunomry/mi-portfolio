import html5 from "../assets/iconos/html5.svg";
import css3 from "../assets/iconos/css3.svg";
import bootstrap5 from "../assets/iconos/bootstrap5.svg";
import tailwind from "../assets/iconos/tailwind.svg";
import javascript from "../assets/iconos/javascript.svg";
import react from "../assets/iconos/react.svg";
import reactbootstrap from "../assets/iconos/reactbootstrap.svg";
import reactrouter from "../assets/iconos/reactrouter.svg";
import form from "../assets/iconos/reacthookform.svg";
import redux from "../assets/iconos/redux.svg";
import axios from "../assets/iconos/axios.svg";
import figma from "../assets/iconos/figma.svg";
import node from "../assets/iconos/nodejs.svg";
import express from "../assets/iconos/express.svg";
import mysql from "../assets/iconos/mysql.svg";
import mongodb from "../assets/iconos/mongodb.svg";
import postman from "../assets/iconos/postman.svg";
import mongoose from "../assets/iconos/mongoose.svg";

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
