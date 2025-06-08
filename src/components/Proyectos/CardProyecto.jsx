import { useState, useEffect } from 'react';
import ModalProyect from './DetalleProyecto';
import { Link } from 'react-router-dom';

const CardProyecto = ({ proyecto }) => {
  return (
    <>
     <div className=" w-[100%] min-w-[250px] pb-8 bg-[#fff] duration-[0.8s] sm:w-[300px] lg:w-[350px] lg:min-h-[400px] lg:duration-[0.7s] xl:w-[400px] ">
      <div className=''>
      <img
        src={proyecto.imagen}
        alt={proyecto.nombre}
        title={proyecto.nombre}
        className="rounded-[8px] border-b w-[100%] h-[225px] lg:h-[300px] object-cover"
      />
      </div>
      <div className="flex flex-col justify-between  md:gap-4 md:my-4">
        <div className=" rounded-[4px] py-1 flex flex-col mb-2">
          <h4 className="font-black text-[16px] md:text-[20px] mb-0 text-[#2B7FF7]">{proyecto.categoria}</h4>
          <p className="text-[14px] lg:text-[1rem] mb-0 text-[#787777]">{proyecto.tipo}</p>
        </div>
        <div className="flex flex-wrap gap-2 xl:gap-3">
          <a
            href={proyecto.github}
            className="flex gap-2 text-[14px]  bg-[#fff] rounded-[8px] px-3 pt-1 text-[#333] border-[1px] border-[#333] duration-[0.5s] hover:duration-[0.5s] hover:bg-[#000] hover:border-[#000] hover:text-[#fff] items-center "
            target="_blank"
            rel="noopener"
            title="Ver código"
          >            
            <span>Código</span>
            <i className="text-lg bi bi-github"></i>
          </a>
          <a
            href={proyecto.enlace}
            className="flex gap-2  text-[14px]  bg-[#fff] rounded-[8px] px-3 pt-1 border-[1px] text-[#2B7FF7]  border-[#2B7FF7] hover:bg-[#2B7FF7] duration-[0.5s] hover:duration-[0.5s]  hover:border-[#fff] hover:text-[#fff] items-center "
            target="_blank"
            title="Ver página"
            rel="noopener"
          >
            
            <span>Web</span>
            <i className="text-[1rem] bi bi-box-arrow-up-right"></i>
          </a>
          <Link
            className="flex gap-2 text-[14px]  bg-[#fff] rounded-[8px] px-3 pt-1 text-[#5a5a5a] border-[1px] border-[#cecece] duration-[0.5s] hover:duration-[0.5s] hover:bg-[#e6e6e6] hover:border-[#cecece] hover:text-[#5a5a5a] items-center "
            title="Ver más información del proyecto"
            to={`/proyectos/detalleproyecto/${proyecto.id}`}
          >
           
            <span>Info</span>
             <i className="text-lg bi bi-info-circle" ></i>
          </Link>
        </div>
      </div>
    </div>
    </>  
  );
};

export default CardProyecto;