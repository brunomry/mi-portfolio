import Tecnologia from "./tecnologias/Tecnologia";
import tecnologias from "./helpers/tecnologias";

const Tecnologias = () => {
  return (
    <article
      className="d-flex flex-column gap-2 align-items-center py-4 py-lg-4 section tecnologias py-lg-5 "
      id="tecnologias"
    >
      <h2 className=" display-6 fw-bold mb-4">Tecnologías</h2>
      <p className="sizeText text-center px-2">Estas son las tecnologías que utilizo en mis proyectos y con las cuales estoy en continuo aprendizaje.</p>

        <div className="d-flex containerTech gap-2 gap-xl-3 align-items-center justify-content-md-center pt-4 px-5">
          {tecnologias.map((tech, pos) => (
            <Tecnologia key={pos} tech={tech} />
          ))}
     
      </div>
    </article>
  );
};

export default Tecnologias;
