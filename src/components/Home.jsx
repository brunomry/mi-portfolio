import cv from "../assets/CV Bruno Madozzo Romay.pdf";
import perfil from "../assets/perfilbg.png";

const Home = () => {
  const handleDownloadPDF = () => {
    const urlPDF = cv;
    window.open(urlPDF, "_blank");
  };

  return (
    <article
      className="flex flex-col justify-center xl:items-center mt-[100px] pt-[10px] w-[95%] min-h-[50vh] bg-[#eae8ff] lg:min-h-screen pb-2 rounded-2 lg:pt-0 lg:mt-0"
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
      <div className="flex flex-col items-center md:flex-row sm:gap-[150px] gap-[50px]">
        <div className="text-center">
          <p className="text-xl text-[#028891]">
            ¡Bienvenido! <span title="saludo">👋</span>
          </p>
          <h1 className="text-[36px] text-[#028891] leading-10 md:leading-normal sm:text-[49px] lg:text-[64px] mb-2 md:mb-0 font-bold">
            Hola, soy Bruno Madozzo
          </h1>
          <h2 className="text-[27px] text-[#028891] leading-8 md:leading-normal text-center align-middle sm:text-[33px] lg:text-[40px] font-bold ">
            Desarrollador Web Frontend
          </h2>

          <div className="w-[100%] xl:w-[50vw] text-center lg:text-start bg-[#f1f0fd] lg:mt-4  p-3 rounded-2xl mb-4 border-[#69bac0] border-[1px]">
            <div className="block sm:hidden mx-auto w-[150px] h-[150px] rounded-[50%] border-[5px] border-[#12c0bd] lg:w-[180px] lg:h-[180px] mb-2">
              <img
                src={perfil}
                alt="Bruno Madozzo"
                title="Bruno Madozzo"
                className="shadow-xl w-[100%] h-[100%] rounded-[50%] object-cover"
              />
            </div>
            <div className="mx-2 xl:mx-5 my-2 text-center lg:text-start text-[#028891] md:text-[18px] lg:text-[20px] xl:text-[22px]">
              <h2 className=" text-[25px] font-bold leading-8 md:leading-normal">
                Acerca de mí
              </h2>
              <p>
                Soy estudiante de Ingeniería en Sistemas de Información con
                enfoque en el desarrollo web frontend. Me destaco por mi
                atención al detalle, por aportar ideas creativas de diseño y por
                mi dedicación en cada proyecto que emprendo.
              </p>
            </div>
          </div>
          <div className="w-[100%] xl:w-[50vw] text-center lg:text-start bg-[#f1f0fd] lg:mt-2  p-3 rounded-2xl mb-4 border-[#69bac0] border-[1px]">
            <div className="mx-2 xl:mx-5 my-2 text-[#028891] md:text-[18px] lg:text-[20px] xl:text-[22px]">
              <h2 className="text-[25px] font-bold leading-8 md:leading-normal">
                Buenas prácticas
              </h2>
              <p>
                Como desarrollador, creo firmemente en la importancia de seguir
                buenas prácticas y en la capacidad de recibir y dar feedback
                constructivo.
              </p>
            </div>
          </div>
          <div className="w-[100%] xl:w-[50vw] text-center lg:text-start bg-[#f1f0fd] lg:mt-2  p-3 rounded-2xl mb-4 border-[#69bac0] border-[1px]">
            <div className="mx-2 xl:mx-5 my-2 text-[#028891] md:text-[18px] lg:text-[20px] xl:text-[22px]">
              <h2 className="text-[25px] font-bold leading-8 md:leading-normal">
                Compromiso y Crecimiento profesional
              </h2>
              <p>
                Cada proyecto que surje es una oportunidad para crecer,
                practicar y prepararme para los desafíos profesionales que
                vendrán.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 md:gap-5 xl:gap-6">
            <div className="flex flex-col gap-2 md:flex-row md:gap-3">
              <button
                className="px-5 py-[6px] w-[250px] rounded-[6px] bg-[#028891] text-white border hover:bg-[#f1f0fd] hover:text-[#028891] hover:border hover:border-[#028891] text-[16px] md:text-[18px] lg:text-[20px]"
                onClick={handleDownloadPDF}
              >
                Descargar CV <i className="bi bi-download ms-2"></i>
              </button>
              <a
                className="px-5 py-[6px] w-[250px] rounded-[6px] bg-[#028891] text-white border hover:bg-[#f1f0fd] hover:text-[#028891] hover:border hover:border-[#028891] text-[16px] md:text-[18px] lg:text-[20px]"
                href="#contacto"
              >
                Contactar <i class="bi bi-envelope ms-2"></i>
              </a>
            </div>
            <div className="flex gap-4 mt-2">
              <a
                href="https://github.com/brunomry"
                target="_blank"
                title="Visita mis proyectos en mi repositorio de Github"
                className="border-[1px] border-[#028891] rounded-[4px] bg-[#f1f0fd] p-1 "
              >
                <i className=" px-3 text-3xl text-[#028891] rounded-[6px] bi bi-github sm:text-4xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/bruno-madozzo/"
                target="_blank"
                title="Visita mi perfil de LinkedIn"
                className="border-[1px] border-[#028891] rounded-[4px] bg-[#f1f0fd] p-1 "
              >
                <i className="px-3 text-3xl text-[#028891] rounded-[6px] bi bi-linkedin sm:text-4xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Home;
