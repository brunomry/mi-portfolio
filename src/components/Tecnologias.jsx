import Tecnologia from "./tecnologias/Tecnologia";
import tecnologias from "./helpers/tecnologias";

const Tecnologias = () => {
  return (
    <article
      className="w-[100%] min-h-[50vh] bg-[#e0dffd] text-[#028891] flex flex-col gap-2 items-center py-4 tecnologias sm:min-h-[100vh] lg:py-10 "
      id="tecnologias"
    >
      <h2 className="font-bold mb-4 text-[27px] md:text-[35px] lg:text-[38] xl:text-[40px] text-[#028891]">Tecnologías</h2>
      <p className="text-center px-2 md:text-[18px] lg:text-[20px]">Estas son las tecnologías que utilizo en mis proyectos o de las cuales tengo conocimientos.</p>

        <div className="flex containerTech w-[100%] h-[250px] sm:h-[100%] gap-2 md:gap-3 xl:gap-6 items-center md:justify-center sm:flex-wrap pt-4 lg:pt-10 px-5 ">
          {tecnologias.actuales.map((tech, pos) => (
            <Tecnologia key={pos} tech={tech} />
          ))}    
      </div>
      <h3 className="px-2 md:px-10 me-auto font-bold mt-3 sm:flex-wrap md:text-[25px] lg:text-[28px]">Actualmente aprendiendo...</h3>
      <div className="flex containerTech w-[100%] h-[250px] sm:h-[100%] gap-2 md:gap-3 xl:gap-6 items-center md:justify-center pt-4 px-5 ">
      {tecnologias.aprendiendo.map((tech, pos) => (
            <Tecnologia key={pos} tech={tech} />
          ))}    
      </div>
    </article>
  );
};

export default Tecnologias;
