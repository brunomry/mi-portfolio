import { Link } from "react-router-dom";

const fallbackSummary = {
  frontend: "Una experiencia digital pensada para comunicar mejor y facilitar acciones concretas.",
  backend: "Una base técnica preparada para centralizar información y automatizar procesos.",
  diseño: "Una exploración visual enfocada en jerarquía, consistencia y experiencia móvil.",
  académico: "Análisis y documentación para convertir necesidades en una solución de sistema.",
};

const ProjectCard = ({ project, featured, index }) => {
  const result = project.outcomeDetail || project.outcome || fallbackSummary[project.area];

  return (
    <article className={`editorial-project ${featured ? "editorial-project-featured" : ""}`}>
      <Link to={`/detalleproyecto/${project.id}`} className="project-visual" aria-label={`Ver caso de estudio: ${project.name}`}>
        <img src={project.image} alt={project.name} className="project-image" />
        <span className="project-order">0{index + 1}</span>
        <span className="project-status">{project.status}</span>
      </Link>
      <div className="project-content">
        <div className="project-meta"><span>{project.category}</span><span>{project.type}</span></div>
        <h3>{project.name}</h3>
        <p className="project-result"><span>{project.outcomeLabel || "Enfoque"}</span>{result}</p>
        <div className="project-actions">
          <Link to={`/detalleproyecto/${project.id}`}>Ver caso completo <i className="bi bi-arrow-right" /></Link>
          {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Visitar ${project.name}`}><i className="bi bi-box-arrow-up-right" /></a>}
          {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Código de ${project.name}`}><i className="bi bi-github" /></a>}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
