import { Link } from "react-router-dom";

const ProjectCard= ({ project }) => {
  const mainTech = project.technologies.slice(0, 3);

  return (
    <article className="project-card surface-card relative bg-white w-full max-w-[480px] flex flex-col overflow-hidden">
      <span className="absolute top-4 left-4 bg-[#102a43] text-white text-[11px] font-bold px-3 py-1.5 rounded-full z-10 shadow-md uppercase tracking-wider">
        {project.status}
      </span>
      <img
        src={project.image}
        alt={project.name}
        title={project.name}
        className="project-image w-full h-[240px] lg:h-[280px] object-cover"
      />
      <div className="p-5 flex flex-col gap-3">
        <div>
          <h3 className="font-extrabold text-lg md:text-xl text-[#222]">
            {project.name}
          </h3>
          <p className="text-[#999] text-sm md:text-base mt-1">
            {project.category}
          </p>
        </div>
        <p className="text-[#555] text-sm md:text-base">{project.tipo}</p>
        {mainTech.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {mainTech.map((tech, index) => (
              <span
                key={index}
                className="tag-pill px-3 py-1 rounded-full text-xs font-semibold"
              >
                {tech.name}
              </span>
            ))}
          </div>
        )}
        <div className="flex items-center justify-between mt-3 text-xs md:text-sm text-[#999]">
          <span>
            Última actualización:{" "}
            {project.last_update || project.date}
          </span>
          <span className="font-semibold text-[#222]">
            {project.project}
          </span>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center text-sm md:text-base bg-gray-600 border border-gray-600 text-white px-3 py-1 rounded-md hover:bg-[#333] hover:border-[#333] transition"
            >
              Código <i className="bi bi-github text-base"></i>
            </a>
          )}
          {project.area === "frontend" && project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center text-sm md:text-base bg-[#000] text-white border border-[#000] hover:bg-[#fff] px-3 py-1 rounded-md hover:border-[#000] hover:text-[#222] transition"
            >
              Web{" "}
              <i className="bi bi-box-arrow-up-right text-sm md:text-base"></i>
            </a>
          )}

          <Link
            to={`/detalleproyecto/${project.id}`}
            className="flex gap-2 items-center text-sm md:text-base bg-[#f3f3f3] border border-[#ccc] text-[#555] px-3 py-1 rounded-md hover:bg-[#e6e6e6] transition"
          >
            Info <i className="bi bi-info-circle text-sm md:text-base"></i>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
