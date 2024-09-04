import { useState, useEffect } from 'react';
import ModalProyect from './ModalProyect';

const CardProyecto = ({ proyecto }) => {
  const [abrirModal, setAbrirModal] = useState(false);

  // useEffect(() => {
  //   abrirModal 
  //     ? document.body.classList.add('scroll')
  //     : document.body.classList.remove('scroll');
  // }, [abrirModal]);
  
  const handleShowModal = (value) => {
    setAbrirModal(value);
  };

  return (
    <>
     <div className="border-[#028891] border-[1px] rounded-md w-[100%] min-w-[280px] h-[425px] bg-[#f7f7f7] duration-[0.8s] sm:w-[300px] lg:w-[300px] lg:min-h-[300px] lg:duration-[0.7s] xl:w-[350px]  hover:shadow-xl">
      <img
        src={proyecto.imagen}
        alt={proyecto.nombre}
        title={proyecto.nombre}
        className="rounded-se-md rounded-ss-md border-bottom w-[100%] h-[225px] object-cover"
      />
      <div className="flex flex-col justify-between gap-6 mt-3">
        <div className=" rounded-[4px] py-1 px-2 flex flex-col items-center mb-2">
          <h4 className="mb-1 font-bold text-[20px] md:text-[20px] xl:text-2xl text-[#028891]">{proyecto.nombre}</h4>
          <p className="md:text-[1rem] xl:text-[1.125rem]  mb-0 text-[#028891]">{proyecto.tipo}</p>
        </div>
        <div className="flex justify-center gap-2 xl:gap-3">
          <a
            href={proyecto.github}
            className="md:text-[1rem] xl:text-[1.125rem]  rounded-[6px] px-3 text-[#028891] border border-[#028891] duration-[0.5s] hover:duration-[0.5s] hover:bg-[#028891] hover:text-[#fff] hover:border-[#000] flex flex-col items-center "
            target="_blank"
            title="Ver código"
          >
            <i className="text-2xl bi bi-github"></i>
            <span>Github</span>
          </a>
          <a
            href={proyecto.enlace}
            className="md:text-[1rem] xl:text-[1.125rem]  rounded-[6px] px-3 text-[#028891] border border-[#028891] duration-[0.5s] hover:duration-[0.5s] hover:bg-[#028891] hover:text-[#fff] hover:border-[#000] flex flex-col items-center"
            target="_blank"
            title="Ver página"
          >
            <i className="text-2xl bi bi-link-45deg"></i>
            <span>Visitar</span>
          </a>
          {/* <button
            className="hidden md:flex md:text-[1rem] xl:text-[1.125rem]  rounded-[6px] px-3 border-[1px] text-[#028891] border-[#028891] duration-[0.5s] hover:duration-[0.5s] hover:bg-[#028891] hover:text-[#fff] hover:border-[#000]  flex-col items-center "
            title="Ver más información del proyecto"
            onClick={()=>handleShowModal(true)}
          >
            <i className="text-2xl bi bi-info-circle" ></i> <span>Detalle</span>
          </button> */}
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
