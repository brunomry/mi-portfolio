import cv from "../../assets/CV Bruno Madozzo Romay.pdf";
import perfil from "../../assets/perfil.webp";

const AcercaDeMi = () => {
  const handleDownloadPDF = () => {
    const urlPDF = cv;
    window.open(urlPDF, "_blank", "noopener");
  };

  return (
    <article
      className="flex mt-4 mb-12 flex-col 2xl:px-[250px] w-[100%] min-h-[40vh] bg-[#FAFAFA] md:min-h-[60vh] md:items-center md:mt-[100px] lg:mt-[150px] xl:mt-[200px] lg:min-h-[70vh] xl:min-h-[72vh] rounded-2"
      id="sobremi"
    >
      <div className="flex flex-col px-4 lg:gap-[50px] xl:gap-[150px] lg:flex-row">
        <div className="flex flex-col gap-4 order-1 lg:order-1">
          <div>
            <h1 className="text-[25px] text-[#000] leading-10 md:leading-normal sm:text-[35px] xl:text-[48px] 2xl:text-[60px] mb-2 md:mb-0 font-black">
              Hola, soy Bruno Madozzo
            </h1>
            <h2 className="text-[20px] 2xl:text-[40px] text-[#2B7FF7] leading-8 md:leading-normal  sm:text-[25px]  font-black ">
              Desarrollador web
            </h2>
          </div>
          <div className="md:my-2  md:text-[1rem] xl:text-[16px] w-[100%] md:w-[600px]">
            <p className="text-[#787777] font-light">
              Estudiante de Ingeniería en Sistemas de Información y
              Desarrollador web con enfoque en Front-end.
            </p>
            <p className="text-[#787777] font-light mt-4">
              Me especializo en crear sitios y aplicaciones web optimizadas para
              un buen rendimiento y posicionamiento SEO.
            </p>
          </div>
          <div className="flex flex-col md:mt-8 justify-center gap-4 md:gap-4 xl:gap-5">
            <div className="flex gap-2 flex-row md:gap-3 items-start">
              <button
                className="flex gap-3 justify-center md:px-5 py-[10px] 2xl:py-[15px] w-[250px] rounded-[45px] bg-[#fff] text-[#2B7FF7] hover:bg-[#2B7FF7] hover:text-[#fff] border-[#2B7FF7] border-[1px] hover:border-[#2B7FF7] text-[16px] md:text-[1rem]"
                onClick={handleDownloadPDF}
                title="haz clic para descargar mi CV"
              >              
                <span>Descargar CV </span>
                <i className="bi bi-download"></i>
              </button>
              <a
                className="flex items-center gap-3 justify-center px-5 py-[10px] 2xl:py-[15px] w-[250px] rounded-[45px] bg-[#2B7FF7] text-white hover:bg-[#fff] hover:text-[#2B7FF7] hover:border hover:border-[#2B7FF7] text-[16px] md:text-[1rem] "
                href="#proyectos"
                title="Contáctame a través de mis redes sociales"
              >
                <span>Proyectos </span>
                <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="block md:flex lg:order-1 lg:mx-auto mt-4 w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-[20px] border-[4px] md:border-[8px] border-[##2B7FF] lg:w-[200px] lg:h-[200px] xl:w-[250px] xl:h-[250px] 2xl:w-[280px] 2xl:h-[280px] mb-2">
          <img
            src={perfil}
            alt="Bruno Madozzo"
            title="Bruno Madozzo"
            className="w-[100%] h-[100%] rounded-[16px] md:rounded-[12px] object-cover"
          />
        </div>
      </div>
    </article>
  );
};

export default AcercaDeMi;
