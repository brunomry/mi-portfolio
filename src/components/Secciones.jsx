import React from "react";
import Home from "./Home";
import Tecnologias from "./Tecnologias";
import Contacto from "./Contacto";
import Proyectos from "./Proyectos";
import Certificaciones from "./Certificaciones";
import Footer from "./Footer";

const Secciones = () => {
  return (
    <section className="mainSection d-flex flex-column align-items-center gap-3 pt-2 pt-xl-3">
        <Home></Home>
        <Tecnologias></Tecnologias>
        <Proyectos></Proyectos>
        <Certificaciones></Certificaciones>
        <Contacto></Contacto>
        <Footer></Footer>
    </section>
  );
};

export default Secciones;
