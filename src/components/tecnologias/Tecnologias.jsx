import Tecnologia from "./CardTecnologia";
import tecnologias from "../helpers/tecnologias";
import CardTecnologia from "./CardTecnologia";

const Tecnologias = () => {
  return (
    <article
      className="w-[100%] md:w-[90%] min-h-[50vh] bg-[#fff] text-[#028891] flex flex-col md:gap-2 items-center md:min-h-[80vh] tecnologias mt-[20px]  lg:min-h-[100vh] xl:min-h-[80vh] mb-[20px]"
      id="tecnologias"
    >
      <h2 className="font-bold mb-2 text-[25px] xl:text-[30px] 2xl:text-[35px] text-[#333]">
        &lt; Tecnologías /&gt;
      </h2>
      <p className="text-center text-[#787777] px-2 md:text-[1rem] xl:text-[1.125rem] 2xl:text-[20px]">
        Estas son las tecnologías que utilizo en mis proyectos o de las cuales
        tengo conocimientos.
      </p>

      <div className="flex containerTech w-[100%] h-[200px] sm:h-[100%] gap-2 md:gap-3 xl:gap-6 items-center sm:justify-center sm:flex-wrap lg:pt-5 px-5 ">
        {tecnologias.actuales.map((tech, pos) => (
          <CardTecnologia key={pos} tech={tech} />
        ))}
      </div>
      {/* <h3 className="px-2 md:px-10 text-[#444] me-auto font-bold mt-3 sm:flex-wrap md:text-[20px] lg:text-[25px]">
        Actualmente aprendiendo...
      </h3>
      <div className="flex containerTech w-[100%] h-[200px] sm:h-[100%] sm:flex-wrap gap-2 md:gap-3 xl:gap-6 items-center sm:justify-center lg:pt-5 px-5 ">
        {tecnologias.aprendiendo.map((tech, pos) => (
          <CardTecnologia key={pos} tech={tech} />
        ))}
      </div> */}
    </article>
  );
};

export default Tecnologias;
