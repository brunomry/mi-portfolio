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
     <div className="rounded-md w-[100%] min-w-[280px] h-[425px] bg-[#f7f7f7] duration-[0.8s] sm:w-[300px] lg:w-[300px] lg:min-h-[300px] lg:duration-[0.7s] xl:w-[350px] cursor-pointer shadow-2xl hover:shadow-none">
      <img
        src={proyecto.imagen}
        alt={proyecto.nombre}
        title={proyecto.nombre}
        className="rounded-se-md rounded-ss-md border-bottom w-[100%] h-[225px] object-cover"
      />
      <div className="flex flex-col justify-between gap-6 mt-3">
        <div className=" rounded-[4px] py-1 px-2 flex flex-col items-center mb-2">
          <h4 className="mb-1 font-bold text-2xl text-[#028891]">{proyecto.nombre}</h4>
          <p className="md:text-[18px] lg:text-[20px] mb-0 text-[#028891]">{proyecto.tipo}</p>
        </div>
        <div className="flex gap-2 xl:gap-3 justify-center">
          <a
            href={proyecto.github}
            className="md:text-[18px] lg:text-[20px] rounded-[6px] px-3 text-[#028891] border border-[#028891] duration-[0.5s] hover:duration-[0.5s] hover:bg-[#028891] hover:text-[#fff] hover:border-[#000] flex flex-col items-center "
            target="_blank"
            title="Ver código"
          >
            <i className="bi bi-github text-2xl"></i>
            <span>Github</span>
          </a>
          <a
            href={proyecto.enlace}
            className="md:text-[18px] lg:text-[20px] rounded-[6px] px-3 text-[#028891] border border-[#028891] duration-[0.5s] hover:duration-[0.5s] hover:bg-[#028891] hover:text-[#fff] hover:border-[#000] flex flex-col items-center"
            target="_blank"
            title="Ver página"
          >
            <i className="bi bi-link-45deg text-2xl"></i>
            <span>Visitar</span>
          </a>
          <button
            className="md:text-[18px] lg:text-[20px] rounded-[6px] px-3 border text-secondary flex flex-col items-center "
            title="Ver más información del proyecto"
            onClick={handleShowModal}
          >
            <i className="bi bi-info-circle text-2xl" ></i> <span>Detalle</span>
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
