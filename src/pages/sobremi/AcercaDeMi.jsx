import { Link } from "react-router-dom";
import cv from "../../assets/CV Bruno Madozzo Romay.pdf";
import perfil from "../../assets/perfil.png";

const AcercaDeMi = () => {
  const handleDownloadPDF = () => window.open(cv, "_blank", "noopener");

  return (
    <section
      className="flex flex-col  xl:w-[80%]  bg-[#fff]  pt-[150px] min-h-[100vh] fondo "
    >
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
          <p className="text-xl text-[#787777]">
            ¡Bienvenido! <span title="saludo">👋</span>
          </p>
          <h1 className="text-[25px] text-[#111] leading-10 md:leading-normal sm:text-[35px] xl:text-[48px] 2xl:text-[60px] mb-2 md:mb-0 font-bold">
            Hola, soy Bruno Madozzo
          </h1>
          <h2 className="text-[20px] 2xl:text-[35px] text-[#222] leading-8 md:leading-normal text-center align-middle sm:text-[25px] xl:text-[30px] font-bold ">
            &lt; Desarrollador web Frontend /&gt;
          </h2>
          <div className="w-[80%] 2xl:w-[100%] aboutMe shadow-xl mx-auto text-center lg:text-start bg-[#fff] mt-2 md:mt-4  p-5 rounded-2xl mb-2 xl:mb-3 border-[1px]">
            <div className="block sm:hidden mx-auto mt-4 w-[200px] h-[250px] rounded-[20px] border-[1px] border-[#f7f7f7] lg:w-[180px] lg:h-[180px] mb-2">
              <img
                src={perfil}
                alt="Bruno Madozzo"
                title="Bruno Madozzo"
                className="w-[100%] h-[100%] rounded-[20px] object-cover"
              />
            </div>
            <div className="mx-2 xl:mx-5 my-2 text-center lg:text-start md:text-[1rem] xl:text-[1.125rem]">
              {/* <h2 className="text-[20px] 2xl:text-[25px] text-[#333] xl:text-[22px] font-bold leading-8 md:leading-normal">
                Sobre mí
              </h2> */}
              <p className="text-[#787777] 2xl:text-[20px]">
              Soy estudiante de Ingeniería en Sistemas de Información con fuerte enfoque en desarrollo web y orientado al Front-end. Me destaco por crear páginas rápidas, responsivas y optimizadas para SEO, aportando ideas creativas de diseño. Además, mi alto compromiso y atención al detalle además de una mentalidad orientada a resultados, me permiten contribuir de forma efectiva en los proyectos en los que participo.
              </p>
            </div>
          </div>
          <div className="hidden w-[80%] xl:w-[70vw] aboutMe mx-auto text-center lg:text-start bg-[#fff] shadow-xl lg:mt-2  p-3 rounded-2xl mb-2 xl:mb-3 border-[1px] ">
            <div className="mx-2 xl:mx-5 my-2  md:text-[1rem] xl:text-[1.125rem] ">
               <h2 className="text-[20px] text-[#333] xl:text-[22px] font-bold leading-8 md:leading-normal">
                
              </h2>
                <p>a</p>
            </div>
          </div>
          <div className="flex flex-col items-center mt-8 justify-center gap-4 md:gap-4 xl:gap-5">
            <div className="flex flex-col gap-2 md:flex-row md:gap-3">
              <button
                className=" px-5 py-[10px] 2xl:py-[15px] w-[250px] rounded-[45px] bg-[#fff] text-[#222] hover:bg-[#000] hover:text-[#fff] border-[#303030] border-[1px] hover:border-[#000] text-[16px] md:text-[1rem] xl:text-[1.125rem]"
                onClick={handleDownloadPDF}
                title="haz clic para descargar mi CV"
              >
                Descargar CV <i className="bi bi-download ms-2"></i>
              </button>
              <Link
                className="flex items-center justify-center px-5 py-[10px] 2xl:py-[15px] w-[250px] rounded-[45px] bg-[#000] text-white hover:bg-[#f7f7f7] hover:text-[#222] hover:border hover:border-[#000] text-[16px] md:text-[1rem] xl:text-[1.125rem]"
                to={"/contacto"}
                title="Contáctame a través de mis redes sociales"
              >
                <span>Contactarse</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcercaDeMi;
