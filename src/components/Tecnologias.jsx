import html5 from "../assets/iconos/html5.svg";
import css3 from "../assets/iconos/css3.svg";
import bootstrap5 from "../assets/iconos/bootstrap5.svg";
import javascript from "../assets/iconos/javascript.svg";
import react from "../assets/iconos/react.svg";
import node from "../assets/iconos/nodejs.svg";
import express from "../assets/iconos/express.svg";
import mongodb from "../assets/iconos/mongodb.svg";
import Tecnologia from "./tecnologias/Tecnologia";

const tecnologias = {
  frontend: [
    { name: "HTML5", icon: html5 },
    { name: "CSS3", icon: css3 },
    { name: "Bootstrap5", icon: bootstrap5 },
    { name: "Javascript", icon: javascript },
    { name: "React", icon: react },
  ],
  backend: [
    { name: "Node JS", icon: node },
    { name: "Express JS", icon: express },
    { name: "Javascript", icon: javascript },
    { name: "MongoDB", icon: mongodb },
  ],
};

const Tecnologias = () => {
  return (
    <article className="d-flex flex-column gap-3 gap-md-5 align-items-center justify-content-center py-5">
      <h2 className="display-5">Tecnologías</h2>
      <div className="d-flex flex-column flex-lg-row gap-3 gap-lg-5 align-items-center justify-content-start">
        <div className="stack border border-white border-1 py-3 px-5 text-white fs-5 fw-medium text-center">
          FRONTEND
        </div>
        <div className="d-flex flex-column flex-md-row gap-2 gap-md-4 align-items-center justify-content-center pt-4">
          {tecnologias.frontend.map((tech,pos) => (
            <Tecnologia key={pos} tech={tech} />
          ))}
        </div>
      </div>
      <div className="d-flex gap-3 gap-lg-5 flex-column flex-lg-row align-items-center justify-content-start w-100 flex-wrap">
        <div className="stack border border-white border-1 py-3 px-5 text-white fs-5 fw-medium text-center">
          BACKEND
        </div>
        <div className="d-flex flex-column flex-md-row gap-4 align-items-center justify-content-center pt-4">
          {tecnologias.backend.map((tech, pos) => (
            <Tecnologia key={pos} tech={tech} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default Tecnologias;
