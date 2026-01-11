import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import projects from "../helpers/projects.js";
import CharacteristicsCard from "../components/Proyectos/CharacteristicsCard.jsx";

const ProjectDetail = () => {
  const [project, setProject] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const searchedProject = projects.find((p) => p.id == id);
    setProject(searchedProject);
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <section className="flex flex-col w-full min-h-screen px-4 pt-24 lg:pt-32 pb-24 sm:px-8 md:px-14 lg:px-24 xl:px-[150px] 2xl:px-[250px] bg-[#FAFAFA]">
      <Link
        to="/proyectos"
        className="flex items-center gap-2 text-[#555] hover:text-[#000] transition mb-6"
      >
        <i className="bi bi-arrow-left text-[20px]"></i>
        <span className="text-sm">Volver a Proyectos</span>
      </Link>
      <header className="flex flex-col gap-6 md:flex-row md:justify-between md:items-start bg-white shadow-sm rounded-2xl p-6 md:p-10 border border-gray-100">
        <div className="flex flex-col gap-4 w-full">
          <h1 className="font-black text-[24px] md:text-[28px] xl:text-[32px] text-[#000] leading-tight">
            {project.name}
          </h1>
          <p className="text-[#666] text-sm md:text-base font-light">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {project.type && (
              <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-lg text-sm font-medium">
                {project.type}
              </span>
            )}
            {project.category && (
              <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-lg text-sm font-medium">
                {project.category}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-2 mt-4 md:mt-0 text-sm md:text-base">
          {project.enlace && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener"
              className="flex items-center w-full justify-center gap-2 px-4 py-2 border border-[#000] text-[#fff] hover:text-[#000] rounded-lg font-medium bg-[#000] hover:border-[#000] hover:bg-white transition"
            >
              <span>{project.area === "ui" ? "Figma" : "web"}</span>
              <i className="bi bi-box-arrow-up-right"></i>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full justify-center gap-2 px-4 py-2 border border-[#0a0a0a] text-[#0a0a0a] rounded-lg font-medium hover:bg-[#0a0a0a] hover:text-white transition"
            >
              <span>Código</span>
              <i className="bi bi-github"></i>
            </a>
          )}
          {project.file && (
            <a
              href={project.file}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-2 border border-[#E53935] text-[#E53935] rounded-lg font-medium hover:bg-[#E53935] hover:text-white transition"
            >
              <span>PDF</span>
              <i className="bi bi-file-earmark-pdf"></i>
            </a>
          )}
        </div>
      </header>
      <article className="mt-4 bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100">
        <h2 className="text-xl md:text-2xl font-bold text-[#000] mb-6">
          Información general
        </h2>
        <div className="flex flex-wrap gap-4">
          <CharacteristicsCard
            caracteristica="Inicio"
            descripcion={project.date}
          />
          <CharacteristicsCard
            caracteristica="Duración"
            descripcion={project.duration}
          />
          <CharacteristicsCard
            caracteristica="Último cambio"
            descripcion={project.last_update}
          />
          <CharacteristicsCard
            caracteristica="Proyecto"
            descripcion={project.project}
          />
          <CharacteristicsCard
            caracteristica="Estado"
            descripcion={project.status}
          />
        </div>
      </article>
      <article className="mt-4 bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100">
        <h2 className="text-xl md:text-2xl font-bold text-[#000] mb-6">
          {project.area === "universidad"
            ? "Herramientas y recursos"
            : "Tecnologías, herramientas y recursos"}
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies &&
            project.technologies.map((tech, pos) => (
              <span
                key={pos}
                className="bg-gray-200 border border-[#E3E8F0] text-gray-600 font-medium px-4 py-2 rounded-lg text-sm"
              >
                {tech.name}
              </span>
            ))}
        </div>
      </article>
      {project.features && project.features.length > 0 && (
        <article className="mt-4 bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100">
          <h2 className="text-xl md:text-2xl font-bold text-[#000] mb-6">
            Funcionalidades (Features)
          </h2>
          <ul className="list-disc ms-5 space-y-2">
            {project.features.map((feature, idx) => (
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
        <h2 className="text-xl md:text-2xl font-bold text-[#000] mb-4">
          {project.project === "Freelance" ||
          project.area === "Universidad" ||
          project.area === "ui"
            ? "Aspectos relevantes"
            : "Responsabilidades"}
        </h2>
        <ul className="list-disc ms-5 space-y-2">
          {project.responsabilities &&
            project.responsabilities.map((res, pos) => (
              <li
                key={pos}
                className="text-[#555] font-light text-sm md:text-base leading-relaxed"
              >
                {res}
              </li>
            ))}
        </ul>
      </article>
      {project.characteristics && project.characteristics.length > 0 && (
        <article className="mt-4 bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100">
          <h2 className="text-xl md:text-2xl font-bold text-[#000] mb-6">
            Características del proyecto
          </h2>
          <ul className="list-disc ms-5 space-y-2">
            {project.characteristics.map((c, idx) => (
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
      {project.area === "ui" && project.images && (
        <article className="mt-6 bg-white rounded-2xl shadow-sm p-4 md:p-8 border border-gray-100">
          <h2 className="text-xl md:text-2xl font-bold text-[#1E1E1E] mb-8">
            Vista del diseño
          </h2>
          <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-center gap-4">
            {project.images.map((img) => (
              <img
                src={img}
                alt={`Vista de ${project.name}`}
                className="w-[100%] min-w-[300px] max-w-[375px] rounded-xl shadow-md object-cover h-full"
              />
            ))}
          </div>
        </article>
      )}
      {project.video && (
        <article className="mt-4 bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 h-full lg:max-h-[900px] flex flex-col">
          <h2 className="text-xl md:text-2xl font-bold text-[#1E1E1E] mb-6">
            Demo
          </h2>
          <div className="flex-1">
            <video
              src={project.video}
              controls
              controlsList="nodownload noremoteplayback"
              disablePictureInPicture
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </article>
      )}
    </section>
  );
};

export default ProjectDetail;
