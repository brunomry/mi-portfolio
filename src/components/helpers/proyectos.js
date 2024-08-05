import ab from "../../assets/proyectos/ambientebohemio.webp";
import blog from "../../assets/proyectos/blog.avif";
import temp from "../../assets/proyectos/temp.jpg";
import rss1 from "../../assets/proyectos/rss1.jpg";
import parrillada from "../../assets/proyectos/laparrillada.jpg";
import technicaldoc from "../../assets/proyectos/technicaldoc.jpg";
import rollingbank from "../../assets/proyectos/rollingbank.jpg";
import trombones from "../../assets/proyectos/trombones.jpg";
import blogrecetas from "../../assets/proyectos/blogrecetas.jpg";
import peliculas from "../../assets/proyectos/peliculas.jpg";
import sanjorge from "../../assets/frente.webp";
import clima from "../../assets/proyectos/clima.jpg";
import wpp from "../../assets/proyectos/wpp.jpg";
import html5 from "../../assets/iconos/html5.svg";
import css3 from "../../assets/iconos/css3.svg";
import bootstrap5 from "../../assets/iconos/bootstrap5.svg";
import javascript from "../../assets/iconos/javascript.svg";
import react from "../../assets/iconos/react.svg";
import reactbootstrap from "../../assets/iconos/reactbootstrap.svg";
import reactrouter from "../../assets/iconos/reactrouter.svg";
import node from "../../assets/iconos/nodejs.svg";
import express from "../../assets/iconos/express.svg";
import mongodb from "../../assets/iconos/mongodb.svg";
import postman from "../../assets/iconos/postman.svg";
import draw from "../../assets/iconos/draw.png";
import trello from "../../assets/iconos/trello.svg";
import git from "../../assets/iconos/git.svg";
import github from "../../assets/iconos/github.svg";
import redux from "../../assets/iconos/redux.svg";
import tailwind from "../../assets/iconos/tailwind.svg";
import axios from "../../assets/iconos/axios.svg";

