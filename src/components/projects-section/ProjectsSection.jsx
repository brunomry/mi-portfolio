import { useMemo, useState } from "react";
import projects from "../../helpers/projects.js";
import ProjectCard from "./ProjectCard";

const categories = [
  { label: "Sitios y aplicaciones", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Diseño UI", value: "diseño" },
  { label: "Análisis", value: "académico" },
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState("frontend");
  const filteredList = useMemo(() => {
    const priority = filter === "frontend" ? [222, 223, 123] : [];
    return projects
      .filter((project) => project.area.includes(filter))
      .sort((a, b) => {
        const aIndex = priority.indexOf(a.id);
        const bIndex = priority.indexOf(b.id);
        if (aIndex === -1 && bIndex === -1) return 0;
        if (aIndex === -1) return 1;
        if (bIndex === -1) return -1;
        return aIndex - bIndex;
      });
  }, [filter]);

  return (
    <section id="proyectos" className="site-section projects-showcase w-full">
      <div className="mx-auto max-w-[1320px]">
        <div className="section-heading-row projects-heading">
          <div>
            <p className="section-kicker">Casos reales y productos funcionales</p>
            <h2 className="section-display">Proyectos y resultados</h2>
          </div>
          <p className="section-lead">No son ejercicios aislados: cada proyecto parte de una necesidad, una decisión de diseño y una forma concreta de aportar valor.</p>
        </div>

        <div className="project-filters" role="tablist" aria-label="Filtrar proyectos">
          {categories.map((category) => (
            <button key={category.value} type="button" onClick={() => setFilter(category.value)}
              className={filter === category.value ? "is-active" : ""}>
              {category.label}
            </button>
          ))}
        </div>

        <div className="projects-editorial-grid">
          {filteredList.map((project, index) => (
            <ProjectCard key={project.id} project={project} featured index={index} />
          ))}
        </div>

        <div className="projects-footer-note">
          <p>¿Querés ver arquitectura, funcionalidades y decisiones técnicas?</p>
          <span>Abrí cada caso para conocer el proceso completo.</span>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
