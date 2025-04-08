import { Link } from "react-router-dom";
import cv from "../../assets/CV Bruno Madozzo Romay.pdf";
import perfil from "../../assets/perfil.png";

const AcercaDeMi = () => {
  const handleDownloadPDF = () => window.open(cv, "_blank", "noopener");

  return (
    <section className="flex flex-col items-center w-[100%]  lg:w-[75%] xl:w-[80%] bg-[#fff] pt-[50px] md:pt-[125px] lg:pt-[50px] xl:pt-[125px] 2xl:pt-[150px] fondo mainSection">
      {/* <div className="hidden justify-center pb-md-3 w-[100%] mb-5 gap-5">
        <div className="rounded-[5px] border-1 flex items-center gap-2">
          <i className="bi bi-brightness-high " title="tema"></i>
          <span>Tema</span>
        </div>
        <div className="gap-2 rounded-5 border-1 d-flex align-items-center">
          <i className="bi bi-globe " title="idioma"></i>
          <span>Idioma</span>
        </div>
      </div> */}
      <div className="flex flex-col md:justify-center items-center md:flex-row sm:gap-[150px] gap-[50px]">
        <div className="text-center">
          <div className="flex md:justify-center md:gap-10 px-5 sm:px-0">
            <div>
              <span className="hidden text-start sm:block md:text-[20px]">Hola, soy</span>
              <h1 className="text-start text-[20px] sm:text-[25px] text-[#375c86] leading-5 md:leading-normal md:text-[30px] xl:text-[40px] 2xl:text-[52px] font-bold">
                Bruno Madozzo
              </h1>
              <h2 className="text-start text-[1rem] 2xl:text-[35px] text-[#222] leading-5  md:text-center align-middle md:text-[25px] xl:text-[30px] font-bold ">
                Desarrollador Front-End
              </h2>
              <p className="text-[12px] md:hidden text-start leading-3 text-gray-500">
                brunomadozzo@gmail.com
              </p>
              <div className="flex lg:hidden mt-2 md:mt-4 items-center gap-3">
                <a
                  href="https://github.com/brunomry"
                  target="_blank"
                  title="Visita mis proyectos en mi repositorio de Github"
                  className="rounded-[100%] border-[1px] border-[#375c86] md:p-1 flex items-center justify-center"
                  rel="noopener noreferrer"
                >
                  <i className="px-2 text-[#375c86] rounded-[6px] pt-1 bi bi-github sm:text-[20px]"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/bruno-madozzo/"
                  target="_blank"
                  title="Visita mi perfil de LinkedIn"
                  className=" rounded-[100%] border-[1px] border-[#375c86] md:py-1 flex items-center justify-center"
                >
                  <i className="px-2 md:px-3  text-[#375c86] rounded-[6px] pt-1 bi bi-linkedin sm:text-[20px]"></i>
                </a>
              </div>
            </div>

            <div className="block mx-auto md:mx-0 mt-4 w-[100px] sm:w-[150px] md:h-[150px] rounded-[20px] xl:w-[180px] xl:h-[180px] mb-2">
              <img
                src={perfil}
                alt="Bruno Madozzo"
                title="Bruno Madozzo"
                className="w-[100%] h-[100%] rounded-[20px] object-cover"
              />
            </div>
          </div>
          <div className="w-[80%] lg:w-[80%] 2xl:w-[100%] aboutMe mx-auto text-center lg:text-start bg-[#fff] sm:mt-2 p-2 sm:p-5 rounded-2xl mb-2 md:mb-8 lg:mb-4 xl:mb-3">
            <div className="mx-2 xl:mx-5 my-2 text-center lg:text-start md:text-[1rem] xl:text-[1.125rem]">
              <p className="text-[#4e4e4e] text-[14px] md:text-[1rem] xl:text-[1.125rem] 2xl:text-[1.25rem] text-justify">
                Soy estudiante de Ingeniería en Sistemas de Información con
                fuerte enfoque en desarrollo web y orientado al Front-end. Me
                destaco por crear páginas optimizadas para SEO,
                aportando ideas creativas de diseño. Además, mi alto compromiso
                y atención al detalle además de una mentalidad orientada a
                resultados, me permiten contribuir de forma efectiva en los
                proyectos en los que participo.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center md:gap-4 xl:gap-5">
            <div className="flex  gap-2 md:flex-row md:gap-3">
              <button
                className="text-[12px] px-2 py-2 md:px-5 md:py-[10px] 2xl:py-[15px] w-[135px] md:w-[190px] xl:w-[225px] rounded-[45px] hover:bg-[#375c86] hover:text-[#fff] border-[#375c86] text-[#375c86] border-[1px] hover:border-[#375c86] md:text-[1rem] xl:text-[1.125rem]"
                onClick={handleDownloadPDF}
                title="haz clic para descargar mi CV"
              >
                DESCARGAR CV <i className="bi bi-download ms-2"></i>
              </button>
              <Link
                className="bg-gray-50 text-[12px] px-2 py-1 w-[135px] md:w-[190px] xl:w-[225px] flex items-center justify-center md:px-5 md:py-[5px] 2xl:py-[15px]  rounded-[45px] hover:bg-[#f7f7f7] hover:text-[#222] border-gray-400 border-[1px] hover:border hover:border-[#000] md:text-[1rem] xl:text-[1.125rem]"
                to={"/proyectos"}
                title="Mira mis proyectos más destacados"
              >
                <span>VER PROYECTOS</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcercaDeMi;
