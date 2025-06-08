import { useState } from "react";

const NavbarPrincipal = () => {
  const [desplegado, setDesplegado] = useState(window.innerWidth < 768 ? false : true);

  const desplegarMenu = (value) => {
    setDesplegado(value);
  };

  return (
    <>
      { !desplegado ? (
        <header className="w-[100%] h-[64px] fixed bottom-0 left-0 z-[99] bg-[#FAFAFA] flex justify-between items-center px-8 ">
          <small className="text-[#787777] text-[12px]">Bruno Madozzo - Desarrollador web</small>
          <button onClick={() => desplegarMenu(true)}>
            <i
              class={`bi ${desplegado ? "bi-x-lg" : "bi-list"} text-[40px] `}
            ></i>
          </button>
        </header>
      ) : (
        <header className=" w-[100%] h-[100%]  md:h-[96px] fixed top-0 left-0 z-[99] bg-[#FAFAFA] flex flex-col items-center lg:px-10 xl:px-20 2xl:px-40">
          <nav className="w-[100%] h-[100%] flex justify-center items-end lg:justify-between pb-20 md:pb-0 md:items-center">
            <p className="hidden lg:block xl:text-[20px] text-[#0A0A0A] font-black ">
              BrunoMadozzo&#40;&#41;&#59;
            </p>
            <ul className="flex flex-col md:flex-row items-center gap-8 md:gap-8 md:justify-end xl:gap-12 ">
              <li className="">
                <a
                  className="block w-[100%] font-black text-[20px] md:text-[14px] navLink text-[#2B7FF7] md:text-[#787777]    text-center"
                  href="#tecnologias"
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      desplegarMenu(false);
                    }
                  }}
                >
                  Tecnologías
                </a>
              </li>
              <li className="">
                <a
                  className="block font-black text-[20px] md:text-[14px] navLink text-[#2B7FF7] md:text-[#787777]   text-center"
                  href="#proyectos"
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      desplegarMenu(false);
                    }
                  }}
                >
                  Proyectos
                </a>
              </li>
              <li className="">
                <a
                  className="block font-black text-[20px] md:text-[14px] navLink text-[#2B7FF7] md:text-[#787777]   text-center"
                  href="#certificaciones"
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      desplegarMenu(false);
                    }
                  }}
                >
                  Certificaciones
                </a>
              </li>
              <li className="">
                <a
                  className="block font-black text-[20px] md:text-[14px] navLink text-[#2B7FF7] md:text-[#787777]   text-center"
                  href="#servicios"
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      desplegarMenu(false);
                    }
                  }}
                >
                  Servicios
                </a>
              </li>
              <li className="">
                <a
                  className="block font-black text-[20px] md:text-[14px] navLink text-[#2B7FF7] md:text-[#787777]   text-center"
                  href="#servicios"
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      desplegarMenu(false);
                    }
                  }}
                >
                  Testimonios
                </a>
              </li>
              <li className="">
                <a
                  className="block font-black text-[20px] md:text-[14px] navLink text-[#2B7FF7] md:text-[#787777]   text-center"
                  href="#contacto"
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      desplegarMenu(false);
                    }
                  }}
                >
                  Contacto
                </a>
              </li>
              <li className="">
                <div className="">
                  <i class="bi bi-moon text-[25px]"></i>
                  <i class="bi bi-moon-fill text-[25px] hidden"></i>
                </div>
              </li>
            </ul>
          </nav>
          <button
            onClick={() => {
              if (window.innerWidth < 768) {
                desplegarMenu(false);
              }
            }}
            className="w-[100%] flex justify-end px-8 md:hidden"
          >
            <i
              class={`bi ${desplegado ? "bi-x-lg" : "bi-list"} text-[40px] `}
            ></i>
          </button>
        </header>
      )}
    </>
  );
};

export default NavbarPrincipal;
