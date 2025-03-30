import { useState, useEffect } from 'react';
import ModalProyect from './ModalProyect';

const CardProyecto = ({ proyecto }) => {
  const [abrirModal, setAbrirModal] = useState(false);
 
  const handleShowModal = (value) => {
    setAbrirModal(value);
  };

  return (
    <>
     <div className=" flex gap-[50px] rounded-[10px] w-[75%] min-w-[280px] h-[300px] duration-[0.8s]    lg:duration-[0.7s]  ">
      <div className=''>
      <img
        src={proyecto.imagen}
        alt={proyecto.nombre}
        title={proyecto.nombre}
        className="rounded-s-[10px] border-b max-w-[100%] h-[100%] object-cover"
      />
      </div>
      <div className="flex flex-col justify-center w-[50%] gap-2 ">
        <div className=" rounded-[4px] py-1 flex flex-col gap-2 mb-2">
          <span className='rounded-[20px] bg-[#375c86] py-2 px-4 text-[#fff] w-[fit-content]'>{proyecto.categoria}</span>
          <h4 className="font-bold text-[20px] md:text-[25px] text-[#222] 2xl:text-[32px]">{proyecto.nombre}</h4>
          <p className="md:text-[1rem] xl:text-[1.125rem]  mb-0 text-[#787777]">{proyecto.tipo}</p>
        </div>
        <div className="flex  gap-2 xl:gap-3">
          {/* <a
            href={proyecto.github}
            className="flex md:text-[1rem] xl:text-[1rem] bg-[#fff] rounded-[8px] px-3 pt-1 text-[#000] border-[1px] border-[#999] duration-[0.5s] hover:duration-[0.5s] hover:bg-[#000] hover:border-[#000] hover:text-[#fff] flex-col items-center hover:shadow-xl"
            target="_blank"
            rel="noopener"
            title="Ver código"
          >
            <i className="text-2xl bi bi-github"></i>
            <span>Github</span>
          </a> */}
          <a
            href={proyecto.enlace}
            className="flex items-center justify-center gap-4 px-5 py-[8px] 2xl:py-[10px] w-[250px] rounded-[45px] bg-[#fff] text-[#375c86]  border-[#375c86] border-[1px] hover:border-[1px] text-[16px] md:text-[1rem] xl:text-[1.125rem]"
            target="_blank"
            title="Ver página"
            rel="noopener"
          >
            <i className="text-2xl bi bi-link-45deg"></i>
            <span>VISITAR WEB</span>
          </a>
          <button
                className="flex items-center justify-center px-5 py-[8px] 2xl:py-[10px] w-[250px] rounded-[45px] bg-pink-800 text-white border-[1px] text-[16px] md:text-[1rem] xl:text-[1.125rem] gap-4"
                title="Ver más información del proyecto"
            onClick={()=>handleShowModal(true)}
          >
            <i className="text-2xl bi bi-info-circle" ></i> <span>MÁS INFORMACIÓN</span>
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