const proyectos = [
  {
    id: 111,
    imagen: ab,
    nombre: "Ambiente Bohemio",
    tipo: "Aplicación web",
    descripcion:
      "El proyecto desarrollado consiste en una aplicación web para restaurante",
    proyecto: "Grupal",
    integrantes: [
      "Bruno Madozzo",
      "Leonel Cordero",
      "Fernando Herrera",
      "Elias Juarez",
    ],
    responsabilidades: [
      "Desempeñé rol de Scrummaster facilitando la comunicación y resolviendo problemas del equipo.",
      "Realicé los mockups de interfaces de toda la aplicación mediante la herramienta Draw.",
      "Desarrollé las páginas de Inicio, Detalle de producto, Administración, Gestión de productos, usuarios y pedidos, Detalle de compra, Historial de pedidos.",
      "Desarrollé la funcionalidad de listar productos por categoría, filtrar productos por nombre y descarga de PDF en página de Menú, entre otras.",
    ],
    github: "https://github.com/brunomry/frontendProyectoFinal_RollingCode",
    enlace: "https://ambiente-bohemio-restaurante.netlify.app/",
    tecnologias: [
      { name: "HTML5", icon: html5 },
      { name: "CSS3", icon: css3 },
      { name: "Bootstrap5", icon: bootstrap5 },
      { name: "Javascript", icon: javascript },
      { name: "React", icon: react },
      { name: "React-Bootstrap", icon: reactbootstrap },
      { name: "React-Router", icon: reactrouter },
      { name: "Node JS", icon: node },
      { name: "Express JS", icon: express },
      { name: "MongoDB", icon: mongodb },
      { name: "Git", icon: git },
      { name: "Github", icon: github },
      { name: "Trello", icon: trello },
      { name: "Draw", icon: draw },
    ],
  },
  {
    id: 222,
    imagen: sanjorge,
    nombre: "Hostal San Jorge",
    tipo: "Sitio web",
    descripcion:
      "Sitio web realizado para el hostal san jorge de cafayate, provincia de salta",
    proyecto: "Freelance",
    integrantes: ["Bruno Madozzo"],
    responsabilidades: [
      "Implementé SEO básico",
      "Implementé función de contacto vía WhatsApp y un formulario de contacto para que los visitantes realicen sus consultas",
      "Implementé función de traducción de español a inglés para todas las páginas del sitio",
      `Integré el sitio web con la opción de "Sitio web" que ofrece Google a los negocios registrados.`,
      "Contraté una fotógrafa para capturar imágenes de buena calidad del hostal y de las habitaciones",
    ],
    github: "https://github.com/brunomry/HostalSanJorgeCafayate",
    enlace: "https://hostalsanjorgecafayate.netlify.app/",
    tecnologias: [
      { name: "HTML5", icon: html5 },
      { name: "CSS3", icon: css3 },
      { name: "Bootstrap5", icon: bootstrap5 },
      { name: "Javascript", icon: javascript },
      { name: "Git", icon: git },
      { name: "Github", icon: github },
      { name: "Draw", icon: draw },
    ],
  },
  {
    id: 333,
    imagen: blogrecetas,
    nombre: "Blog de recetas",
    tipo: "Aplicación web",
    descripcion:
      "El proyecto desarrollado consiste en un Blog donde el administrador puede iniciar sesión, y gestionar las recetas.",
    proyecto: "Individual",
    integrantes: ["Bruno Madozzo"],
    responsabilidades: [""],
    github: "https://github.com/brunomry/frontendBlogDeRecetas",
    enlace: "https://rincondeplaceresgastronomicos-rpg.netlify.app/",
    tecnologias: [
      { name: "HTML5", icon: html5 },
      { name: "CSS3", icon: css3 },
      { name: "Bootstrap5", icon: bootstrap5 },
      { name: "Javascript", icon: javascript },
      { name: "React", icon: react },
      { name: "React-Bootstrap", icon: reactbootstrap },
      { name: "React-Router", icon: reactrouter },
      { name: "Node JS", icon: node },
      { name: "Express JS", icon: express },
      { name: "MongoDB", icon: mongodb },
      { name: "Git", icon: git },
      { name: "Github", icon: github },
      { name: "Draw", icon: draw },
    ],
  },
  {
    id: 444,
    imagen: temp,
    nombre: "Temporizador",
    tipo: "Aplicación web",
    descripcion: "",
    proyecto: "Individual",
    integrantes: ["Bruno Madozzo"],
    responsabilidades: [""],
    github: "https://github.com/brunomry/Temporizador",
    enlace: "https://temporizador-online-bmr.netlify.app/",
    tecnologias: [
      { name: "HTML5", icon: html5 },
      { name: "CSS3", icon: css3 },
      { name: "Bootstrap5", icon: bootstrap5 },
      { name: "Javascript", icon: javascript },
      { name: "Git", icon: git },
      { name: "Github", icon: github },
    ],
  },
  {
    id: 555,
    imagen: parrillada,
    nombre: "La Parrillada",
    tipo: "Landing Page",
    descripcion: "",
    proyecto: "Individual",
    integrantes: ["Bruno Madozzo"],
    responsabilidades: [""],
    github: "https://github.com/brunomry/LaParrillada",
    enlace: "https://r-parrillada-resto.netlify.app/",
    tecnologias: [
      { name: "HTML5", icon: html5 },
      { name: "CSS3", icon: css3 },
    ],
  },
  {
    id: 666,
    imagen: rss1,
    nombre: "Rolling Shoes Store",
    tipo: "Sitio web",
    descripcion: "",
    proyecto: "Grupal",
    integrantes: [
      "Bruno Madozzo",
      "Leonel Cordero",
      "Javier Jimenez",
      "Leonel Ramella",
      "Jeremías Romero",
    ],
    responsabilidades: [""],
    github: "https://github.com/brunomry/RollingShoesStore",
    enlace: "https://rollingshoesstore-rss.netlify.app/",
    tecnologias: [
      { name: "HTML5", icon: html5 },
      { name: "CSS3", icon: css3 },
      { name: "Bootstrap5", icon: bootstrap5 },
      { name: "Trello", icon: trello },
      { name: "Draw", icon: draw },
    ],
  },
  {
    id: 777,
    imagen: technicaldoc,
    nombre: "Technical Documentation",
    tipo: "Landing Page",
    descripcion: "",
    proyecto: "Individual",
    integrantes: ["Bruno Madozzo"],
    responsabilidades: [""],
    github: "https://github.com/brunomry/TechnicalDocumentation",
    enlace: "https://technicaldocumentation-bmr.netlify.app/",
    tecnologias: [
      { name: "HTML5", icon: html5 },
      { name: "CSS3", icon: css3 },
    ],
  },
  {
    id: 888,
    imagen: rollingbank,
    nombre: "Rolling Bank",
    tipo: "Sitio web",
    descripcion: "",
    proyecto: "Grupal",
    integrantes: [
      "Bruno Madozzo",
      "Leonel Cordero",
      "Javier Jimenez",
      "Leonel Ramella",
      "Jeremías Romero",
    ],
    responsabilidades: [""],
    github: "https://github.com/brunomry/RollingBank",
    enlace: "https://rolling-bank-rb.netlify.app/",
    tecnologias: [
      { name: "HTML5", icon: html5 },
      { name: "CSS3", icon: css3 },
      { name: "Bootstrap5", icon: bootstrap5 },
      { name: "Git", icon: git },
      { name: "Github", icon: github },
    ],
  },
  {
    id: 999,
    imagen: trombones,
    nombre: "Original Trombones",
    tipo: "Landing Page",
    descripcion: "",
    proyecto: "Individual",
    integrantes: ["Bruno Madozzo"],
    responsabilidades: [""],
    github: "https://github.com/brunomry/LandingPage",
    enlace: "https://landingpage-bmr.netlify.app/",
    tecnologias: [
      { name: "HTML5", icon: html5 },
      { name: "CSS3", icon: css3 },
    ],
  },
  {
    id: 1121,
    imagen: clima,
    nombre: "Clima",
    tipo: "Aplicación web",
    descripcion: "",
    proyecto: "Individual",
    integrantes: ["Bruno Madozzo"],
    responsabilidades: [""],
    github: "https://github.com/brunomry/webDeClima_API_react",
    enlace: "https://api-clima-bmr.netlify.app/",
    tecnologias: [
      { name: "HTML5", icon: html5 },
      { name: "CSS3", icon: css3 },
      { name: "Bootstrap5", icon: bootstrap5 },
      { name: "Javascript", icon: javascript },
      { name: "React", icon: react },
      { name: "React-Bootstrap", icon: reactbootstrap },
      { name: "Git", icon: git },
      { name: "Github", icon: github },
    ],
  },
  {
    id: 1267,
    imagen: wpp,
    nombre: "Pantalla WhatsApp Web",
    tipo: "Challenge",
    descripcion: "",
    proyecto: "Individual",
    integrantes: ["Bruno Madozzo"],
    responsabilidades: [""],
    github: "https://github.com/brunomry/challengeRollingCode",
    enlace: "https://challenge-rc-bmr.netlify.app/",
    tecnologias: [
      { name: "HTML5", icon: html5 },
      { name: "CSS3", icon: css3 },
    ],
  },
];

export default proyectos;
