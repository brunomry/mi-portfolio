import Footer from "../components/common/Footer";
import NavbarPrincipal from "../components/common/NavbarPrincipal";
import { useEffect, useState } from "react";
import PresentationSection from "../components/sobreMi/PresentationSection";
import ProjectsSection from "../components/Proyectos/ProjectsSection";
import ServicesSection from "../components/servicios/ServicesSection";
import TechnologiesSection from "../components/tecnologias/TechnologiesSection";
import CertificatesSection from "../components/Certificaciones/CertificatesSection";
import ContactSection from "../components/Contacto/ContactSection";
// import BtnWpp from "../components/common/BtnWpp";
import ProcessSection from "../components/proceso/ProcessSection";

const Home = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const handleScroll = () => setScrollTop(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-[100vh] flex flex-col lg:flex-row">
      <NavbarPrincipal></NavbarPrincipal>
      <section
        id="section"
        className="w-[100%] absolute min-h-screen lg:w-[100%] xl:w-[100%]  bg-[#FAFAFA] flex flex-col justify-center items-center flex-grow  pt-2 xl:pt-3"
      >
        <PresentationSection></PresentationSection>
        <ProjectsSection mostrar={false}></ProjectsSection>
        <ServicesSection></ServicesSection>
        <TechnologiesSection></TechnologiesSection>
        <ProcessSection></ProcessSection>
        <CertificatesSection></CertificatesSection>
        <ContactSection></ContactSection>
        <Footer></Footer>
        {/* {scrollTop > 0 && (
          <a
            href="#sobremi"
            className="btnScrollTop fixed bottom-[80px] md:bottom-[20px] right-5 lg:bottom-[50px] md:right-24 bg-slate-300 px-4 py-2 rounded-sm"
          >
            <i className="bi bi-arrow-up text-[20px]"></i>
          </a>
        )} */}
        {/* <BtnWpp></BtnWpp> */}
      </section>
    </div>
  );
};

export default Home;
