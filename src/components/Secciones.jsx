import Tecnologias from "./Tecnologias";
import Contacto from "./Contacto";
import Proyectos from "./Proyectos";
import Certificaciones from "./Certificaciones";
import Footer from "./Footer";
import AcercaDeMi from "./AcercaDeMi";
import { useEffect, useState } from "react";

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
      <Contacto></Contacto>
      <Footer></Footer>
      {scrollTop > 0 && (
        <a
          href="#sobremi"
          className="btnScrollTop fixed bottom-[50px] right-10 bg-slate-300 px-4 py-2 rounded-sm"
        >
          <i className="bi bi-arrow-up text-[20px]"></i>
        </a>
      )}
    </section>
  );
};

export default Secciones;
