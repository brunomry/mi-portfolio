import ab from "../../assets/proyectos/ambientebohemio.webp";
import temp from "../../assets/proyectos/temp.webp";
import rss1 from "../../assets/proyectos/rss1.webp";
import parrillada from "../../assets/proyectos/laparrillada.webp";
import technicaldoc from "../../assets/proyectos/technicaldoc.webp";
import rollingbank from "../../assets/proyectos/rollingbank.webp";
import trombones from "../../assets/proyectos/trombones.webp";
import blogrecetas from "../../assets/proyectos/blogrecetas.webp";
import sanjorge from "../../assets/proyectos/sanjorge.webp";
import clima from "../../assets/proyectos/clima.webp";
import wpp from "../../assets/proyectos/wpp.webp";
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
    fecha: "Marzo 2024",
    duracion: "4 semanas",
    ultima_actualizacion: "-",
    descripcion:
      "El proyecto desarrollado es una aplicación web para restaurante donde el objetivo principal consistía en que los usuarios luego de registrarse e iniciar sesión puedan realizar un pedido. Además cabe resaltar que con el equipo logramos incorporar método de pago mediante MercadoPago a modo de prueba como funcionalidad extra de la aplicación.",
    proyecto: "En equipo",
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
      { name: "Postman", icon: postman}
    ],
  },
  {
    id: 222,
    imagen: sanjorge,
    nombre: "Hostal San Jorge",
    tipo: "Sitio web",
    fecha: "Enero 2024",
    duracion: "8 semanas",
    ultima_actualizacion: "Marzo 2024",
    descripcion:
      "Este proyecto consiste en un sitio web desarrollado para el Hostal San Jorge ubicado en la ciudad de Cafayate, provincia de Salta. El objetivo consistía en realizar un sitio web al hostal que brinde toda la información sobre el mismo y sus servicios, a su vez que los usuarios puedan acceder al mismo a través de la opción de sitio web que ofrece Google a los negocios registrados. Como mejoras futuras planeo refactorizar el sitio a una aplicación web usando stack MERN y TailwindCSS para los estilos, además de incorporar las opciones de reserva y métodos de pago entre otras funcionalidades.",
    proyecto: "Freelance",
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
    fecha: "Febrero 2024",
    duracion: "10 días",
    ultima_actualizacion: "-",
    descripcion:
      "Aplicación web sobre Blog de recetas donde el objetivo principal consistía en que el administrador pueda iniciar sesión y gestionar las recetas. El proyecto comenzó siendo en equipo desarrollándose todo el frontend y su continuación consistía en desarrollar de forma individual el backend de la aplicación.",
    proyecto: "En equipo",
    responsabilidades: ["Realicé los mockups de interfaces","Desarrollé la página de detalle de receta", "Desarrollé menú de navegación y pie de página", "Desarrollé el backend de la aplicación"],
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
    fecha: "Diciembre 2023",
    duracion: "1 semana",
    ultima_actualizacion: "Julio 2024",
    descripcion: "",
    proyecto: "Individual",
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
    fecha: "Septiembre 2023",
    duracion: "1 semana",
    ultima_actualizacion: "-",
    descripcion: "",
    proyecto: "Individual",
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
    fecha: "Octubre 2024",
    duracion:"2 semanas",
    ultima_actualizacion: "Julio 2024",
    descripcion: "El proyecto realizado es un sitio web de tienda de calzados donde el objetivo consistía en desarrollar un E-commerce estático donde se visualice toda la información relacionada a los productos y cuente además con un carrito de compras.",
    proyecto: "En equipo",
    responsabilidades: ["Desempeñe rol de scrummaster facilitando la comunicación y resolviendo problemas del equipo", "Realicé los mockups de interfaces","Desarrollé las páginas de contacto, carrito de compras y detalle de producto", "Desarrollé menú de navegación"],
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
    fecha: "Junio 2022",
    duracion: "5 horas",
    ultima_actualizacion: "-",
    descripcion: "La página desarrollada corresponde al 2° módulo de la certificación del curso Diseño responsive de FreeCodeCamp donde el objetivo era replicar el diseño predefinido.",
    proyecto: "Individual",
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
    duracion: "1 semana",
    fecha: "Octubre de 2023",
    ultima_actualizacion: "Julio 2024",
    descripcion: "El proyecto desarrollado es un sitio web donde el objetivo principal consistía en replicar los diseños predefinidos y practicar el uso de git y github.",
    proyecto: "Trabajo en equipo",
    responsabilidades: ["Desempeñe rol de Scrummaster facilitando la comunicación y resolviendo problemas del equipo.","Desarrollé la tercera sección de la página principal","Desarrollé segunda sección de la página de Seguridad", "Encargado de aprobar los pull request"],
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
    duracion: "4 horas",
    fecha: "Junio 2022",
    ultima_actualizacion: "-",
    descripcion: "La página desarrollada corresponde al 3° módulo de la certificación del curso Diseño responsive de FreeCodeCamp donde el objetivo era replicar el diseño predefinido.",
    proyecto: "Individual",
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
    fecha: "Febrero 2024",
    duracion: "1 semana",
    ultima_actualizacion: "Abril 2024",
    descripcion: "",
    proyecto: "Individual",
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
    fecha: "Mayo 2024",
    duracion: "1 semana",
    ultima_actualizacion: "-",
    descripcion: "",
    proyecto: "Individual",
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
