import perfil from "../assets/perfilbg.png";
import { useState } from "react";

const Menu = () => {
  const [desplegado, setDesplegado] = useState();

  const desplegarMenu = (value) => {
    setDesplegado(value);
  };

  return (
    <nav class="w-[100%] h-[80px] lg:h-[100vh] lg:w-[25%] xl:w-[20%] fixed top-0 left-0 bg-[#028891] flex justify-center z-[99]">
      <div class="lg:px-0 flex justify-between w-[100%] lg:w-[initial]">
        <div
          class={`flex w-[100%] justify-between px-4 lg:hidden ${
            desplegado ? "hidden" : "block"
          }`}
        >
          <h2 className="block my-auto text-white font-bold text-[1.125rem]">
            Bruno Madozzo
          </h2>
          <button
            class={`text-white lg:hidden ${desplegado ? "hidden" : "block"}`}
            type="button"
            title="menu"
            onClick={() => desplegarMenu(true)}
          >
            <i class="bi bi-list text-[50px]"></i>
          </button>
        </div>
        <div
          class={`w-[100%] py-4 lg:block ${desplegado ? "block" : "hidden"}`}
        >
          <div class="flex justify-end px-4">
            <button
              type="button"
              title="cerrar"
              class={`text-white lg:hidden ${
                desplegado ? "block duration-[0.8s]" : "hidden"
              }`}
              onClick={() => desplegarMenu(false)}
            >
              <i class="bi bi-x-lg text-[25px]"></i>
            </button>
          </div>
          <div class="px-0 w-[100%]">
            <div
              class={`w-[100%] lg:block lg:justify-center py-3 items-center gap-2 sm:gap-4 xl:pt-[30px] ${
                desplegado ? "flex flex-col bg-[#028891]" : "hidden"
              } `}
            >
              <div class="hidden lg:block mx-auto md:w-[125px] md:h-[125px] xl:w-[150px] xl:h-[150px] rounded-[50%] border-[5px] border-[#12c0bd] lg:w-[180px] lg:h-[180px] mb-2 shadow">
                <img
                  src={perfil}
                  alt="Bruno Madozzo"
                  title="Bruno Madozzo"
                  class="shadow-xl w-[100%] h-[100%] rounded-[50%] object-cover"
                />
              </div>
              <h2 class="text-center text-white text-[25px] mb-2">
                Bruno Madozzo
              </h2>
              <div class="flex justify-center xl:mb-4 gap-3">
                <a
                  href="https://github.com/brunomry"
                  target="_blank"
                  title="Visita mis proyectos en mi repositorio de Github"
                >
                  <i class="bi bi-github text-white text-3xl sm:text-4xl"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/bruno-madozzo/"
                  target="_blank"
                  title="Visita mi perfil de LinkedIn"
                >
                  <i class="bi bi-linkedin text-white text-3xl sm:text-4xl"></i>
                </a>
              </div>
              <ul class="rounded-[4px] pt-[30px] w-[100%] h-[100%]">
                <li>
                  <a
                    class=" block w-[100%] font-bold xl:mb-2 navLink text-[#f6e8e8] duration-[0.5s] hover:duration-[0.5s] relative pb-[15px] xl:text-[1.125rem]  text-center"
                    href="#sobremi"
                    onClick={() => desplegarMenu(false)}
                  >
                    Acerca de mí
                  </a>
                </li>
                <li>
                  <a
                    class="block w-[100%] font-bold xl:mb-2 navLink text-[#f6e8e8] duration-[0.7s] hover:duration-[0.7s] relative pb-[15px] xl:text-[1.125rem]  text-center"
                    href="#tecnologias"
                    onClick={() => desplegarMenu(false)}
                  >
                    Tecnologías
                  </a>
                </li>
                <li>
                  <a
                    class="block font-bold xl:mb-2 navLink text-[#f6e8e8] duration-[0.7s] hover:duration-[0.7s] relative pb-[15px] xl:text-[1.125rem]  text-center"
                    href="#proyectos"
                    onClick={() => desplegarMenu(false)}
                  >
                    Proyectos
                  </a>
                </li>
                <li>
                  <a
                    class="block font-bold xl:mb-2 navLink text-[#f6e8e8] duration-[0.7s] hover:duration-[0.7s] relative pb-[15px] xl:text-[1.125rem]  text-center"
                    href="#certificaciones"
                    onClick={() => desplegarMenu(false)}
                  >
                    Certificaciones
                  </a>
                </li>
                <li>
                  <a
                    class="block font-bold xl:mb-2 navLink text-[#f6e8e8] duration-[0.7s] hover:duration-[0.7s] relative pb-[15px] xl:text-[1.125rem]  text-center"
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

export default Menu;
