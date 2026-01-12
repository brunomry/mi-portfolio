import { useState, useEffect } from "react";
import projects from "../../helpers/projects";
import ProjectCard from "./ProjectCard";

const categories = ["Frontend", "Backend", "UI", "Universidad"];

const ProjectsSection = ({ mostrar }) => {
  const [filter, setFilter] = useState("Frontend");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    filterProjects(filter);
  }, [filter]);

  const filterProjects = (categoria) => {
    let filtered = [];
    switch (categoria) {
      case "Frontend":
        filtered = projects.filter((p) => p.area.includes("frontend"));
        break;
      case "Backend":
        filtered = projects.filter((p) => p.area.includes("backend"));
        break;
      case "UI":
        filtered = projects.filter((p) => p.area.includes("ui"));
        break;
      case "Universidad":
        filtered = projects.filter((p) => p.area.includes("universidad"));
        break;
      default:
        filtered = projects;
    }
    setFilteredList(filtered);
  };

  return (
    <section
      id="proyectos"
      className="w-[100%] py-12 xl:py-20 2xl:py-40 px-4 md:px-8 lg:px-[100px] xl:px-[120px] 2xl:px-[150px] flex flex-col gap-4 md:gap-6 bg-[#f9f9f9] "
    >
      <h2 className="font-extrabold text-[24px] md:text-[28px] xl:text-[32px] 2xl:text-[36px] text-[#000] xl:mb-4">
        Proyectos
      </h2>
      <p className="text-[#555] text-sm md:text-base font-light">
        Estos son algunos de mis proyectos, que incluyen aplicaciones web,
        sitios web, landing pages y trabajos académicos. Cada proyecto muestra
        soluciones prácticas, diseño de interfaces y funcionalidades
        desarrolladas con diversas tecnologías modernas.
      </p>
      <article className="flex gap-2 md:gap-4 mt-4 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full font-medium text-sm md:text-base transition 
              ${
                filter === cat
                  ? "bg-[#595c61] text-white"
                  : "bg-[#e0e0e0] text-[#333] hover:bg-[#b4b4b4]"
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
