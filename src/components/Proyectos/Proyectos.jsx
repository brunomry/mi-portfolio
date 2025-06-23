import CardProyecto from "./CardProyecto";
import proyectos from "../../helpers/proyectos";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Proyectos = () => {

  const [listaProyectos, setListaProyectos] = useState({});

  useEffect(()=>{
    const proyectosActuales = proyectos.slice(0,3)
    setListaProyectos(proyectosActuales)
  },[])

  return (
    <article
      className="py-8 md:py-20 md:px-8 xl:py-40 lg:px-[100px] xl:px-[150px] flex flex-col gap-3 xl:gap-4 px-4 w-[100%] bg-[#fff] md:min-h-[100vh] lg:min-h-[60vh]"
      id="proyectos"
    >
      <h2 className="font-black text-[25px] xl:text-[30px] 2xl:text-[35px] text-[#333] md:mb-8">
        Proyectos destacados
      </h2>
      <div className=" flex flex-col md:flex-row sm:flex-wrap min-h-[450px] w-[100%] sm:w-[100%]  sm:h-[100%] sm:pb-[50px]  gap-8 lg:gap-8 xl:gap-12 2xl:gap-20 ">
        {listaProyectos.length > 0 && listaProyectos.map((proyecto) => (
          <CardProyecto key={proyecto.id} proyecto={proyecto}></CardProyecto>
        ))}
      </div>
      <div className="flex flex-col mt-8 justify-center gap-4 md:gap-4 xl:gap-5">
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-3">
          <Link
            className="flex gap-3 justify-center px-5 py-[10px] 2xl:py-[15px] w-[250px] rounded-[45px] bg-[#fff] text-[#2B7FF7] hover:bg-[#2B7FF7] hover:text-[#fff] border-[#2B7FF7] border-[1px] hover:border-[#2B7FF7] text-[16px] md:text-[1rem]"
            title="haz clic para ver otros proyectos"
            to={"/proyectos/otros-proyectos"}
          >
            <span className="font-black">Ver más Proyectos </span>
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Proyectos;
