import perfil from "../../assets/perfil.webp";

const HeroSection = () => (
  <section id="sobremi" className="hero-section site-section flex w-full flex-col justify-center">
    <div className="relative z-10 mx-auto flex w-full max-w-[1320px] flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
      <div className="order-1 flex max-w-[850px] flex-1 flex-col gap-5">
        <h1 className="hero-title font-black">
          Diseño y desarrollo <span>experiencias web</span> que hacen avanzar negocios.
        </h1>
        <h2 className="text-lg font-bold leading-snug text-[#334e68] md:text-xl">
          Soy Bruno Madozzo, desarrollador web y estudiante avanzado de
          Ingeniería en Sistemas de Información.
        </h2>
        <p className="hero-copy">
          Acompaño a emprendedores, profesionales y equipos a convertir ideas
          en productos digitales claros, rápidos y preparados para crecer.
        </p>

        <div className="mt-3 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a href="#proyectos" className="button-primary flex items-center justify-center gap-3 border">
            Ver proyectos <i className="bi bi-arrow-up-right" />
          </a>
          <a href="#contacto" className="button-secondary flex items-center justify-center gap-3 border">
            Hablemos de tu idea
          </a>
        </div>

        <div className="mt-2 flex items-center gap-3">
          <span className="mr-1 text-xs font-bold uppercase tracking-[.14em] text-[#829ab1]">Encontrame en</span>
          <a href="https://github.com/brunomry" target="_blank" rel="noopener noreferrer" title="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#334e68] transition hover:border-[#0b6e69] hover:text-[#0b6e69]">
            <i className="bi bi-github text-xl" />
          </a>
          <a href="https://www.linkedin.com/in/bruno-madozzo" target="_blank" rel="noopener noreferrer" title="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#334e68] transition hover:border-[#0b6e69] hover:text-[#0b6e69]">
            <i className="bi bi-linkedin text-xl" />
          </a>
        </div>
      </div>

      <div className="profile-frame containerImgProfile mx-auto h-[240px] w-[240px] lg:mx-0 lg:h-[340px] lg:w-[340px] xl:h-[410px] xl:w-[410px]">
        <img src={perfil} alt="Bruno Madozzo" className="h-full w-full object-cover" />
      </div>
    </div>
  </section>
);

export default HeroSection;
