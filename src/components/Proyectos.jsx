import React from "react";
import CardProyecto from "./Proyectos/CardProyecto";

const Proyectos = () => {
  return (
    <article className="py-2 py-md-5 d-flex flex-column gap-5 justify-content-center align-items-center">
      <h2 className="display-5 mb-3 text-center">Proyectos</h2>
      <div className="d-flex justify-content-center align-items-center flex-wrap gap-5">
        <CardProyecto></CardProyecto>
        <CardProyecto></CardProyecto>
        <CardProyecto></CardProyecto>
      </div>
      <button className="btn btnMoreProyects px-5 py-2 d-flex gap-2 align-items-center">
        <i class="bi bi-arrow-right-circle-fill fs-4 me-2 text-white"></i>
        <a href="" className="text-white">
          {" "}
          Más Proyectos...
        </a>
      </button>
    </article>
  );
};

export default Proyectos;
