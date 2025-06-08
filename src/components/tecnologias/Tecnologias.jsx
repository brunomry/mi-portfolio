import Tecnologia from "./CardTecnologia";
import tecnologias from "../helpers/tecnologias";
import CardTecnologia from "./CardTecnologia";

const Tecnologias = () => {
  return (
    <article
      className="w-[100%] py-8 md:px-8 md:py-20 lg:px-[100px] xl:px-[150px] xl:py-40 min-h-[35vh] bg-[#0a0a0a] text-[#028891] flex flex-col md:gap-2 px-4 md:min-h-[80vh] tecnologias lg:min-h-[100vh] xl:min-h-[80vh]"
      id="tecnologias"
    >
      <h2 className="font-black font- mb-2 text-[25px] xl:text-[30px] 2xl:text-[35px] text-[#FAFAFA]">
        Tecnologías
      </h2>
      <p className="text-[#787777] px-2 md:text-[1rem] ">
        Estas son las tecnologías que utilizo en mis proyectos o de las cuales
        tengo conocimientos.
      </p>
      <div className="flex containerTech w-[100%] h-[150px] sm:h-[100%] gap-2 md:gap-2 lg:gap-6 items-center sm:flex-wrap md:pt-12 lg:pt-12 2xl:pt-14">
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
