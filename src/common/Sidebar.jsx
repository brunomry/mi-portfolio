import perfil from "../assets/perfil.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import cv from "../assets/CV Bruno Madozzo Romay.pdf";

const Sidebar = () => {
  const [desplegado, setDesplegado] = useState();

  const desplegarMenu = (value) => {
    setDesplegado(value);
  };

  const handleDownloadPDF = () => window.open(cv, "_blank", "noopener");

  return (
    <nav className="hidden w-[100%] h-[80px] lg:h-[100vh] lg:w-[25%] xl:w-[20%] fixed top-0 right-0  sm:flex justify-center ">
      <div className="lg:px-0 flex justify-between w-[100%] lg:w-[initial]">
        <div
          className={`flex w-[100%] justify-between px-4 lg:hidden ${
            desplegado ? "hidden" : "block"
          }`}
        >
          <div className="flex items-center">
            <p className=" mb-3 text-[20px]">BM Soluciones web</p>
          </div>
          <button
            className={`text-[#222] lg:hidden ${
              desplegado ? "hidden" : "block"
            }`}
            type="button"
            title="menu"
            onClick={() => desplegarMenu(true)}
          >
            <i className="bi bi-list text-[35px]"></i>
          </button>
        </div>
        <div
          className={`w-[100%] py-4 lg:block ${
            desplegado ? "block" : "hidden"
          }`}
        >
          <div className="flex justify-end px-4">
            <button
              type="button"
              title="cerrar"
              className={`text-[#222] lg:hidden ${
                desplegado ? "block duration-[0.8s]" : "hidden"
              }`}
              onClick={() => desplegarMenu(false)}
            >
              <i className="bi bi-x-lg text-[20px] font-bold"></i>
            </button>
          </div>
          <div className="px-0 w-[100%]">
            <div
              className={`w-[100%] lg:block lg:justify-center py-3 items-center gap-2 sm:gap-4 xl:pt-[30px] ${
                desplegado ? "flex flex-col bg-[#f7f7f7]" : "hidden"
              } `}
            >
              <div className="hidden lg:block mx-auto md:w-[125px] md:h-[150px] lg:w-[200px] lg:h-[200px] rounded-[20px] border-[8px] border-[#e2e2e2] mb-2 ">
                <img
                  src={perfil}
                  alt="Bruno Madozzo"
                  title="Bruno Madozzo"
                  className="w-[100%] h-[100%] bg-slate-100 rounded-[12px] object-cover"
                />
              </div>
              <div className="text-center mb-2">
                <h2 className="text-center font-bold text-[#414141] text-[20px] ">
                  Bruno Madozzo
                </h2>
                <p className="text-gray-600">Desarrollador Frontend</p>
              </div>

              <div className="flex justify-center items-center gap-3">
                <a
                  href="https://github.com/brunomry"
                  target="_blank"
                  title="Visita mis proyectos en mi repositorio de Github"
                  className="rounded-[100%] border-[1px] border-[#375c86] p-1 flex items-center justify-center"
                  rel="noopener noreferrer"
                >
                  <i className="px-2 text-[#375c86] rounded-[6px] pt-1 bi bi-github sm:text-[20px]"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/bruno-madozzo/"
                  target="_blank"
                  title="Visita mi perfil de LinkedIn"
                  className=" rounded-full border-[1px] border-[#375c86] py-1 flex items-center justify-center"
                >
                  <i className="px-3  text-[#375c86] rounded-[6px] pt-1 bi bi-linkedin sm:text-[20px]"></i>
                </a>
              </div>
              <ul className="rounded-[4px] pt-[30px] w-[100%] h-[100%]">
                <li>
                  <Link
                    className=" block w-[100%] xl:mb-2 navLink text-[#414141] duration-[0.5s] hover:duration-[0.5s] relative pb-[15px]   text-center"
                    to={"/"}
                    onClick={() => desplegarMenu(false)}
                  >
                    Sobre mí
                  </Link>
                </li>
                <li>
                  <Link
                    className="block w-[100%] xl:mb-2 navLink text-[#414141] duration-[0.7s] hover:duration-[0.7s] relative pb-[15px]   text-center"
                    to={"/tecnologias"}
                    onClick={() => desplegarMenu(false)}
                  >
                    Tecnologías
                  </Link>
                </li>
                <li>
                  <Link
                    className="block xl:mb-2 navLink text-[#414141] duration-[0.7s] hover:duration-[0.7s] relative pb-[15px]   text-center"
                    to={"/proyectos"}
                    onClick={() => desplegarMenu(false)}
                  >
                    Proyectos
                  </Link>
                </li>
                <li>
                  <Link
                    className="block xl:mb-2 navLink text-[#414141] duration-[0.7s] hover:duration-[0.7s] relative pb-[15px]   text-center"
                    to={"/testimonios"}
                    onClick={() => desplegarMenu(false)}
                  >
                    Testimonios
                  </Link>
                </li>
                <li>
                  <Link
                    className="block xl:mb-2 navLink text-[#414141] duration-[0.7s] hover:duration-[0.7s] relative pb-[15px]   text-center"
                    to={"/educacion"}
                    onClick={() => desplegarMenu(false)}
                  >
                    Educación
                  </Link>
                </li>
                {/* <li>
                  <Link
                    className="block xl:mb-2 navLink text-[#414141] duration-[0.7s] hover:duration-[0.7s] relative pb-[15px]   text-center"
                    to={"/servicios"}
                    onClick={() => desplegarMenu(false)}
                  >
                    Servicios
                  </Link>
                </li> */}
                <li className="flex justify-center mb-2 w-[100%]">
                  <a
                    as={Link}
                    className="text-center px-5 py-[7px] w-[175px] rounded-[45px] bg-[#000] text-white hover:bg-[#f7f7f7] hover:text-[#222] border hover:border hover:border-[#000] text-[1rem] "
                    href="#footer"
                    onClick={() => desplegarMenu(false)}
                    title="Contáctame a través de mis redes sociales"
                  >
                    <span>Contáctame</span>
                  </a>
                </li>
                <li className="text-center">
                  <button
                    className=" px-5 py-[5px]  w-[175px] rounded-[45px] bg-[#fff] text-[#222] hover:bg-[#000] hover:text-[#fff] border-[#303030] border-[1px] hover:py-[7px] hover:border-[#000] text-[1rem]"
                    onClick={handleDownloadPDF}
                    title="haz clic para descargar mi CV"
                  >
                    Descargar CV <i className="bi bi-download ms-2"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
