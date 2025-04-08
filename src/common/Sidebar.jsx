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
    <nav className="fixed bottom-0 bg-white w-[100%] h-[80px] z-10 lg:h-[100vh] lg:w-[25%] xl:w-[20%] lg:top-0 lg:right-0  lg:flex justify-center ">
      <div className="lg:px-0 flex justify-between w-[100%] lg:w-[initial]">
        {/* <div
          className={`flex w-[100%] justify-between px-4 lg:hidden ${
            desplegado ? "hidden" : "block"
          }`}
        >
          <button
            className={`text-[#222] hidden md:block lg:hidden ${
              desplegado ? "hidden" : "block"
            }`}
            type="button"
            title="menu"
            onClick={() => desplegarMenu(true)}
          >
            <i className="lg:hidden bi lg:hidden bi-list text-[35px]"></i>
          </button>
        </div> */}
        <div
          className={`w-[100%] py-4 block `}
        >
          {/* <div className="flex justify-end px-4">
            <button
              type="button"
              title="cerrar"
              className={`text-[#222] lg:hidden ${
                desplegado ? "block duration-[0.8s]" : "hidden"
              }`}
              onClick={() => desplegarMenu(false)}
            >
              <i className="lg:hidden bi lg:hidden bi-x-lg text-[20px] font-bold"></i>
            </button>
          </div> */}
          <div className="px-0 w-[100%]">
            <div
              className={`w-[100%] lg:block lg:justify-center py-3 items-center gap-2 sm:gap-4 xl:pt-[30px]
             flex flex-col justify-center
              } `}
            >
              <div className="hidden lg:block mx-auto md:w-[125px] md:h-[150px] lg:h-[125px] xl:w-[150px] xl:h-[150px]  rounded-[20px] border-[8px] border-[#e2e2e2] mb-2 ">
                <img
                  src={perfil}
                  alt="Bruno Madozzo"
                  title="Bruno Madozzo"
                  className="w-[100%] h-[100%] bg-slate-100 rounded-[12px] object-cover"
                />
              </div>
              <div className="hidden lg:block text-center mb-2">
                <h2 className="text-center font-bold text-[#375c86] text-[20px] ">
                  Bruno Madozzo
                </h2>
                <p className="text-gray-600">Desarrollador Frontend</p>
              </div>

              <div className="hidden lg:flex justify-center items-center gap-3">
                <a
                  href="https://github.com/brunomry"
                  target="_blank"
                  title="Visita mis proyectos en mi repositorio de Github"
                  className="rounded-[100%] border-[1px] border-[#375c86] p-1 flex items-center justify-center"
                  rel="noopener noreferrer"
                >
                  <i className="px-2 text-[#375c86] rounded-[6px] pt-1 bi  bi-github sm:text-[20px]"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/bruno-madozzo/"
                  target="_blank"
                  title="Visita mi perfil de LinkedIn"
                  className=" rounded-full border-[1px] border-[#375c86] py-1 flex items-center justify-center"
                >
                  <i className="px-3  text-[#375c86] rounded-[6px] pt-1  bi bi-linkedin sm:text-[20px]"></i>
                </a>
              </div>
              <ul className="rounded-[4px] flex justify-evenly border-t lg:gap-5 lg:border-0 px-0 overflow-x-scroll lg:block lg:pt-[30px] w-[100%] h-[100%]">
                <li>
                  <Link
                    className="flex flex-col justify-center items-center py-2 border-e pe-2 lg:py-0 lg:border-0 lg:pe-0 text-[12px] md:text-[14px]  xl:text-[1rem] lg:block w-[100%] lg:mb-2 xl:mb-4 navLink text-[#414141] duration-[0.5s] hover:duration-[0.5s] relative pb-[15px]   text-center"
                    to={"/"}
                    onClick={() => desplegarMenu(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="lg:hidden bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg>
                    <span>Sobre mí</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex flex-col justify-center items-center py-2 border-e pe-2 lg:py-0 lg:border-0 lg:pe-0 text-[12px] md:text-[14px] xl:text-[1rem] lg:block w-[100%] lg:mb-2 xl:mb-4 navLink text-[#414141] duration-[0.7s] hover:duration-[0.7s] relative pb-[15px]   text-center"
                    to={"/tecnologias"}
                    onClick={() => desplegarMenu(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="lg:hidden bi bi-code" viewBox="0 0 16 16">
  <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z"/>
</svg>
                    <span>Tecnologías</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex flex-col justify-center items-center py-2 border-e pe-2 lg:py-0 lg:border-0 lg:pe-0 text-[12px] md:text-[14px] xl:text-[1rem] lg:block lg:mb-2 xl:mb-4 navLink text-[#414141] duration-[0.7s] hover:duration-[0.7s] relative pb-[15px]   text-center"
                    to={"/proyectos"}
                    onClick={() => desplegarMenu(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="lg:hidden bi bi-collection" viewBox="0 0 16 16">
  <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5z"/>
</svg>
                    <span>Proyectos</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex flex-col justify-center items-center py-2 border-e pe-2 lg:py-0 lg:border-0 lg:pe-0 text-[12px] md:text-[14px] xl:text-[1rem] lg:block xl:mb-2 navLink text-[#414141] duration-[0.7s] hover:duration-[0.7s] relative pb-[15px]   text-center"
                    to={"/testimonios"}
                    onClick={() => desplegarMenu(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="lg:hidden bi bi-chat-dots" viewBox="0 0 16 16">
  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
  <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2"/>
</svg>
                   <span>Testimonios</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex flex-col justify-center items-center py-2 text-[12px] md:text-[14px] xl:text-[1rem] lg:block 2xl:mb-2 navLink text-[#414141] duration-[0.7s] hover:duration-[0.7s] relative pb-[15px]   text-center"
                    to={"/educacion"}
                    onClick={() => desplegarMenu(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="lg:hidden bi bi-mortarboard" viewBox="0 0 16 16">
  <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z"/>
  <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z"/>
</svg>
                    <span>Educación</span>
                  </Link>
                </li>
                {/* <li>
                  <Link
                    className="block 2xl:mb-2 navLink text-[#414141] duration-[0.7s] hover:duration-[0.7s] relative pb-[15px]   text-center"
                    to={"/servicios"}
                    onClick={() => desplegarMenu(false)}
                  >
                    Servicios
                  </Link>
                </li> */}
                <li className="hidden lg:flex justify-center mb-2 w-[100%]">
                  <a
                    as={Link}
                    className="text-[12px] md:text-[14px] xl:text-[1rem] text-center xl:px-5 py-[7px] w-[150px] xl:w-[170px] rounded-[45px] bg-[#000] text-white hover:bg-[#f7f7f7] hover:text-[#222] border hover:border hover:border-[#000]"
                    href="#footer"
                    onClick={() => desplegarMenu(false)}
                    title="Contáctame a través de mis redes sociales"
                  >
                    <span>Contáctame</span>
                  </a>
                </li>
                <li className="hidden lg:block text-center">
                  <button
                    className="text-[12px] md:text-[14px] xl:text-[1rem] xl:px-5 py-[5px]  w-[150px] xl:w-[170px] rounded-[45px] hover:bg-[#375c86] hover:text-[#fff] border-[#375c86] text-[#375c86] border-[1px] hover:border-[#375c86]"
                    onClick={handleDownloadPDF}
                    title="haz clic para descargar mi CV"
                  >
                    Descargar CV <i className="lg:hidden bi bi-download ms-2"></i>
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
