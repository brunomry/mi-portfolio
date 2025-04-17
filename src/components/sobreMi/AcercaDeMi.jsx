import cv from "../../assets/CV Bruno Madozzo Romay.pdf";
import perfil from "../../assets/perfil.png";

const AcercaDeMi = () => {
  const handleDownloadPDF = () => {
    const urlPDF = cv;
    window.open(urlPDF, "_blank", "noopener");
  };

  return (
    <article
      className="flex flex-col justify-center xl:items-center w-[95%] min-h-[40vh] bg-[#fff] md:min-h-[70vh] mt-[100px] sm:mt-[75px] lg:min-h-[100vh] xl:min-h-[80vh] rounded-2 lg:pt-0 lg:mt-0"
      id="sobremi"
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
          <h2 className="text-[20px] 2xl:text-[40px] text-[#222] leading-8 md:leading-normal text-center align-middle sm:text-[25px] xl:text-[30px] font-bold ">
            &lt; Desarrollador web Frontend /&gt;
          </h2>
          <div className="w-[80%] 2xl:w-[100%] aboutMe mx-auto text-center lg:text-start bg-[#fff] mt-2 md:mt-4  p-3 rounded-2xl mb-2 xl:mb-3 border-[1px] shadow">
            <div className="block sm:hidden mx-auto mt-4 w-[200px] h-[250px] rounded-[20px] border-[1px] border-[#f7f7f7] lg:w-[180px] lg:h-[180px] mb-2">
              <img
                src={perfil}
                alt="Bruno Madozzo"
                title="Bruno Madozzo"
                className="w-[100%] h-[100%] rounded-[20px] object-cover"
              />
            </div>
            <div className="mx-2 xl:mx-5 my-2 text-center lg:text-start md:text-[1rem] xl:text-[1.125rem]">
              <p className="text-[#424242] 2xl:text-[25px]">
              Soy Bruno, Desarrollador web y estudiante de Ingeniería en Sistemas de Información.
              </p>
              <p className="text-[#787777] 2xl:text-[20px]">
              Me especializo en crear sitios y aplicaciones web optimizadas para un buen rendimiento y posicionamiento SEO. 
              </p>
              <p className="text-[#333] mt-2 2xl:text-[25px] font-bold">¿Por qué elegirme? </p>
              <p className="text-[#787777] mt-2 2xl:text-[20px]">Tengo una gran atención al detalle, me gusta aprender constantemente y aplicar buenas prácticas de código y diseño. </p>
              <p className="text-[#787777] mt-2 2xl:text-[20px]">Además, soy una persona colaborativa, con habilidades de liderazgo, y siempre busco entregar buenos resultados.</p>
              <p className="text-[#787777] mt-2 2xl:text-[20px]">Si estás buscando a alguien con seriedad y compromiso para sumarse a tu equipo, o necesitas una web para tu negocio, no dudes en contactarme.</p>
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
              <a
                className="flex items-center justify-center px-5 py-[10px] 2xl:py-[15px] w-[250px] rounded-[45px] bg-[#000] text-white hover:bg-[#f7f7f7] hover:text-[#222] hover:border hover:border-[#000] text-[16px] md:text-[1rem] xl:text-[1.125rem]"
                href="#contacto"
                title="Contáctame a través de mis redes sociales"
              >
                <span>Contactarse</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default AcercaDeMi;
