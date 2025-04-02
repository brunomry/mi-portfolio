import React, { useState } from "react";
import CardProyecto from "./CardProyecto";
import proyectos from "../../helpers/proyectos";
import { Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";

const Proyectos = () => {
  const [key, setKey] = useState("apps");

  const filtrarPorTipo = (tipoProyecto) =>
    proyectos.filter((p) => p.tipo === tipoProyecto);

  return (
    <section
      className="py-3 flex flex-col gap-3 xl:gap-4 items-center px-3 xl:w-[80%] min-h-[100vh] xl:py-[100px] fondo"
    >
      <div className="w-[80%] rounded-[10px] px-10 py-10 shadow-xl bg-[white]">
      <h1 className=" mb-8 font-bold text-[25px] xl:text-[30px] 2xl:text-[40px] text-[#333]">
        Proyectos destacados
      </h1>
      <article className="flex flex-col px-3 containerTabProyects sm:flex-wrap h-[450px] w-[100vw] sm:w-[100%]  sm:h-[100%] sm:pb-[50px]  sm:justify-center md:items-center gap-3 lg:gap-8 ">
        {filtrarPorTipo("Aplicación web").length > 0 &&
          filtrarPorTipo("Aplicación web").map((proyecto) => (
            <CardProyecto key={proyecto.id} proyecto={proyecto}></CardProyecto>
          ))}
      </article>
          <div className="text-center mb-5">
          <Link
        className=" px-10 py-[20px] text-center w-[200px] rounded-[45px] bg-[#fff] text-[#222] hover:bg-[#000] hover:text-[#fff] border-[#747373] border-[1px] hover:border-[#000] text-[1rem]"
        to={"/masproyectos"}
        title="haz clic para descargar mi CV"
      >
        MÁS PROYECTOS
      </Link>
          </div>
     
      {/* <Tabs
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="flex text-[12px] sm:flex-row px-2 gap-1 xl:gap-5 py-3 lg:mb-5 xl:px-12 items-center rounded-[25px] tabs text-[#787777] bg-[#f7f7f7]  md:text-[1rem] lg:text-[18px] "
      >
        <Tab
          eventKey="all"
          title="Todos"
          className="flex justify-center items-center flex-wrap gap-3 gap-lg-4 rounded-[5px]"
        >
          {key === "all" && (
            <div className=" flex px-3 containerTabProyects sm:flex-wrap h-[450px] w-[100vw] sm:w-[100%]  sm:h-[100%] sm:pb-[50px] sm:justify-center md:items-center gap-3 lg:gap-5 ">
              {proyectos.map((proyecto) => (
                <CardProyecto
                  key={proyecto.id}
                  proyecto={proyecto}
                ></CardProyecto>
              ))}
            </div>
          )}
        </Tab>
        <Tab
          eventKey="apps"
          title="Aplicaciones web"
          className="flex flex-wrap items-center justify-center gap-3 gap-lg-4"
        >
          {key === "apps" && (
            <div className="flex px-3 containerTabProyects sm:flex-wrap h-[450px] w-[100vw] sm:w-[100%]  sm:h-[100%] sm:pb-[50px]  sm:justify-center md:items-center gap-3 lg:gap-4 ">
              {filtrarPorTipo("Aplicación web").length > 0 &&
                filtrarPorTipo("Aplicación web").map((proyecto) => (
                  <CardProyecto
                    key={proyecto.id}
                    proyecto={proyecto}
                  ></CardProyecto>
                ))}
            </div>
          )}
        </Tab>
        <Tab
          eventKey="sites"
          title="Sitios web"
          className="flex flex-wrap items-center justify-center gap-3 gap-lg-4"
        >
          {key === "sites" && (
            <div className="flex px-3 containerTabProyects sm:flex-wrap h-[450px] w-[100vw] sm:w-[100%]  sm:h-[100%] sm:pb-[50px]  sm:justify-center md:items-center gap-3 lg:gap-4 ">
              {filtrarPorTipo("Sitio web").map((proyecto) => (
                <CardProyecto
                  key={proyecto.id}
                  proyecto={proyecto}
                ></CardProyecto>
              ))}
            </div>
          )}
        </Tab>
        <Tab
          eventKey="challenge"
          title="Challenges"
          className="flex flex-wrap items-center justify-center gap-3 gap-lg-4"
        >
          {key === "challenge" && (
            <div className="flex px-3 containerTabProyects sm:flex-wrap h-[450px] w-[100vw] sm:w-[100%]  sm:h-[100%] sm:pb-[50px]  sm:justify-center md:items-center gap-3 lg:gap-4 ">
              {filtrarPorTipo("Challenge").map((proyecto) => (
                <CardProyecto
                  key={proyecto.id}
                  proyecto={proyecto}
                ></CardProyecto>
              ))}
            </div>
          )}
        </Tab>
        <Tab
          eventKey="otros"
          title="Otros"
          className="flex flex-wrap items-center justify-center gap-3 gap-lg-4"
        >
          {key === "otros" && (
            <div className="flex px-3 containerTabProyects sm:flex-wrap h-[450px] w-[100vw] sm:w-[100%] sm:h-[100%] sm:pb-[50px]  sm:justify-center md:items-center gap-3 lg:gap-4 ">
              {filtrarPorTipo("One Page").map((proyecto) => (
                <CardProyecto
                  key={proyecto.id}
                  proyecto={proyecto}
                ></CardProyecto>
              ))}
              {filtrarPorTipo("Landing Page").map((proyecto) => (
                <CardProyecto
                  key={proyecto.id}
                  proyecto={proyecto}
                ></CardProyecto>
              ))}
            </div>
          )}
        </Tab>
      </Tabs> */}
      </div>
    </section>
  );
};

export default Proyectos;
