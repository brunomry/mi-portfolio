import perfil from "../../assets/perfil.webp";

const HeroSection = () => {
  const habilidades = [
    "React",
    "Redux Toolkit",
    "TailwindCSS",
    "Bootstrap5",
    "JavaScript",
    "Figma",
    "SEO",
    "Node js",
    "Express js",
    "MongoDB",
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
      px-4 md:px-8 lg:px-[100px] xl:px-[120px] 2xl:px-[250px]
      md:min-h-[60vh] md:items-center md:pt-[100px] 
      lg:pt-[120px] xl:pt-[220px] lg:min-h-[70vh] xl:min-h-[100vh]
      "
      id="sobremi"
    >
      <div
        className="flex flex-col gap-4 sm:gap-10 md:gap-8 lg:gap-[50px] xl:gap-[150px] 
        lg:flex-row "
      >
        <div className="flex flex-col gap-4 lg:flex-1 order-1 md:order-1 max-w-[750px]">
          <h1 className="text-[20px] sm:text-[28px] lg:text-[32px] xl:text-[44px] 2xl:text-[64px] font-light leading-tight text-[#222] sm:text-left">
            Hola, soy Bruno Madozzo
          </h1>
          <h2 className="text-[18px] sm:text-[24px] xl:text-[28px] font-light text-[#000] leading-snug sm:text-left">
            Desarrollador web y estudiante avanzado de Ingeniería en Sistemas de
            Información
          </h2>
          <p className="text-[#555] text-sm md:text-base font-light leading-relaxed md:mt-4">
            Acompaño a emprendedores, profesionales y comercios locales a dar el
            salto digital, brindando soluciones personalizadas, claras y fáciles
            de usar.
          </p>
          <p className="text-[#555] text-sm md:text-base font-light sm:mt-2  sm:text-left">
            Desarrollo páginas y
            aplicaciones web optimizadas para un buen rendimiento y
            posicionamiento SEO cuando el proyecto lo requiere.
          </p>
          <p className="text-[#555] text-sm md:text-base font-light leading-relaxed">
            Creo soluciones digitales que no solo se vean bien,
            sino que ayuden a tu negocio a organizarse mejor y crecer.
          </p>
          <div className="flex sm:flex-row gap-4 mt-6 lg:mt-16 w-full sm:w-auto">
            <a
              href="#servicios"
              className="flex items-center gap-3 justify-center text-sm px-4 md:px-6 2xl:px-16 py-2  rounded-lg bg-white text-[#000] border border-[#000] hover:bg-[#000] hover:text-white transition font-medium md:text-base lg:text-lg"
              title="Conoce mis servicios"
            >
              Servicios
            </a>
            <a
              href="#proyectos"
              className="flex items-center gap-3 justify-center px-4 md:px-6 2xl:px-16 py-2 rounded-lg bg-[#000] text-white border hover:border-[#000] hover:bg-white hover:text-[#000] transition font-medium md:text-base lg:text-lg"
              title="Conoce mis proyectos"
            >
              Proyectos
            </a>
          </div>
          <div className="flex gap-4 md:mt-6 lg:mt-2">
            <a
              href="https://github.com/brunomry"
              target="_blank"
              rel="noopener noreferrer"
              title="Mi GitHub"
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#000] text-white transition"
            >
              <i className="text-xl sm:text-2xl bi bi-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/bruno-madozzo"
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
          className="containerImgProfile md:mx-0 mt-6 sm:mt-8 md:mt-0 
          w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] 
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
        className="mt-24 animate-bounce text-[#000] text-2xl sm:text-3xl flex justify-center"
      >
        <i className="bi bi-chevron-down"></i>
      </a>
    </article>
  );
};

export default HeroSection;
