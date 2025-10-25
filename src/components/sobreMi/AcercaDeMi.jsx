import perfil from "../../assets/perfil.webp";
import { handleDownloadPDF } from "../../helpers/handleFn";

const AcercaDeMi = () => {
  const habilidades = [
    "React",
    "Redux Toolkit",
    "Tailwind",
    "Bootstrap5",
    "JavaScript",
    "Figma",
    "SEO",
  ];
  const trabajos = [
    "Landing pages",
    "Sitios web",
    "Aplicaciones web",
    "Apps de gestión",
  ];

  return (
    <article
      className="flex pt-12 pb-12 flex-col w-full min-h-[40vh] bg-[#FFF] rounded-2 
      px-4 md:px-8 lg:px-[100px] xl:px-[120px] 2xl:px-[150px]
      md:min-h-[60vh] md:items-center md:pt-[100px] 
      lg:pt-[120px] xl:pt-[220px] lg:min-h-[70vh] xl:min-h-[60vh] 
      "
      id="sobremi"
    >
      <div
        className="flex flex-col gap-4 sm:gap-10 md:gap-8 lg:gap-[50px] xl:gap-[150px] 
        lg:flex-row "
      >
        <div className="flex flex-col gap-4 lg:flex-1 order-1 md:order-1">
          <h1 className="text-[20px] sm:text-[28px] lg:text-[32px] xl:text-[44px] font-black leading-tight text-[#000] text-center sm:text-left">
            Hola, soy Bruno Madozzo
          </h1>
          <h2 className="text-[18px] sm:text-[24px] lg:text-[28px] xl:text-[32px] font-black text-[#2B7FF7] leading-snug text-center sm:text-left">
            Desarrollador web
          </h2>
          <p className="text-[#555] text-sm md:text-base font-light sm:mt-2 md:mt-4 text-center sm:text-left">
            Estudiante de Ingeniería en Sistemas de Información y desarrollador
            web con enfoque en Front-end. Me especializo en la creación de
            landing pages, sitios web y aplicaciones web optimizadas para un
            buen rendimiento y posicionamiento SEO.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-2 md:mt-4">
            {habilidades.map((tech, idx) => (
              <span
                key={idx}
                className="bg-[#E4F0FF] text-[#2B7FF7] text-xs sm:text-sm font-medium px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-2">
            {trabajos.map((item, idx) => (
              <span
                key={idx}
                className="bg-[#D1F7E0] text-[#1D7F5E] text-xs sm:text-sm font-medium px-3 py-1 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex sm:flex-row gap-4 md:mt-6 lg:mt-4 w-full sm:w-auto justify-center sm:justify-start">
            <button
              onClick={handleDownloadPDF}
              className="flex items-center gap-3 justify-center text-sm px-4 md:px-6 py-2 xl:py-3 rounded-full bg-white text-[#2B7FF7] border border-[#2B7FF7] hover:bg-[#2B7FF7] hover:text-white transition font-medium md:text-base lg:text-lg"
              title="Descargar CV"
            >
              Descargar CV <i className="bi bi-download"></i>
            </button>
            <a
              href="#proyectos"
              className="flex items-center gap-3 justify-center px-4 md:px-6 py-2 xl:py-3 rounded-full bg-[#2B7FF7] text-white border border-[#2B7FF7] hover:bg-white hover:text-[#2B7FF7] transition font-medium md:text-base lg:text-lg"
              title="Conoce mis proyectos"
            >
              Proyectos <i className="bi bi-arrow-down"></i>
            </a>
          </div>
          <div className="flex gap-4 md:mt-6 lg:mt-2 justify-center sm:justify-start">
            <a
              href="https://github.com/brunomry"
              target="_blank"
              rel="noopener noreferrer"
              title="Mi GitHub"
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#2B7FF7] hover:bg-[#1a5fcc] text-white transition"
            >
              <i className="text-xl sm:text-2xl bi bi-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/brunomry/"
              target="_blank"
              rel="noopener noreferrer"
              title="Mi LinkedIn"
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#2B7FF7] hover:bg-[#1a5fcc] text-white transition"
            >
              <i className="text-xl sm:text-2xl bi bi-linkedin"></i>
            </a>
          </div>
        </div>
        <div
          className="containerImgProfile lg:mx-auto mt-6 sm:mt-8 md:mt-0 
          w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] 
          lg:w-[200px] lg:h-[200px] xl:w-[250px] xl:h-[250px] 2xl:w-[280px] 2xl:h-[280px] 
          rounded-[20px] border-[4px] md:border-[8px] border-[#d2d2d2] lg:order-1"
        >
          <img
            src={perfil}
            alt="Bruno Madozzo"
            title="Bruno Madozzo"
            className="w-full h-full rounded-[16px] md:rounded-[12px] object-cover"
          />
        </div>
      </div>
      <a
        href="#proyectos"
        className="mt-8 animate-bounce text-[#2B7FF7] text-2xl sm:text-3xl flex justify-center"
      >
        <i className="bi bi-chevron-down"></i>
      </a>
    </article>
  );
};

export default AcercaDeMi;
