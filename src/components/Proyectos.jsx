import React, { useState } from "react";
import CardProyecto from "./Proyectos/CardProyecto";
import proyectos from "./helpers/proyectos";
import {Tab, Tabs} from "react-bootstrap";

const Proyectos = () => {
  const [key, setKey] = useState("all");

  const filtrarPorTipo = tipoProyecto => proyectos.filter(p => p.tipo === tipoProyecto);

  return (
    <article
      className="py-3 flex flex-col gap-3 xl:gap-4 items-center px-3 w-[95%] min-h-[95vh]"
      id="proyectos"
    >
      <h2 className="text-center font-bold text-[27px] md:text-[35px] lg:text-[38] xl:text-[40px] text-[#028891]">Proyectos</h2>
      <Tabs
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="flex flex-col sm:flex-row md:gap-5 py-3 lg:mb-5 px-12 items-center rounded-[25px] tabs text-[#028891] bg-[#e0dffd]  md:text-[18px] lg:text-[20px]"
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
              {filtrarPorTipo("Aplicación web").length > 0 && filtrarPorTipo("Aplicación web").map((proyecto) => (
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
          eventKey="landing"
          title="Landing Pages"
          className="flex flex-wrap items-center justify-center gap-3 gap-lg-4"
        >
          {key === "landing" && (
            <div className="flex px-3 containerTabProyects sm:flex-wrap h-[450px] w-[100vw] sm:w-[100%]  sm:h-[100%] sm:pb-[50px]  sm:justify-center md:items-center gap-3 lg:gap-4 ">
              {filtrarPorTipo("Landing Page").map((proyecto) => (
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
              {filtrarPorTipo("Otro").map((proyecto) => (
                <CardProyecto
                  key={proyecto.id}
                  proyecto={proyecto}
                ></CardProyecto>
              ))}
              {filtrarPorTipo("Challenge").map((proyecto) => (
                <CardProyecto
                  key={proyecto.id}
                  proyecto={proyecto}
                ></CardProyecto>
              ))}
            </div>
          )}
          
        </Tab>
      </Tabs>
    </article>
  );
};

export default Proyectos;
