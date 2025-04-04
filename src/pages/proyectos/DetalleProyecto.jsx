import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import proyectos from "../../helpers/proyectos";

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
    <section className=" py-3 flex flex-col gap-3 xl:gap-4 items-center px-3 xl:w-[80%] min-h-[100vh] xl:py-[100px] fondo ">
      <div className="w-[80%] rounded-[10px] px-10 py-10 shadow-xl bg-[white]">
        <div className="flex gap-12 mb-8">
          <h1 className="  font-bold text-[25px] text-start xl:text-[30px] 2xl:text-[40px] text-[#333]">
            {proyecto.nombre}
          </h1>
          <div className="flex gap-3">
            <Link
              className="flex items-center justify-center px-5 w-[fit-content] text-[#375c86]  border-[#375c86] hover:bg-[#375c86] hover:text-[#fff] rounded-[45px] border text-[1rem] xl:text-[1.25rem] gap-3"
              title="Ver más información del proyecto"
              to={`/detalleproyecto/${proyecto.id}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
              <span>VER DEMO</span>
            </Link>
            <Link
              className="flex items-center justify-center px-5 w-[fit-content] rounded-[45px] bg-zinc-900 text-white border-[1px] text-[1rem] xl:text-[1.25rem] gap-2"
              title="Ver más información del proyecto"
              to={`${proyecto.github}`}
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
              <span>CÓDIGO</span>
            </Link>
          </div>
        </div>

        <p className="w-[100%] xl:text-[1.25rem] text-gray-600 mb-4">
          {proyecto.descripcion}
        </p>
        <article className="flex gap-3 flex-wrap">
          <div className="mt-4 rounded-[15px] px-10 py-5 flex flex-col  shadow-lg bg-[white] w-[fit-content]">
            <p className="font-bold xl:text-[1.125rem]">Tipo:</p>
            <p className="font-bold xl:text-[1.25rem] text-pink-700">
              {proyecto.tipo}
            </p>
          </div>
          <div className="mt-4 rounded-[15px] px-10 py-5 flex flex-col  shadow-lg bg-[white] w-[fit-content]">
            <p className="font-bold xl:text-[1.125rem]">Categoría:</p>
            <p className="font-bold xl:text-[1.25rem] text-pink-700">
              {proyecto.categoria}
            </p>
          </div>
          <div className="mt-4 rounded-[15px] px-10 py-5 flex flex-col  shadow-lg bg-[white] w-[fit-content]">
            <p className="font-bold xl:text-[1.125rem]">Inicio:</p>
            <p className="font-bold xl:text-[1.25rem] text-pink-700">
              {proyecto.fecha}
            </p>
          </div>
          <div className="mt-4 rounded-[15px] px-10 py-5 flex flex-col  shadow-lg bg-[white] w-[fit-content]">
            <p className="font-bold xl:text-[1.125rem]">Duración:</p>
            <p className="font-bold xl:text-[1.25rem] text-pink-700">
              {proyecto.duracion}
            </p>
          </div>
          <div className="mt-4 rounded-[15px] px-10 py-5 flex flex-col  shadow-lg bg-[white] w-[fit-content]">
            <p className="font-bold xl:text-[1.125rem]">
              Última actualización:
            </p>
            <p className="font-bold xl:text-[1.25rem] text-pink-700">
              {proyecto.ultima_actualizacion}
            </p>
          </div>
          <div className="mt-4 rounded-[15px] px-10 py-5 flex flex-col  shadow-lg bg-[white] w-[fit-content]">
            <p className="font-bold xl:text-[1.125rem]">Proyecto:</p>
            <p className="font-bold xl:text-[1.25rem] text-pink-700">
              {proyecto.proyecto}
            </p>
          </div>
        </article>
        <article className="mt-10">
          <h2 className=" mb-4 font-bold text-[25px] text-start xl:text-[30px] 2xl:text-[25px] text-[#333]">
            Tecnologías o herramientas
          </h2>
          <div className="flex containerTech xl:w-[100%] h-[200px] sm:h-[100%] gap-2 md:gap-2 md:flex-wrap">
            {proyecto.tecnologias &&
              proyecto.tecnologias.map((tec, pos) => (
                <p
                  key={pos}
                  className="rounded-[20px] py-2 px-4 bg-slate-100  text-[#375c86] w-[fit-content]  md:text-[1rem] xl:text-[1.25rem]"
                >
                  {tec.name}
                </p>
              ))}
          </div>
        </article>
        <article className="mt-10">
          <h2 className=" mb-4 font-bold text-[25px] text-start xl:text-[30px] 2xl:text-[25px] text-[#333]">
            {proyecto.proyecto !== "En equipo"
              ? "Aspectos relevantes"
              : "Responsabilidades"}
          </h2>
          <ul className="list-disc xl:w-[100%] h-[200px] sm:h-[100%] ms-5">
            {proyecto.responsabilidades &&
              proyecto.responsabilidades.map((res, pos) => (
                <li
                  key={pos}
                  className="rounded-[20px] text-gray-600 w-[fit-content] mb-3 md:text-[1rem] xl:text-[1.25rem]"
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
