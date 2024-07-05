import React, { useState } from "react";
import CardProyecto from "./Proyectos/CardProyecto";
import proyectos from "./helpers/proyectos";
import { Link, NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
const Proyectos = () => {

  const [key, setKey] = useState("all");

  const filtrarPorTipo = tipoProyecto => proyectos.filter(p => p.tipo === tipoProyecto);

  return (
    <article
      className="py-4 d-flex flex-column gap-2 gap-xl-4 align-items-center px-3 section proyects  "
      id="proyectos"
    >
      <h2 className="text-center display-6 fw-bold ">Proyectos</h2>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="d-flex gap-1 py-3 px-3 align-items-center rounded-5 tabs sizeText"
      >
        <Tab
          eventKey="all"
          title="Todos"
          className="d-flex justify-content-center align-items-center flex-wrap gap-3 gap-lg-4 "
        >
          {key === "all" && (
            <div className="d-flex justify-content-center align-items-center flex-wrap gap-3 gap-lg-4">
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
          className="d-flex justify-content-center align-items-center flex-wrap gap-3 gap-lg-4"
        >
          {key === "apps" && (
            <div className="d-flex justify-content-center align-items-center flex-wrap gap-3 gap-lg-4">
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
          className="d-flex justify-content-center align-items-center flex-wrap gap-3 gap-lg-4"
        >
          {key === "sites" && (
            <div className="d-flex justify-content-center align-items-center flex-wrap gap-3 gap-lg-4">
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
          className="d-flex justify-content-center align-items-center flex-wrap gap-3 gap-lg-4"
        >
          {key === "landing" && (
            <div className="d-flex justify-content-center align-items-center flex-wrap gap-3 gap-lg-4">
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
          className="d-flex justify-content-center align-items-center flex-wrap gap-3 gap-lg-4"
        >
          {key === "otros" && (
            <div className="d-flex justify-content-center align-items-center flex-wrap gap-3 gap-lg-4">
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
