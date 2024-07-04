import React from "react";
import img from "../../assets/bg.jpg";

const CardProyecto = ({ proyecto }) => {
  console.log(proyecto.nombre);

  return (
    <div className="card cardProyect ">
      <img
        src={proyecto.imagen}
        alt={proyecto.nombre}
        className="rounded-top imgProyect border-bottom"
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <div className="descriptionProyect rounded-2 py-1 px-2 d-flex flex-column align-items-center mb-2">
          <h3 className="mb-1">{proyecto.nombre}</h3>
          <p className="text-dark fs-5 mb-0">{proyecto.tipo}</p>
        </div>
        <div className="d-flex gap-3 justify-content-center">
          <button className="rounded-2 px-3 btnProyect d-flex flex-column align-items-center ">
            <i className="bi bi-github fs-4 "></i>
            <a href="#">Github</a>
          </button>
          <button className="rounded-2 px-3 btnProyect d-flex flex-column align-items-center">
            <i className="bi bi-link-45deg fs-4 "></i>
            <a href="#">Enlace</a>
          </button>
          <button className="rounded-2 px-3 btnProyect d-flex flex-column align-items-center ">
            <i class="bi bi-info-circle fs-4"></i>{" "}
            <a href="#" className="">
              Detalle
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProyecto;
