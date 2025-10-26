import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import proyectos from "../helpers/proyectos.js";
import CardCaracteristica from "../components/Proyectos/CardCaracteristica.jsx";

const DetalleProyecto = () => {
  const [proyecto, setProyecto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const proyectoBuscado = proyectos.find((p) => p.id == id);
    setProyecto(proyectoBuscado);
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <section className="flex flex-col w-full min-h-screen px-4 pt-24 lg:pt-32 pb-24 sm:px-8 md:px-14 lg:px-24 xl:px-[150px] 2xl:px-[250px] bg-[#FAFAFA]">
      <Link
        to="/proyectos"
        className="flex items-center gap-2 text-[#555] hover:text-[#2B7FF7] transition mb-6"
      >
        <i className="bi bi-arrow-left text-[20px]"></i>
        <span className="text-sm">Volver a Proyectos</span>
      </Link>
      <header className="flex flex-col gap-6 md:flex-row md:justify-between md:items-start bg-white shadow-sm rounded-2xl p-6 md:p-10 border border-gray-100">
        <div className="flex flex-col gap-4 w-full">
          <h1 className="font-black text-[24px] md:text-[28px] xl:text-[32px] text-[#1d2a4d] leading-tight">
            {proyecto.nombre}
          </h1>
          <p className="text-[#666] text-sm md:text-base font-light">
            {proyecto.descripcion}
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {proyecto.tipo && (
              <span className="bg-[#E4F0FF] text-[#2B7FF7] px-3 py-1 rounded-full text-sm font-medium">
                {proyecto.tipo}
              </span>
            )}
            {proyecto.categoria && (
              <span className="bg-[#D1F7E0] text-[#1D7F5E] px-3 py-1 rounded-full text-sm font-medium">
                {proyecto.categoria}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-2 mt-4 md:mt-0 text-sm md:text-base">
          {proyecto.enlace && (
            <a
              href={proyecto.enlace}
              target="_blank"
              rel="noopener"
              className="flex items-center w-full justify-center gap-2 px-4 py-2 border border-[#2B7FF7] text-[#2B7FF7] rounded-full font-medium hover:bg-[#2B7FF7] hover:text-white transition"
            >
              <span>{proyecto.area === "ui" ? "Figma" : "web"}</span>
              <i className="bi bi-box-arrow-up-right"></i>
            </a>
          )}
          {proyecto.github && (
            <a
              href={proyecto.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full justify-center gap-2 px-4 py-2 border border-[#0a0a0a] text-[#0a0a0a] rounded-full font-medium hover:bg-[#0a0a0a] hover:text-white transition"
            >
              <span>Código</span>
              <i className="bi bi-github"></i>
            </a>
          )}
          {proyecto.archivo && (
            <a
              href={proyecto.archivo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-2 border border-[#E53935] text-[#E53935] rounded-full font-medium hover:bg-[#E53935] hover:text-white transition"
            >
              <span>PDF</span>
              <i className="bi bi-file-earmark-pdf"></i>
            </a>
          )}
        </div>
      </header>
      <article className="mt-4 bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100">
        <h2 className="text-xl md:text-2xl font-bold text-[#1E1E1E] mb-6">
          Información general
        </h2>
        <div className="flex flex-wrap gap-4">
          <CardCaracteristica
            caracteristica="Inicio"
            descripcion={proyecto.fecha}
          />
          <CardCaracteristica
            caracteristica="Duración"
            descripcion={proyecto.duracion}
          />
          <CardCaracteristica
            caracteristica="Último cambio"
            descripcion={proyecto.ultima_actualizacion}
          />
          <CardCaracteristica
            caracteristica="Proyecto"
            descripcion={proyecto.proyecto}
          />
          <CardCaracteristica
            caracteristica="Estado"
            descripcion={proyecto.estado}
          />
        </div>
      </article>
      <article className="mt-4 bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100">
        <h2 className="text-xl md:text-2xl font-bold text-[#1E1E1E] mb-6">
          {proyecto.area === "universidad"
            ? "Herramientas y recursos"
            : "Tecnologías, herramientas y recursos"}
        </h2>
        <div className="flex flex-wrap gap-2">
          {proyecto.tecnologias &&
            proyecto.tecnologias.map((tec, pos) => (
              <span
                key={pos}
                className="bg-[#F5F8FF] border border-[#E3E8F0] text-[#333] font-medium px-4 py-2 rounded-full text-sm"
              >
                {tec.name}
              </span>
            ))}
        </div>
      </article>
      {proyecto.features && proyecto.features.length > 0 && (
        <article className="mt-4 bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100">
          <h2 className="text-xl md:text-2xl font-bold text-[#1E1E1E] mb-6">
            Funcionalidades (Features)
          </h2>
          <ul className="list-disc ms-5 space-y-2">
            {proyecto.features.map((feature, idx) => (
              <li
                key={idx}
                className="text-[#555] font-light text-sm md:text-base leading-relaxed"
              >
                {feature}
              </li>
            ))}
          </ul>
        </article>
      )}
      <article className="mt-4 bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100">
        <h2 className="text-xl md:text-2xl font-bold text-[#1E1E1E] mb-4">
          {proyecto.proyecto === "Freelance" ||
          proyecto.area === "Universidad" ||
          proyecto.area === "ui"
            ? "Aspectos relevantes"
            : "Responsabilidades"}
        </h2>
        <ul className="list-disc ms-5 space-y-2">
          {proyecto.responsabilidades &&
            proyecto.responsabilidades.map((res, pos) => (
              <li
                key={pos}
                className="text-[#555] font-light text-sm md:text-base leading-relaxed"
              >
                {res}
              </li>
            ))}
        </ul>
      </article>
      {proyecto.caracteristicasProyecto &&
        proyecto.caracteristicasProyecto.length > 0 && (
          <article className="mt-4 bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100">
            <h2 className="text-xl md:text-2xl font-bold text-[#1E1E1E] mb-6">
              Características del proyecto
            </h2>
            <ul className="list-disc ms-5 space-y-2">
              {proyecto.caracteristicasProyecto.map((c, idx) => (
                <li
                  key={idx}
                  className="text-[#555] font-light text-sm md:text-base leading-relaxed"
                >
                  {c}
                </li>
              ))}
            </ul>
          </article>
        )}
      {proyecto.area === "ui" && proyecto.images && (
        <article className="mt-6 bg-white rounded-2xl shadow-sm p-4 md:p-8 border border-gray-100">
          <h2 className="text-xl md:text-2xl font-bold text-[#1E1E1E] mb-8">
            Vista del diseño
          </h2>
          <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-center gap-4">
            {proyecto.images.map((img) => (
              <img
                src={img}
                alt={`Vista de ${proyecto.nombre}`}
                className="w-[100%] min-w-[300px] max-w-[375px] rounded-xl shadow-md object-cover h-full"
              />
            ))}
          </div>
        </article>
      )}
      {proyecto.video && (
        <article className="mt-4 bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100">
          <h2 className="text-xl md:text-2xl font-bold text-[#1E1E1E] mb-6">
            Demo rápida
          </h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={proyecto.video}
              title={`Demo ${proyecto.nombre}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            />
          </div>
        </article>
      )}
    </section>
  );
};

export default DetalleProyecto;
