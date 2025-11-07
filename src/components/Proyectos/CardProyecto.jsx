import { Link } from "react-router-dom";

const CardProyecto = ({ proyecto }) => {
  const tecnologiasPrincipales = proyecto.tecnologias.slice(0, 3);

  return (
    <article className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 w-full max-w-[480px] flex flex-col overflow-hidden">
      <span className="absolute top-3 left-3 bg-[#000000] text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">
        {proyecto.estado}
      </span>
      <img
        src={proyecto.imagen}
        alt={proyecto.nombre}
        title={proyecto.nombre}
        className="w-full h-[240px] lg:h-[280px] object-cover rounded-t-2xl"
      />
      <div className="p-5 flex flex-col gap-3">
        <div>
          <h3 className="font-extrabold text-lg md:text-xl text-[#000]">
            {proyecto.nombre}
          </h3>
          <p className="text-[#999] text-sm md:text-base mt-1">
            {proyecto.categoria}
          </p>
        </div>
        <p className="text-[#555] text-sm md:text-base">{proyecto.tipo}</p>
        {tecnologiasPrincipales.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tecnologiasPrincipales.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-600 px-3 py-1 rounded-md text-xs md:text-sm font-medium"
              >
                {tech.name}
              </span>
            ))}
          </div>
        )}
        <div className="flex items-center justify-between mt-3 text-xs md:text-sm text-[#999]">
          <span>
            Última actualización:{" "}
            {proyecto.ultima_actualizacion || proyecto.fecha}
          </span>
          <span className="font-semibold text-[#000]">
            {proyecto.proyecto}
          </span>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {proyecto.github && (
            <a
              href={proyecto.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center text-sm md:text-base bg-gray-600 border border-gray-600 text-white px-3 py-1 rounded-md hover:bg-[#333] hover:border-[#333] transition"
            >
              Código <i className="bi bi-github text-base"></i>
            </a>
          )}
          {proyecto.area === "frontend" && (
            <a
              href={proyecto.enlace}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center text-sm md:text-base bg-[#000] text-white border border-[#000] hover:bg-[#fff] px-3 py-1 rounded-md hover:border-[#000] hover:text-[#000] transition"
            >
              Web{" "}
              <i className="bi bi-box-arrow-up-right text-sm md:text-base"></i>
            </a>
          )}

          <Link
            to={`/detalleproyecto/${proyecto.id}`}
            className="flex gap-2 items-center text-sm md:text-base bg-[#f3f3f3] border border-[#ccc] text-[#555] px-3 py-1 rounded-md hover:bg-[#e6e6e6] transition"
          >
            Info <i className="bi bi-info-circle text-sm md:text-base"></i>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CardProyecto;
