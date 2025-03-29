import Tecnologia from "./CardTecnologia";
import tecnologias from "../../helpers/tecnologias";
import CardTecnologia from "./CardTecnologia";

const Tecnologias = () => {

  const filtrarTecnologiasPorCategoria = (categoria) => {
    return tecnologias.actuales.filter(t => t.categoria === categoria)
  }

  return (
    <section
      className="w-[100%] md:w-[90%] xl:w-[80%] min-h-[100vh] bg-[#fff] text-[#028891]  flex flex-col md:gap-2 items-center tecnologias py-[100px]  mb-[20px] fondo"
    >
      <h2 className="font-bold mb-2 text-[25px] xl:text-[30px] 2xl:text-[35px] text-[#333]">
        &lt; Tecnologías /&gt;
      </h2>
      <p className="text-center text-[#787777] px-2 md:text-[1rem] xl:text-[1.125rem] 2xl:text-[20px]">
        Estas son las tecnologías, herramientas y más que aplico en mis proyectos o de las cuales
        tengo conocimientos.
      </p>
      <article className="flex flex-col items-center gap-5 mt-10 xl:w-[80%]">
      <h3 className=" rounded-[20px] bg-[#375c86] py-2 px-4 text-[#fff] w-[fit-content] text-[20px] xl:text-[22px]">Frontend</h3>
      <div className="flex justify-center containerTech xl:w-[100%] h-[200px] sm:h-[100%] gap-2 md:gap-3 xl:gap-6 items-center  sm:flex-wrap lg:pt-5 px-5 ">
      
        {filtrarTecnologiasPorCategoria("frontend").length > 0 && filtrarTecnologiasPorCategoria("frontend").map((tech, pos) => (
          <CardTecnologia key={pos} tech={tech} />
        ))}
      </div>
      </article>
      <article className="flex flex-col items-center gap-5 mt-10 xl:w-[80%]">
      <h3 className="rounded-[20px] bg-[#375c86] py-2 px-4 text-[#fff] w-[fit-content] text-[20px] xl:text-[22px]">Backend</h3>
      <div className="flex justify-center containerTech xl:w-[100%] h-[200px] sm:h-[100%] gap-2 md:gap-3 xl:gap-6 items-center sm:flex-wrap lg:pt-5 px-5 ">
       
       {filtrarTecnologiasPorCategoria("backend").length > 0 && filtrarTecnologiasPorCategoria("backend").map((tech, pos) => (
         <CardTecnologia key={pos} tech={tech} />
       ))}
     </div>
      </article>
      <article className="flex flex-col gap-5 mt-10 xl:w-[80%]">
      <h3 className="rounded-[20px] bg-[#375c86] py-2 px-4 text-[#fff] w-[fit-content] text-[20px] xl:text-[22px]">Versionado y colaboración</h3>
      <div className="flex containerTech xl:w-[100%] h-[200px] sm:h-[100%] gap-2 md:gap-3 items-center sm:flex-wrap lg:pt-5 px-5 ">
       
       {filtrarTecnologiasPorCategoria("colaboracion").length > 0 && filtrarTecnologiasPorCategoria("colaboracion").map((tech, pos) => (
         <div key={pos}>
            <p className="rounded-[20px] border py-2 px-4  w-[fit-content] text-[#375c86] md:text-[1rem] xl:text-[1.125rem]">{tech.name}</p>
          </div>
       ))}
     </div>
      </article>
      <article className="flex flex-col gap-5 mt-10 xl:w-[80%]">
      <h3 className="rounded-[20px] bg-[#375c86] py-2 px-4 text-[#fff] w-[fit-content] text-[20px] xl:text-[22px]">SEO</h3>
      <div className="flex containerTech xl:w-[100%] h-[200px] sm:h-[100%] gap-2 md:gap-3 items-center sm:flex-wrap lg:pt-5 px-5 ">
       
       {filtrarTecnologiasPorCategoria("SEO").length > 0 && filtrarTecnologiasPorCategoria("SEO").map((tech, pos) => (
         <div key={pos}>
            <p className="rounded-[20px] border py-2 px-4   w-[fit-content] text-[#375c86] md:text-[1rem] xl:text-[1.125rem]">{tech.name}</p>
          </div>
       ))}
     </div>
      </article>
      <article className="flex flex-col gap-5 mt-10 xl:w-[80%]">
      <h3 className="rounded-[20px] bg-[#375c86] py-2 px-4 text-[#fff] w-[fit-content] text-[20px] xl:text-[22px]">Documentación</h3>
      <div className="flex containerTech xl:w-[100%] h-[200px] sm:h-[100%] gap-2 md:gap-3 items-center sm:flex-wrap lg:pt-5 px-5 ">
       
       {filtrarTecnologiasPorCategoria("documentacion").length > 0 && filtrarTecnologiasPorCategoria("documentacion").map((tech, pos) => (
         <div key={pos}>
            <p className="rounded-[20px] border py-2 px-4  w-[fit-content] text-[#375c86] md:text-[1rem] xl:text-[1.125rem]">{tech.name}</p>
          </div>
       ))}
     </div>
      </article>
      <article className="flex flex-col gap-5 mt-10 xl:w-[80%]">
      <h3 className="rounded-[20px] bg-[#375c86] py-2 px-4 text-[#fff] w-[fit-content] text-[20px] xl:text-[22px]">Otras</h3>
      <div className="flex containerTech xl:w-[100%] h-[200px] sm:h-[100%] gap-2 md:gap-3 items-center sm:flex-wrap lg:pt-5 px-5 ">
       
       {filtrarTecnologiasPorCategoria("otras").length > 0 && filtrarTecnologiasPorCategoria("otras").map((tech, pos) => (
         <div key={pos}>
            <p className="rounded-[20px] border py-2 px-4  text-[#375c86] w-[fit-content]  md:text-[1rem] xl:text-[1.125rem]">{tech.name}</p>
          </div>
       ))}
     </div>
      </article>
      {/* <h3 className="px-2 md:px-10 text-[#444] me-auto font-bold mt-3 sm:flex-wrap md:text-[20px] lg:text-[25px]">
        Actualmente aprendiendo...
      </h3>
      <div className="flex containerTech w-[100%] h-[200px] sm:h-[100%] sm:flex-wrap gap-2 md:gap-3 xl:gap-6 items-center sm:justify-center lg:pt-5 px-5 ">
        {tecnologias.aprendiendo.map((tech, pos) => (
          <CardTecnologia key={pos} tech={tech} />
        ))}
      </div> */}
    </section>
  );
};

export default Tecnologias;
