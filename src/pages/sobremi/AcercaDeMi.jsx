import { Link } from "react-router-dom";
import cv from "../../assets/CV Bruno Madozzo Romay.pdf";
import perfil from "../../assets/perfil.png";

const AcercaDeMi = () => {
  const handleDownloadPDF = () => window.open(cv, "_blank", "noopener");

  return (
    <section className="flex flex-col items-center w-[100%]  xl:w-[80%]  bg-[#fff] pt-[50px] sm:pt-[150px]  fondo mainSection">
      <div className="hidden justify-center pb-md-3 w-[100%] mb-5 gap-5">
        <div className="rounded-[5px] border-1 flex items-center gap-2">
          <i className="bi bi-brightness-high " title="tema"></i>
          <span>Tema</span>
        </div>
        <div className="gap-2 rounded-5 border-1 d-flex align-items-center">
          <i className="bi bi-globe " title="idioma"></i>
          <span>Idioma</span>
        </div>
      </div>
      <div className="flex flex-col md:justify-center items-center md:flex-row sm:gap-[150px] gap-[50px]">
        <div className="text-center">
          <div className="flex sm:justify-center md:flex-col sm:items-center px-5 sm:px-0">
            <div>
              <span className="hidden sm:block sm:text-[25px]">Hola, soy</span>
              <h1 className="text-start text-[20px] sm:text-[25px] text-[#375c86] leading-5 sm:leading-10 md:leading-normal md:text-[35px] xl:text-[48px] 2xl:text-[72px] font-bold">
                Bruno Madozzo
              </h1>
              <h2 className="text-start text-[16px] sm:text-[20px] 2xl:text-[35px] text-[#222] leading-5 md:leading-normal md:text-center align-middle md:text-[25px] xl:text-[30px] font-bold ">
                Desarrollador Front-End
              </h2>
              <p className="text-[12px] text-start leading-3 text-gray-500">
                brunomadozzo@gmail.com
              </p>
            </div>

            <div className="block sm:hidden mx-auto mt-4 w-[100px] sm:w-[200px] sm:h-[250px] rounded-[20px] lg:w-[180px] lg:h-[180px] mb-2">
              <img
                src={perfil}
                alt="Bruno Madozzo"
                title="Bruno Madozzo"
                className="w-[100%] h-[100%] rounded-[20px] object-cover"
              />
            </div>
          </div>

          <div className="w-[80%] 2xl:w-[100%] aboutMe mx-auto text-center lg:text-start bg-[#fff] sm:mt-2 p-2 sm:p-5 rounded-2xl mb-2 xl:mb-3">
            <div className="mx-2 xl:mx-5 my-2 text-center lg:text-start md:text-[1rem] xl:text-[1.125rem]">
              {/* <h2 className="text-[20px] 2xl:text-[25px] text-[#333] xl:text-[22px] font-bold leading-8 md:leading-normal">
                Sobre mí
              </h2> */}
              <p className="text-[#4e4e4e] text-[14px] 2xl:text-[1.25rem] text-justify">
                Soy estudiante de Ingeniería en Sistemas de Información con
                fuerte enfoque en desarrollo web y orientado al Front-end. Me
                destaco por crear páginas rápidas y optimizadas para SEO,
                aportando ideas creativas de diseño. Además, mi alto compromiso
                y atención al detalle además de una mentalidad orientada a
                resultados, me permiten contribuir de forma efectiva en los
                proyectos en los que participo.
              </p>
            </div>
          </div>
          {/* <div className="hidden w-[80%] xl:w-[70vw] aboutMe mx-auto text-center lg:text-start bg-[#fff] shadow-xl lg:mt-2  p-3 rounded-2xl mb-2 xl:mb-3 border-[1px] ">
            <div className="mx-2 xl:mx-5 my-2  md:text-[1rem] xl:text-[1.125rem] ">
               <h2 className="text-[20px] text-[#333] xl:text-[22px] font-bold leading-8 md:leading-normal">
                
              </h2>
                <p>a</p>
            </div>
          </div> */}
          <div className="flex flex-col items-center justify-center md:gap-4 xl:gap-5">
            <div className="flex  gap-2 md:flex-row md:gap-3">
              <button
                className="text-[12px] px-2 py-1 md:px-5 md:py-[10px] 2xl:py-[15px] w-[125px] rounded-[45px] text-[#222] hover:bg-[#000] hover:text-[#fff] border-indigo-500 bg-indigo-200 border-[1px] hover:border-[#000] md:text-[1rem] xl:text-[1.125rem]"
                onClick={handleDownloadPDF}
                title="haz clic para descargar mi CV"
              >
                DESCARGAR CV <i className="bi bi-download ms-2"></i>
              </button>
              <Link
                className="bg-gray-50 text-[12px] px-2 py-1 w-[125px] flex items-center justify-center md:px-5 md:py-[10px] 2xl:py-[15px] md:w-[fit-content] rounded-[45px] hover:bg-[#f7f7f7] hover:text-[#222] border-gray-400 border-[1px] hover:border hover:border-[#000] md:text-[1rem] xl:text-[1.125rem]"
                to={"/proyectos"}
                title="Mira mis proyectos más destacados"
              >
                <span>PROYECTOS</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcercaDeMi;
