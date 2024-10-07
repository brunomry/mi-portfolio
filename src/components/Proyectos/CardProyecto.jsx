import { useState, useEffect } from 'react';
import ModalProyect from './ModalProyect';

const CardProyecto = ({ proyecto }) => {
  const [abrirModal, setAbrirModal] = useState(false);
 
  const handleShowModal = (value) => {
    setAbrirModal(value);
  };

  return (
    <>
     <div className="border-[1px] shadow-xl rounded-[28px] w-[100%] min-w-[280px] h-[425px] bg-[#fff] duration-[0.8s] sm:w-[300px] lg:w-[300px] lg:min-h-[300px] lg:duration-[0.7s] xl:w-[350px]  hover:shadow-xl">
      <div className='px-4 pt-4'>
      <img
        src={proyecto.imagen}
        alt={proyecto.nombre}
        title={proyecto.nombre}
        className="rounded-[12px] border-b w-[100%] h-[225px] object-cover"
      />
      </div>
      <div className="flex flex-col justify-between gap-2 mt-3">
        <div className=" rounded-[4px] py-1 px-2 flex flex-col items-center mb-2">
          <h4 className="mb-1 font-bold text-[20px] md:text-[20px] text-[#222]">{proyecto.nombre}</h4>
          <p className="md:text-[1rem] xl:text-[1.125rem]  mb-0 text-[#787777]">{proyecto.tipo}</p>
        </div>
        <div className="flex justify-center gap-2 xl:gap-3">
          <a
            href={proyecto.github}
            className="flex md:text-[1rem] xl:text-[1rem] bg-[#fff] rounded-[8px] px-3 pt-1 text-[#000] border-[1px] border-[#999] duration-[0.5s] hover:duration-[0.5s] hover:bg-[#000] hover:border-[#000] hover:text-[#fff] flex-col items-center hover:shadow-xl"
            target="_blank"
            title="Ver código"
          >
            <i className="text-2xl bi bi-github"></i>
            <span>Github</span>
          </a>
          <a
            href={proyecto.enlace}
            className="flex md:text-[1rem] xl:text-[1rem] bg-[#fff] rounded-[8px] px-3 pt-1 text-[#000] border-[1px] border-[#999] duration-[0.5s] hover:duration-[0.5s] hover:bg-[#000] hover:border-[#000] hover:text-[#fff] flex-col items-center hover:shadow-xl"
            target="_blank"
            title="Ver página"
          >
            <i className="text-2xl bi bi-link-45deg"></i>
            <span>Visitar</span>
          </a>
          <button
            className="hidden md:flex md:text-[1rem] xl:text-[1rem] bg-[#fff] rounded-[8px] px-3 pt-1 text-[#000] border-[1px] border-[#999] duration-[0.5s] hover:duration-[0.5s] hover:bg-[#000] hover:border-[#000] hover:text-[#fff] flex-col items-center hover:shadow-xl"
            title="Ver más información del proyecto"
            onClick={()=>handleShowModal(true)}
          >
            <i className="text-2xl bi bi-info-circle" ></i> <span>Detalle</span>
          </button>
        </div>
      </div>
    </div>
    <div className={`${abrirModal ? "flex justify-center w-[100%] md:mt-[150px]" : ""}`}>
    <ModalProyect
      show={abrirModal}
      proyecto={proyecto}
      handleShowModal={handleShowModal}
      setAbrirModal={setAbrirModal}
    ></ModalProyect>
    </div>   
    </>  
  );
};

export default CardProyecto;