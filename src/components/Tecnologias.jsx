import Tecnologia from "./tecnologias/Tecnologia";
import tecnologias from "./helpers/tecnologias";

const Tecnologias = () => {
  return (
    <article className="d-flex flex-column gap-3 align-items-center justify-content-center py-5">
      <h2 className="display-5">Tecnologías adquiridas</h2>
      <div className="d-flex flex-column flex-lg-row gap-3 gap-lg-5 align-items-center justify-content-start">
        <div className="stack border border-white border-1 py-3 px-5 text-white fs-5 fw-medium text-center">
          FRONTEND
        </div>
        <div className="d-flex flex-column flex-md-row gap-2 gap-md-4 align-items-center justify-content-center pt-4">
          {tecnologias.frontend.map((tech, pos) => (
            <Tecnologia key={pos} tech={tech} />
          ))}
        </div>
      </div>
      <div className="d-flex gap-3 gap-lg-5 flex-column flex-lg-row align-items-center justify-content-start w-100 flex-wrap">
        <div className="stack border border-white border-1 py-3 px-5 text-white fs-5 fw-medium text-center">
          BACKEND
        </div>
        <div className="d-flex flex-column flex-md-row gap-4 align-items-center justify-content-center pt-4">
          {tecnologias.backend.map((tech, pos) => (
            <Tecnologia key={pos} tech={tech} />
          ))}
        </div>
      </div>
      <div className="d-flex gap-3 gap-lg-5 flex-column flex-lg-row align-items-center justify-content-start w-100 flex-wrap">
        <div className="stack border border-white border-1 py-3 px-5 text-white fs-5 fw-medium text-center">
          OTRAS
        </div>
        <div className="d-flex flex-column flex-md-row gap-4 align-items-center justify-content-center pt-4">
          {tecnologias.otras.map((tech, pos) => (
            <Tecnologia key={pos} tech={tech} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default Tecnologias;
