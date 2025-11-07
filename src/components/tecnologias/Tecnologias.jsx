import tecnologias from "../../helpers/tecnologias";
import CardTecnologia from "./CardTecnologia";

const Tecnologias = () => {
  return (
    <section
      className="w-[100%] py-12 xl:py-20 2xl:py-40 px-4 md:px-8 lg:px-[100px] xl:px-[120px] 2xl:px-[150px] bg-[#FAFAFA] text-[#1d2a4d] flex flex-col gap-4 md:gap-6 xl:gap-12"
      id="tecnologías"
    >
      <h2 className="font-black text-[24px] md:text-[28px] xl:text-[32px] 2xl:text-[36px] text-[#000]">
        Tecnologías
      </h2>
      <p className="text-[#555] text-sm md:text-base font-light">
        Estas son las tecnologías con las que trabajo en mis proyectos, organizadas por categoría.
      </p>
      {Object.entries(tecnologias).map(([categoria, lista], idx) => (
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
              <CardTecnologia key={index} tech={tech} />
            ))}
          </div>
        </article>
      ))}
    </section>
  );
};

export default Tecnologias;
