import { useState, useEffect } from "react";
import projects from "../../helpers/projects.js";
import ProjectCard from "./ProjectCard";

const categories = ["Páginas", "Funcionalidad", "Diseño", "Académico"];

const ProjectsSection = ({ mostrar }) => {
  const [filter, setFilter] = useState("Páginas");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    filterProjects(filter);
  }, [filter]);

  const filterProjects = (categoria) => {
    let filtered = [];
    switch (categoria) {
      case "Páginas":
        filtered = projects.filter((p) => p.area.includes("frontend"));
        break;
      case "Funcionalidad":
        filtered = projects.filter((p) => p.area.includes("backend"));
        break;
      case "Diseño":
        filtered = projects.filter((p) => p.area.includes("diseño"));
        break;
      case "Académico":
        filtered = projects.filter((p) => p.area.includes("académico"));
        break;
      default:
        filtered = projects;
    }
    setFilteredList(filtered);
  };

  return (
    <section
      id="proyectos"
      className="site-section section-tint w-full flex flex-col gap-4 md:gap-6"
    >
      <h2 className="font-extrabold text-[24px] md:text-[28px] xl:text-[32px] 2xl:text-[36px] text-[#222] xl:mb-4">
        Proyectos
      </h2>
      <p className="text-[#555] text-sm md:text-base font-light">
        Estos son algunos de mis proyectos, que incluyen aplicaciones web,
        sitios web, landing pages y trabajos académicos.
      </p>
      <p className="text-[#555] text-sm md:text-base font-light">
        Cada proyecto muestra
        soluciones prácticas, diseño de interfaces y funcionalidades
        desarrolladas con diversas tecnologías modernas.
      </p>
      <article className="flex gap-2 md:gap-4 mt-4 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`filter-button px-4 py-2 rounded-full font-semibold text-sm transition
              ${
                filter === cat
                  ? "filter-button-active"
                  : ""
              }`}
          >
            {cat}
          </button>
        ))}
      </article>
      <div
        className={`mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:gap-8 ${
          filteredList.length === 3 ? "justify-items-center" : ""
        }`}
      >
        {filteredList.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
