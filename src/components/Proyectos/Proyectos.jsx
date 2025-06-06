import CardProyecto from "./CardProyecto";
import proyectos from "../helpers/proyectos";

const Proyectos = () => {
  return (
    <article
      className="py-40 md:px-[150px] flex flex-col gap-3 xl:gap-4 px-3 w-[100%] bg-[#fff] md:min-h-[100vh] lg:min-h-[60vh]"
      id="proyectos"
    >
      <h2 className="font-black text-[25px] xl:text-[30px] 2xl:text-[35px] text-[#333] xl:mb-8">
        Proyectos destacados
      </h2>
      <div className=" flex containerTabProyects sm:flex-wrap h-[450px] w-[100vw] sm:w-[100%]  sm:h-[100%] sm:pb-[50px]  gap-3 lg:gap-6 ">
        {proyectos.map((proyecto) => (
          <CardProyecto key={proyecto.id} proyecto={proyecto}></CardProyecto>
        ))}
      </div>
      <div className="flex flex-col mt-8 justify-center gap-4 md:gap-4 xl:gap-5">
            <div className="flex flex-col gap-2 md:flex-row md:gap-3">
              <button
                className="flex gap-3 justify-center px-5 py-[10px] 2xl:py-[15px] w-[250px] rounded-[45px] bg-[#fff] text-[#2B7FF7] hover:bg-[#2B7FF7] hover:text-[#fff] border-[#2B7FF7] border-[1px] hover:border-[#2B7FF7] text-[16px] md:text-[1rem]"
              
                title="haz clic para descargar mi CV"
              >              
                <span className="font-black">Ver más Proyectos </span>
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
    </article>
  );
};

export default Proyectos;
