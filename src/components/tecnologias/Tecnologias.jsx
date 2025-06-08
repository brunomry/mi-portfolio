import tecnologias from "../../helpers/tecnologias";
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
      <p className="text-[#787777] px-2 md:text-[1rem] font-light">
        Estas son las tecnologías que utilizo en mis proyectos o de las cuales
        tengo conocimientos, entre otras.
      </p>
      <div className="flex containerTech w-[100%] h-[150px] sm:h-[100%] gap-2 md:gap-2 lg:gap-6 items-center sm:flex-wrap md:pt-12 lg:pt-12 2xl:pt-14">
        {tecnologias.actuales.map((tech, pos) => (
          <CardTecnologia key={pos} tech={tech} />
        ))}
      </div>
    </article>
  );
};

export default Tecnologias;
