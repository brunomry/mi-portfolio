import CardTecnologia from "./CardTecnologia";
import tecnologias from "../../helpers/tecnologias";

const ContenedorTecnologia = ({ categoria, subtitulo }) => {
  const filtrarTecnologiasPorCategoria = (categoria) => {
    return tecnologias.actuales.filter((t) => t.categoria === categoria);
  };

  return (
    <article className="flex overflow-x-hidden w-[100%] flex-col 2xl:mt-10 xl:w-[100%] mx-2">
      <h2 className=" text-[#333] font-bold w-[100%] border-b-[1px] text-[16px] md:text-[20px] xl:text-[25px] mt-5">
        {subtitulo}
      </h2>
      {categoria === "frontend" || categoria === "backend" ? (
         <div className="flex flex-wrap w-[100%] min-h-[50px] sm:h-[100%] gap-4 xl:gap-6 mt-3  ">
      
         {filtrarTecnologiasPorCategoria(categoria).length > 0 && filtrarTecnologiasPorCategoria(categoria).map((tech, pos) => (
           <CardTecnologia key={pos} tech={tech} />
         ))}
       </div>
      ) : (
        <div className="flex w-[100%] h-[fit-content] sm:h-[100%] gap-2 md:gap-3 flex-wrap lg:pt-5  mt-3">
          {filtrarTecnologiasPorCategoria(categoria).length > 0 &&
            filtrarTecnologiasPorCategoria(categoria).map((tech, pos) => (
        
                <p
                key={pos}
                className="rounded-[20px] py-2 px-2 bg-slate-100  text-[#375c86] w-[fit-content] h-[fit-content] text-[14px] md:text-[1rem] xl:text-[1.25rem]"
              >
                {tech.name}
              </p>
           
            ))}
        </div>
      )}
    </article>
  );
};

export default ContenedorTecnologia;
