import CardTecnologia from "./CardTecnologia";
import tecnologias from "../../helpers/tecnologias";

const ContenedorTecnologia = ({ categoria, subtitulo }) => {
  const filtrarTecnologiasPorCategoria = (categoria) => {
    return tecnologias.actuales.filter((t) => t.categoria === categoria);
  };

  return (
    <article className="flex flex-col gap- mt-10 xl:w-[80%]">
      <h2 className="rounded-[20px] text-[#333] font-bold w-[fit-content] text-[20px] xl:text-[25px]">
        {subtitulo}
      </h2>
      {categoria === "frontend" || categoria === "backend" ? (
         <div className="flex containerTech xl:w-[100%] min-h-[225px] sm:h-[100%] gap-2 md:gap-3 xl:gap-6 items-center  sm:flex-wrap   ">
      
         {filtrarTecnologiasPorCategoria(categoria).length > 0 && filtrarTecnologiasPorCategoria(categoria).map((tech, pos) => (
           <CardTecnologia key={pos} tech={tech} />
         ))}
       </div>
      ) : (
        <div className="flex containerTech xl:w-[100%] h-[200px] sm:h-[100%] gap-2 md:gap-3 items-center sm:flex-wrap lg:pt-5 px-5 ">
          {filtrarTecnologiasPorCategoria(categoria).length > 0 &&
            filtrarTecnologiasPorCategoria(categoria).map((tech, pos) => (
        
                <p
                key={pos}
                className="rounded-[20px] py-2 px-4 bg-slate-100  text-[#375c86] w-[fit-content]  md:text-[1rem] xl:text-[1.25rem]"
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
