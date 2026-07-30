import technologies from "../../helpers/technologies.js";
import TechCard from "./TechCard";

const TechnologiesSection = () => {
  return (
    <section
      className="site-section section-tint w-full flex flex-col gap-5 md:gap-8 xl:gap-12"
      id="tecnologías"
    >
      <h2 className="font-black text-[24px] md:text-[28px] xl:text-[32px] 2xl:text-[36px] text-[#222]">
        Tecnologías
      </h2>
      <p className="text-[#555] text-sm md:text-base font-light">
        Estas son las tecnologías con las que trabajo en mis proyectos, organizadas por categoría.
      </p>
      {Object.entries(technologies).map(([categoria, lista], idx) => (
        <article key={idx} className="flex flex-col gap-6 ">
          <h3 className="text-[#000] font-bold text-lg md:text-xl">
            {categoria === "frontend"
              ? "Frontend"
              : categoria === "ui"
              ? "Diseño UI"
              : categoria === "backend"
              ? "Backend"
              : "Bases de Datos"}
          </h3>
          <div className="flex md:flex-wrap gap-4 md:gap-2 lg:gap-4 scrolSnapType h-[150px] md:h-[inherit] pb-3">
            {lista.map((tech, index) => (
              <TechCard key={index} tech={tech} />
            ))}
          </div>
        </article>
      ))}
    </section>
  );
};

export default TechnologiesSection;
