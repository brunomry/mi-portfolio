import React from "react";
import CardProyecto from "./Proyectos/CardProyecto";
import proyectos from "./helpers/proyectos";

const Proyectos = () => {
  console.log(proyectos);
  return (
    <article
      className=" py-4 py-lg-4 d-flex flex-column gap-2 gap-sm-5 align-items-center px-3 section proyects  "
      id="proyectos"
    >
      <h2 className="mb-3 text-center display-6 fw-bold ">Proyectos</h2>
      <div className="d-flex justify-content-center align-items-center flex-wrap gap-3 gap-lg-4 gap-xl-5">
        {proyectos.map((proyecto) => (
          <CardProyecto key={proyecto.id} proyecto={proyecto}></CardProyecto>
        ))}
      </div>
      <button className="btn btnMoreProyects px-5 d-flex gap-2 align-items-center mt-3">
        <i className="bi bi-arrow-right-circle-fill fs-5 me-2 "></i>
        <a href="" className="">
          {" "}
          Más Proyectos...
        </a>
      </button>
    </article>
  );
};

export default Proyectos;
