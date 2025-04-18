import { useEffect, useState } from "react";
import Tecnologias from "./tecnologias/Tecnologias";
import AcercaDeMi from "./sobreMi/AcercaDeMi";
import Proyectos from "./Proyectos/Proyectos";
import Certificaciones from "./Certificaciones/Certificaciones";
import Contacto from "./Contacto/Contacto";
import Footer from "./Footer";
import Servicios from "./servicios/Servicios";

const Secciones = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const handleScroll = () => setScrollTop(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="section"
      className="w-[100%] absolute min-h-screen lg:w-[75%] lg:ml-[25%] xl:w-[80%] xl:ml-[20%] bg-[#fff] flex flex-col items-center gap-3 pt-2 xl:pt-3"
    >
      <AcercaDeMi></AcercaDeMi>
      <Tecnologias></Tecnologias>
      <Proyectos></Proyectos>
      <Certificaciones></Certificaciones>
      <Servicios></Servicios>
      <Contacto></Contacto>
      <Footer></Footer>
      {scrollTop > 0 && (
        <a
          href="#sobremi"
          className="btnScrollTop fixed bottom-[20px] right-5 md:bottom-[50px] md:right-10 bg-slate-300 px-4 py-2 rounded-sm"
        >
          <i className="bi bi-arrow-up text-[20px]"></i>
        </a>
      )}
    </section>
  );
};

export default Secciones;
