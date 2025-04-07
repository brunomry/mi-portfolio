import { useState, useEffect } from "react";
import ModalProyect from "./ModalProyect";
import { Link, useNavigate } from "react-router-dom";

const CardProyecto = ({ proyecto }) => {
  const [abrirModal, setAbrirModal] = useState(false);

  const handleShowModal = (value) => {
    setAbrirModal(value);
  };

  const navegacion = useNavigate();

  const verProyecto = () => {
    navegacion(`/detalleproyecto/${proyecto.id}`);
  };

  return (
    <>
      <div
        className="flex gap-5 md:gap-5 lg:justify-center lg:gap-[50px] rounded-[10px] w-[100%] min-w-[280px] min-h-[100px] duration-[0.8s]    lg:duration-[0.7s]  "
        onClick={verProyecto}
      >
        <div className="w-[150px] h-[100px] max-w-[550px] max-h-[550px] md:w-[50%] md:h-[50%]">
          <img
            src={proyecto.imagen}
            alt={proyecto.nombre}
            title={proyecto.nombre}
            className=" max-w-[100%] max-h-[100%] object-cover"
          />
        </div>
        <div className="flex flex-col md:justify-center lg:w-[50%] lg:gap-2 ">
          <div className=" rounded-[4px] py-1 flex flex-col lg:gap-2 md:mb-2 min-h-[fit-content]">
            <span className=" text-[10px] md:text-[12px] lg:text-[1rem] rounded-[20px] bg-[#ececec] px-2 py-1 lg:py-2 lg:px-4 text-[#333] w-[fit-content]">
              {proyecto.categoria}
            </span>
            <h4 className="font-bold md:text-[20px] lg:text-[25px] text-[#375c86] 2xl:text-[32px]">
              {proyecto.nombre}
            </h4>
            <p className="text-[12px] md:text-[1rem] xl:text-[1.125rem]  mb-0 text-[#787777]">
              {proyecto.tipo}
            </p>
            <Link
              className="flex md:hidden items-center justify-center gap-2 px-3 py-1 mt-3 md:px-5 md:py-[8px] 2xl:py-[10px] w-[fit-content] h-[fit-content] rounded-[45px] border-[#375c86] text-[#375c86] border-[1px] text-[10px] md:text-[1rem] xl:text-[1.25rem]"
              title="Ver más información del proyecto"
              to={`/detalleproyecto/${proyecto.id}`}
            >
              <i className="text-[12px] xl:text-2xl bi bi-info-circle"></i>
              <span>VER INFO</span>
            </Link>
          </div>
          <div className="md:flex hidden gap-2 xl:gap-3">
            <a
              href={proyecto.enlace}
              className="flex items-center justify-center gap-2 p-2 md:px-5 md:py-[8px] 2xl:py-[10px] w-[fit-content] h-[fit-content] rounded-[45px] bg-[#fff] text-[#375c86] hover:bg-[#375c86] hover:text-[#fff] border-[#375c86] border-[1px] hover:border-[1px] text-[10px] lg:text-[1rem] xl:text-[1.25rem]"
              target="_blank"
              title="Ver página"
              rel="noopener"
            >
              <i className="text-[12px] xl:text-2xl bi bi-link-45deg"></i>
              <span>VER DEMO</span>
            </a>
            <Link
              className="flex items-center justify-center gap-2 p-2 md:px-5 md:py-[8px] 2xl:py-[10px] w-[fit-content] h-[fit-content] rounded-[45px] bg-pink-800 border-pink-800 hover:bg-pink-700 text-white border-[1px] text-[10px] lg:text-[1rem] xl:text-[1.25rem]"
              title="Ver más información del proyecto"
              to={`/detalleproyecto/${proyecto.id}`}
            >
              <i className="text-[12px] xl:text-2xl bi bi-info-circle"></i>
              <span>MÁS INFORMACIÓN</span>
            </Link>
            {/* <button
                className="flex items-center justify-center px-5 py-[8px] 2xl:py-[10px] w-[250px] rounded-[45px] bg-pink-800 text-white border-[1px] text-[16px] md:text-[1rem] xl:text-[1.125rem] gap-4"
                title="Ver más información del proyecto"
            onClick={()=>handleShowModal(true)}
          >
            <i className="text-2xl bi bi-info-circle" ></i> <span>MÁS INFORMACIÓN</span>
          </button> */}
          </div>
        </div>
      </div>
      <div
        className={`${
          abrirModal ? "flex justify-center w-[100%] md:mt-[150px]" : ""
        }`}
      >
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
