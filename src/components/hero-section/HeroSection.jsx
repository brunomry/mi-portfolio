import perfil from "../../assets/perfil.webp";
import { handleWpp } from "../../helpers/handleFn.js";

const HeroSection = () => (
  <section id="sobremi" className="hero-section site-section flex w-full flex-col justify-center">
    <div className="relative z-10 mx-auto grid w-full max-w-[1320px] items-center gap-12 lg:grid-cols-[1.35fr_.65fr] lg:gap-16">
      <div className="flex max-w-[880px] flex-col gap-6">
        <p className="hero-label">Diseño · desarrollo · evolución</p>
        <h1 className="hero-title font-black">
          Sitios y aplicaciones que ayudan a los negocios a <span>vender, organizarse y crecer.</span>
        </h1>
        <p className="max-w-[720px] text-lg font-bold leading-8 text-[#334e68] md:text-xl">
          Soy Bruno Madozzo. Convierto necesidades reales en productos web claros, útiles y preparados para evolucionar.
        </p>
        <p className="hero-copy">
          Te acompaño desde el análisis y el diseño hasta el desarrollo, la publicación y la mejora continua.
        </p>

        <div className="mt-1 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a href="#proyectos" className="button-primary flex items-center justify-center gap-3 border">
            Ver proyectos y resultados <i className="bi bi-arrow-down-right" />
          </a>
          <button
            type="button"
            onClick={() => handleWpp("Hola Bruno, vi tu portfolio y quisiera consultarte por un proyecto web.")}
            className="button-secondary flex items-center justify-center gap-3 border"
          >
            Contarte mi proyecto <i className="bi bi-whatsapp" />
          </button>
        </div>

        <div className="hero-capabilities">
          <span><i className="bi bi-check2" /> Diseño y desarrollo</span>
          <span><i className="bi bi-check2" /> Publicación y dominio</span>
          <span><i className="bi bi-check2" /> Soporte y evolución</span>
        </div>
      </div>

      <div className="hero-portrait-wrap">
        <div className="profile-frame containerImgProfile h-[240px] w-[240px] lg:h-[330px] lg:w-[330px] xl:h-[380px] xl:w-[380px]">
          <img src={perfil} alt="Bruno Madozzo, desarrollador web" className="h-full w-full object-cover" />
        </div>
        <div className="hero-note">
          <span className="hero-note-mark">BM</span>
          <p>Desarrollo con mirada técnica y comprensión del negocio.</p>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
