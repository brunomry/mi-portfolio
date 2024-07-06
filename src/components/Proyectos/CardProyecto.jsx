import React from "react";
import { useState } from 'react';
import ModalProyect from "./ModalProyect";


const CardProyecto = ({ proyecto }) => {

  const [abrirModal, setAbrirModal] = useState(false);

  const handleShowModal = () => {
    setAbrirModal(!abrirModal);
  };

  return (
    <>
     <div className="card cardProyect">
      <img
        src={proyecto.imagen}
        alt={proyecto.nombre}
        title={proyecto.nombre}
        className="rounded-top imgProyect border-bottom"
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <div className="descriptionProyect rounded-2 py-1 px-2 d-flex flex-column align-items-center mb-2">
          <h4 className="mb-1 fw-bold">{proyecto.nombre}</h4>
          <p className="sizeText mb-0">{proyecto.tipo}</p>
        </div>
        <div className="d-flex gap-2 gap-xl-3 justify-content-center">
          <a
            href={proyecto.github}
            className="sizeText rounded-2 px-3 btnProyect d-flex flex-column align-items-center "
            target="_blank"
            title="Ver código"
          >
            <i className="bi bi-github fs-4 "></i>
            <span>Github</span>
          </a>
          <a
            href={proyecto.enlace}
            className="sizeText rounded-2 px-3 btnProyect d-flex flex-column align-items-center"
            target="_blank"
            title="Ver página"
          >
            <i className="bi bi-link-45deg fs-4 "></i>
            <span>Visitar</span>
          </a>
          <button
            className="sizeText rounded-2 px-3 border text-secondary d-flex flex-column align-items-center "
            title="Ver más información del proyecto"
            onClick={handleShowModal}
          >
            <i className="bi bi-info-circle fs-4" ></i> <span>Detalle</span>
          </button>
        </div>
      </div>
    </div>
    <ModalProyect
      show={abrirModal}
      proyecto={proyecto}
      handleShowModal={handleShowModal}
    ></ModalProyect>
    </>
   
  );
};

export default CardProyecto;
