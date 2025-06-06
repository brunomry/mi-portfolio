import { useState } from "react";

const MenuNavegacion = () => {
  const [desplegado, setDesplegado] = useState();

  const desplegarMenu = (value) => {
    setDesplegado(value);
  };

  return (
    <header className=" w-[100%] h-[96px] fixed top-0 left-0 z-[99] bg-[#FAFAFA] flex items-center px-40">
      <nav className="w-[100%] flex justify-between">
        <div
          className={`w-[100%] justify-between px-4 ${
            desplegado ? "hidden" : "hidden"
          }`}
        >
          <button
            className={`text-[#222] lg:hidden ${
              desplegado ? "hidden" : "block"
            }`}
            type="button"
            title="menu"
            onClick={() => desplegarMenu(true)}
          >
            <i className="bi bi-list text-[25px]"></i>
          </button>
        </div>
        <p className="text-[20px] text-[#414141]">BM</p>
        <ul className=" flex items-center gap-12">
          <li className="">
            <a
              className=" block w-[fit-content] text-[14px] navLink text-[#414141] duration-[0.5s] hover:duration-[0.5s] relative   text-center"
              href="#sobremi"
              onClick={() => desplegarMenu(false)}
            >
              Sobre Mi
            </a>
          </li>
          <li>
            <a
              className="block w-[100%] text-[14px] navLink text-[#414141]  duration-[0.7s] hover:duration-[0.7s]    text-center"
              href="#tecnologias"
              onClick={() => desplegarMenu(false)}
            >
              Tecnologías
            </a>
          </li>
          <li>
            <a
              className="block text-[14px] navLink text-[#414141] duration-[0.7s] hover:duration-[0.7s]    text-center"
              href="#proyectos"
              onClick={() => desplegarMenu(false)}
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              className="block text-[14px] navLink text-[#414141] duration-[0.7s] hover:duration-[0.7s]    text-center"
              href="#certificaciones"
              onClick={() => desplegarMenu(false)}
            >
              Certificaciones
            </a>
          </li>
          <li>
            <a
              className="block text-[14px] navLink text-[#414141] duration-[0.7s] hover:duration-[0.7s]    text-center"
              href="#servicios"
              onClick={() => desplegarMenu(false)}
            >
              Servicios
            </a>
          </li>
          <li>
            <a
              className="block text-[14px] navLink text-[#414141] duration-[0.7s] hover:duration-[0.7s]    text-center"
              href="#contacto"
              onClick={() => desplegarMenu(false)}
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MenuNavegacion;
