import React from "react";
import Home from "./Home";
import Tecnologias from "./Tecnologias";
import Contacto from "./Contacto";
import Proyectos from "./Proyectos";
import Certificaciones from "./Certificaciones";
import Footer from "./Footer";

const Secciones = () => {
  return (
    <section className="w-[100%] absolute min-h-screen lg:w-[75%] lg:ml-[25%] xl:w-[80%] xl:ml-[20%] bg-[#eae8ff] flex flex-col items-center gap-3 pt-2 xl:pt-3">
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
