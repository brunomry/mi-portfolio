import perfil from "../assets/perfilbg.png";
import { useState } from "react";

const Sidebar = () => {
  const [desplegado, setDesplegado] = useState();

  const desplegarMenu = (value) => {
    setDesplegado(value);
  };

  return (
    <nav className="w-[100%] h-[80px] lg:h-[100vh] lg:w-[25%] xl:w-[20%] fixed top-0 left-0 bg-slate-100 flex justify-center z-[99]">
      <div className="lg:px-0 flex justify-between w-[100%] lg:w-[initial]">
        <div
          className={`flex w-[100%] justify-between px-4 lg:hidden ${
            desplegado ? "hidden" : "block"
          }`}
        >
          <h2 className="block my-auto text-[#222] text-[1.125rem]">
            Bruno Madozzo
          </h2>
          <button
            className={`text-[#222] lg:hidden ${desplegado ? "hidden" : "block"}`}
            type="button"
            title="menu"
            onClick={() => desplegarMenu(true)}
          >
            <i className="bi bi-list text-[50px]"></i>
          </button>
        </div>
        <div
          className={`w-[100%] py-4 lg:block ${desplegado ? "block" : "hidden"}`}
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
              <div className="hidden lg:block mx-auto md:w-[125px] md:h-[150px] lg:w-[150px] lg:h-[200px] rounded-[20px] border-[1px] border-[#d5d5d5] mb-2 ">
                <img
                  src={perfil}
                  alt="Bruno Madozzo"
                  title="Bruno Madozzo"
                  className="w-[100%] h-[100%] bg-slate-100 rounded-[20px] object-cover"
                />
              </div>
              <h2 className="text-center text-[#414141] text-[20px] mb-2">
                Bruno Madozzo
              </h2>
              <div className="flex justify-center gap-3 mt-2">
              <a
                href="https://github.com/brunomry"
                target="_blank"
                title="Visita mis proyectos en mi repositorio de Github"
                className="border-[1px] rounded-[4px] bg-[#fff] pt-2 "
                rel="noopener noreferrer"
              >
                <i className=" px-3 text-3xl text-[#222] rounded-[6px] bi bi-github sm:text-[30px]"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/bruno-madozzo/"
                target="_blank"
                title="Visita mi perfil de LinkedIn"
                className="border-[1px] rounded-[4px] bg-[#fff] pt-2 "
                rel="noopener "
              >
                <i className="px-3 text-3xl text-blue-600 rounded-[6px] bi bi-linkedin sm:text-[30px]"></i>
              </a>
            </div>
              <ul className="rounded-[4px] pt-[30px] w-[100%] h-[100%]">
                <li>
                  <a
                    className=" block w-[100%] xl:mb-2 navLink text-[#414141] duration-[0.5s] hover:duration-[0.5s] relative pb-[15px] xl:text-[1.125rem]  text-center"
                    href="#sobremi"
                    onClick={() => desplegarMenu(false)}
                  >
                    Acerca de mí
                  </a>
                </li>
                <li>
                  <a
                    className="block w-[100%] xl:mb-2 navLink text-[#414141] duration-[0.7s] hover:duration-[0.7s] relative pb-[15px] xl:text-[1.125rem]  text-center"
                    href="#tecnologias"
                    onClick={() => desplegarMenu(false)}
                  >
                    Tecnologías
                  </a>
                </li>
                <li>
                  <a
                    className="block xl:mb-2 navLink text-[#414141] duration-[0.7s] hover:duration-[0.7s] relative pb-[15px] xl:text-[1.125rem]  text-center"
                    href="#proyectos"
                    onClick={() => desplegarMenu(false)}
                  >
                    Proyectos
                  </a>
                </li>
                <li>
                  <a
                    className="block xl:mb-2 navLink text-[#414141] duration-[0.7s] hover:duration-[0.7s] relative pb-[15px] xl:text-[1.125rem]  text-center"
                    href="#certificaciones"
                    onClick={() => desplegarMenu(false)}
                  >
                    Certificaciones
                  </a>
                </li>
                <li>
                  <a
                    className="block xl:mb-2 navLink text-[#414141] duration-[0.7s] hover:duration-[0.7s] relative pb-[15px] xl:text-[1.125rem]  text-center"
                    href="#servicios"
                    onClick={() => desplegarMenu(false)}
                  >
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    className="block xl:mb-2 navLink text-[#414141] duration-[0.7s] hover:duration-[0.7s] relative pb-[15px] xl:text-[1.125rem]  text-center"
                    href="#contacto"
                    onClick={() => desplegarMenu(false)}
                  >
                    Contacto
                  </a>
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
