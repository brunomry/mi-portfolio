import React from "react";
import Home from "./Home";
import Tecnologias from "./Tecnologias";
import Contacto from "./Contacto";
import Proyectos from "./Proyectos";

const Secciones = () => {
  return (
    <section className="mainSection d-flex flex-column align-items-center">
        <Home></Home>
        <Tecnologias></Tecnologias>
        <Proyectos></Proyectos>
        <Contacto></Contacto>
    </section>
  );
};

export default Secciones;
