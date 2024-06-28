import React from "react";
import Home from "./Home";
import Tecnologias from "./Tecnologias";
import Contacto from "./Contacto";
import Proyectos from "./Proyectos";
import Certificaciones from "./Certificaciones";

const Secciones = () => {
  return (
    <section className="mainSection d-flex flex-column align-items-center gap-3 py-5 ">
        <Home></Home>
        <Tecnologias></Tecnologias>
        <Proyectos></Proyectos>
        <Certificaciones></Certificaciones>
        <Contacto></Contacto>
    </section>
  );
};

export default Secciones;
