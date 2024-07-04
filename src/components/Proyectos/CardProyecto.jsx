import React from "react";
import img from "../../assets/bg.jpg";
import { Link } from "react-router-dom";

const CardProyecto = ({ proyecto }) => {
  return (
    <div className="card cardProyect ">
      <img
        src={proyecto.imagen}
        alt={proyecto.nombre}
        className="rounded-top imgProyect border-bottom"
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <div className="descriptionProyect rounded-2 py-1 px-2 d-flex flex-column align-items-center mb-2">
          <h4 className="mb-1 fw-bold">{proyecto.nombre}</h4>
          <p className="text-dark fs-5 mb-0">{proyecto.tipo}</p>
        </div>
        <div className="d-flex gap-3 justify-content-center">
          <a
            href={proyecto.github}
            className="rounded-2 px-3 btnProyect d-flex flex-column align-items-center "
            target="_blank"
          >
            <i className="bi bi-github fs-4 "></i>
            <span>Github</span>
          </a>
          <a
            href={proyecto.enlace}
            className="rounded-2 px-3 btnProyect d-flex flex-column align-items-center"
            target="_blank"
          >
            <i className="bi bi-link-45deg fs-4 "></i>
            <span>Enlace</span>
          </a>
          <a
            className="rounded-2 px-3 border text-secondary d-flex flex-column align-items-center "
            target="_blank" disabled
          >
            <i class="bi bi-info-circle fs-4"></i> <span>Detalle</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardProyecto;
