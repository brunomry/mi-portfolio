import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import proyectos from "../helpers/proyectos.js";
import CardCaracteristica from "./CardCaracteristica.jsx";

const DetalleProyecto = () => {
  const [proyecto, setProyecto] = useState({});

  const { id } = useParams();

  const obtenerProyecto = () => {
    const proyectoBuscado = proyectos.find((p) => p.id == id);
    console.log(proyectoBuscado);

    setProyecto(proyectoBuscado);
  };

  useEffect(() => {
    obtenerProyecto();
  }, [id]);

  return (
    <section className=" py-3 flex flex-col gap-3 xl:gap-4 items-center px-3 md:py-20 md:px-8 lg:px-20 lg:py-[150px] fondo xl:px-[150px] 2xl:px-[250px]">
      <Link className="w-[100%] flex justify-start items-center gap-2 " to={"/proyectos/otros-proyectos"}>
        <i class="bi bi-arrow-left text-[20px] text-[#787777]"></i>
        <span className="text-[#787777]">Proyectos</span>
      </Link>
      <div className=" rounded-[10px] 2xl:px-[100px] flex flex-col gap-4">
        <div className="flex gap-12">
          <h1 className="  font-black text-[25px] text-start xl:text-[30px] text-[#333]">
            {proyecto.nombre}
          </h1>
          <div className="flex gap-3">
            <Link
              className="flex items-center justify-center px-8 w-[fit-content] text-[#2B7FF7]  border-[#2B7FF7] hover:bg-[#2B7FF7] hover:text-[#fff] rounded-[45px] border text-[1rem] gap-3"
              title="Ver más información del proyecto"
              to={`/detalleproyecto/${proyecto.id}`}
            >             
              <span>Web</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-box-arrow-up-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                />
                <path
                  fill-rule="evenodd"
                  d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                />
              </svg>
            </Link>
            <Link
              className="flex items-center justify-center px-5 w-[fit-content] rounded-[45px] bg-zinc-900 text-white border-[1px] text-[1rem] gap-2"
              title="Ver más información del proyecto"
              to={`${proyecto.github}`}
              target="_blank"
            >
              
              <span>Código</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </Link>
          </div>
        </div>
        <p className="w-[100%] text-[#787777]">
          {proyecto.descripcion}
        </p>
        <article className="flex gap-4 flex-wrap">
          <CardCaracteristica caracteristica="Tipo" descripcion={proyecto.tipo}></CardCaracteristica>
          <CardCaracteristica caracteristica="Categoría" descripcion={proyecto.categoria}></CardCaracteristica>
          <CardCaracteristica caracteristica="Inicio" descripcion={proyecto.fecha}></CardCaracteristica>
          <CardCaracteristica caracteristica="Duración" descripcion={proyecto.duracion}></CardCaracteristica>
          <CardCaracteristica caracteristica="Último cambio" descripcion={proyecto.ultima_actualizacion}></CardCaracteristica>
        </article>
        <article className="">
          <h2 className=" mb-4 font-bold text-[18px] text-start text-[#333]">
            Tecnologías o herramientas
          </h2>
          <div className="flex containerTech xl:w-[100%] h-[200px] sm:h-[100%] gap-2 md:gap-4 md:flex-wrap">
            {proyecto.tecnologias &&
              proyecto.tecnologias.map((tec, pos) => (
                <p
                  key={pos}
                  className="rounded-[8px] py-2 px-4 bg-[#Fff]  text-[#787777] shadow w-[fit-content]  md:text-[1rem]"
                >
                  {tec.name}
                </p>
              ))}
          </div>
        </article>
        <article className="">
          <h2 className=" mb-4 font-bold text-start text-[18px] text-[#333]">
            {proyecto.proyecto !== "En equipo"
              ? "Aspectos relevantes"
              : "Responsabilidades"}
          </h2>
          <ul className="list-disc xl:w-[100%] h-[200px] sm:h-[100%] ms-5">
            {proyecto.responsabilidades &&
              proyecto.responsabilidades.map((res, pos) => (
                <li
                  key={pos}
                  className="rounded-[20px] text-[#787777] w-[fit-content] mb-3 md:text-[1rem] "
                >
                  {res}
                </li>
              ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default DetalleProyecto;