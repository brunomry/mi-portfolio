import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import projects from "../helpers/projects.js";
import CharacteristicsCard from "../components/projects-section/CharacteristicsCard.jsx";

const DetailSection = ({ title, children, className = "" }) => (
  <article className={`detail-card p-6 md:p-9 ${className}`}>
    <h2 className="detail-section-title mb-6">{title}</h2>
    {children}
  </article>
);

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((item) => item.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <main className="detail-page grid min-h-screen place-items-center px-5">
        <div className="text-center">
          <h1 className="text-3xl font-black text-[#102a43]">Proyecto no encontrado</h1>
          <Link className="button-primary mt-6 inline-flex" to="/proyectos">Volver a proyectos</Link>
        </div>
      </main>
    );
  }

  const relevantTitle =
    project.project === "Freelance" || project.area === "Universidad" || project.area === "ui"
      ? "Aspectos relevantes"
      : "Mi aporte y responsabilidades";

  return (
    <main className="detail-page min-h-screen px-5 pb-24 pt-28 md:px-8 md:pt-32 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <Link to="/proyectos" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#486581] transition hover:text-[#0b6e69]">
          <i className="bi bi-arrow-left" /> Volver a proyectos
        </Link>

        <header className="detail-hero p-6 md:p-10 lg:p-14">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-[820px]">
              <p className="detail-kicker mb-4">{project.category} · {project.type}</p>
              <h1 className="detail-title font-black">{project.name}</h1>
              <p className="mt-6 max-w-[780px] text-base leading-8 text-[#486581] md:text-lg">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="tag-pill rounded-full px-3 py-1.5 text-xs font-bold">{project.status}</span>
                <span className="rounded-full border border-[#dce6ec] bg-white px-3 py-1.5 text-xs font-bold text-[#486581]">{project.project}</span>
              </div>
            </div>

            <div className="flex min-w-fit flex-wrap gap-3">
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="button-primary flex items-center justify-center gap-2 border">
                  {project.area === "diseño" ? "Ver en Figma" : "Visitar proyecto"} <i className="bi bi-arrow-up-right" />
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="button-secondary flex items-center justify-center gap-2 border">
                  Código <i className="bi bi-github" />
                </a>
              )}
              {project.file && (
                <a href={project.file} target="_blank" rel="noopener noreferrer" className="button-secondary flex items-center justify-center gap-2 border">
                  Ver documento <i className="bi bi-file-earmark-pdf" />
                </a>
              )}
            </div>
          </div>
        </header>

        <div className="mt-6 grid gap-6 lg:grid-cols-12">
          {project.problem && (
            <DetailSection title="El problema" className="lg:col-span-6">
              <p className="text-base leading-8 text-[#486581]">{project.problem}</p>
            </DetailSection>
          )}

          {project.outcome && (
            <DetailSection title="La solución" className="lg:col-span-6">
              <p className="text-base leading-8 text-[#486581]">{project.outcome}</p>
            </DetailSection>
          )}

          {project.outcomeDetail && (
            <article className="overflow-hidden rounded-[1.5rem] border border-[#b9ddd8] bg-[#e8f4f2] p-6 md:p-9 lg:col-span-12">
              <p className="detail-kicker mb-3">{project.outcomeLabel || "Impacto"}</p>
              <p className="max-w-[1000px] text-lg font-semibold leading-8 text-[#164e4a] md:text-xl">
                {project.outcomeDetail}
              </p>
            </article>
          )}

          <DetailSection title="Ficha del proyecto" className="lg:col-span-12">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
              <CharacteristicsCard caracteristica="Inicio" descripcion={project.date} />
              <CharacteristicsCard caracteristica="Duración" descripcion={project.duration} />
              <CharacteristicsCard caracteristica="Último cambio" descripcion={project.last_update} />
              <CharacteristicsCard caracteristica="Modalidad" descripcion={project.project} />
              <CharacteristicsCard caracteristica="Estado" descripcion={project.status} />
            </div>
          </DetailSection>

          {project.video && (
            <DetailSection title="Demo del producto" className="lg:col-span-12">
              <video src={project.video} controls controlsList="nodownload noremoteplayback" disablePictureInPicture
                className={`max-h-[760px] w-full rounded-2xl bg-[#102a43] object-contain ${
                  project.id === 123 ? "aspect-[4/3] md:aspect-auto" : ""
                }`} />
            </DetailSection>
          )}

          <DetailSection title={project.area === "universidad" ? "Herramientas y recursos" : "Stack y herramientas"} className="lg:col-span-5">
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech) => (
                <span key={tech.name} className="tag-pill rounded-full px-3 py-2 text-sm font-semibold">{tech.name}</span>
              ))}
            </div>
          </DetailSection>

          <DetailSection title={relevantTitle} className="lg:col-span-7">
            <ul className="detail-list">
              {project.responsabilities?.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </DetailSection>

          {project.features?.length > 0 && (
            <DetailSection title="Funcionalidades principales" className="lg:col-span-6">
              <ul className="detail-list">
                {project.features.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </DetailSection>
          )}

          {project.characteristics?.length > 0 && (
            <DetailSection title="Decisiones y características" className="lg:col-span-6">
              <ul className="detail-list">
                {project.characteristics.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </DetailSection>
          )}

          {project.area === "diseño" && project.images?.length > 0 && (
            <DetailSection title="Vistas del diseño" className="lg:col-span-12">
              <div className="flex flex-col items-center justify-center gap-5 lg:flex-row lg:items-start">
                {project.images.map((image, index) => (
                  <img key={image} src={image} alt={`Vista ${index + 1} de ${project.name}`}
                    className="w-full max-w-[390px] rounded-2xl border border-[#dce6ec] shadow-lg" />
                ))}
              </div>
            </DetailSection>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;
