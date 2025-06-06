import { useState, useEffect } from 'react';
import ModalProyect from './ModalProyect';

const CardProyecto = ({ proyecto }) => {
  const [abrirModal, setAbrirModal] = useState(false);
 
  const handleShowModal = (value) => {
    setAbrirModal(value);
  };

  return (
    <>
     <div className=" w-[100%] min-w-[250px] pb-8 bg-[#fff] duration-[0.8s] sm:w-[300px] lg:w-[320px] lg:min-h-[400px] lg:duration-[0.7s] xl:w-[400px] ">
      <div className=''>
      <img
        src={proyecto.imagen}
        alt={proyecto.nombre}
        title={proyecto.nombre}
        className=" border-b w-[100%] h-[300px] object-cover"
      />
      </div>
      <div className="flex flex-col justify-between  gap-4 my-4">
        <div className=" rounded-[4px] py-1 flex flex-col mb-2">
          <h4 className="font-black text-[16px] md:text-[20px] mb-0 text-[#2B7FF7]">{proyecto.categoria}</h4>
          <p className="text-[14px] lg:text-[1rem] mb-0 text-[#787777]">{proyecto.tipo}</p>
        </div>
        <div className="flex flex-wrap gap-2 xl:gap-3">
          <a
            href={proyecto.github}
            className="flex gap-2 text-[14px]  bg-[#fff] rounded-[8px] px-3 pt-1 text-[#5a5a5a] border-[1px] border-[#cecece] duration-[0.5s] hover:duration-[0.5s] hover:bg-[#000] hover:border-[#000] hover:text-[#fff] items-center "
            target="_blank"
            rel="noopener"
            title="Ver código"
          >
            <i className="text-lg bi bi-github"></i>
            <span>Código</span>
          </a>
          <a
            href={proyecto.enlace}
            className="flex gap-2  text-[14px]  bg-[#fff] rounded-[8px] px-3 pt-1 text-[#5a5a5a] border-[1px] border-[#cecece] duration-[0.5s] hover:duration-[0.5s] hover:bg-[#000] hover:border-[#000] hover:text-[#fff] items-center "
            target="_blank"
            title="Ver página"
            rel="noopener"
          >
            <i className="text-lg bi bi-link-45deg"></i>
            <span>Web</span>
          </a>
          <button
            className="flex gap-2 text-[14px]  bg-[#fff] rounded-[8px] px-3 pt-1 text-[#5a5a5a] border-[1px] border-[#cecece] duration-[0.5s] hover:duration-[0.5s] hover:bg-[#000] hover:border-[#000] hover:text-[#fff] items-center "
            title="Ver más información del proyecto"
            onClick={()=>handleShowModal(true)}
          >
            <i className="text-lg bi bi-info-circle" ></i><span>Info</span>
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