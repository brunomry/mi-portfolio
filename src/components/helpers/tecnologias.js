import html5 from "../../assets/iconos/html5.svg";
import css3 from "../../assets/iconos/css3.svg";
import bootstrap5 from "../../assets/iconos/bootstrap5.svg";
import javascript from "../../assets/iconos/javascript.svg";
import react from "../../assets/iconos/react.svg";
import node from "../../assets/iconos/nodejs.svg";
import express from "../../assets/iconos/express.svg";
import mongodb from "../../assets/iconos/mongodb.svg";
import postman from "../../assets/iconos/postman.svg";
import netlify from "../../assets/iconos/netlify.svg";
import vercel from "../../assets/iconos/vercel.svg";
import draw from "../../assets/iconos/draw.png";
import rb from "../../assets/iconos/react-bootstrap.png";
import trello from "../../assets/iconos/trello.svg";
import git from "../../assets/iconos/git.svg";
import github from "../../assets/iconos/github.svg";

const tecnologias = {
    frontend: [
      { name: "HTML5", icon: html5 },
      { name: "CSS3", icon: css3 },
      { name: "Bootstrap5", icon: bootstrap5 },
      { name: "Javascript", icon: javascript },
      { name: "React", icon: react },
      { name: "React-Bootstrap", icon: rb }
    ],
    backend: [
      { name: "Node JS", icon: node },
      { name: "Express JS", icon: express },
      { name: "Javascript", icon: javascript },
      { name: "MongoDB", icon: mongodb },
      { name: "Postman", icon: postman}
    ],
    otras: [
      { name: "Git", icon: git},
      { name: "Github", icon: github},
      { name: "Trello", icon: trello},
      { name: "Draw", icon: draw},
      { name: "Netlify", icon: netlify},
      { name: "Vercel", icon: vercel}
    ]
  };

export default tecnologias;