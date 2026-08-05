import Footer from "../common/Footer";
import NavbarPrincipal from "../common/NavbarPrincipal";
import HeroSection from "../components/hero-section/HeroSection";
import ProjectsSection from "../components/projects-section/ProjectsSection";
import ProcessSection from "../components/process-section/ProcessSection";
import CertificatesSection from "../components/certificates-section/CertificatesSection";
import ContactSection from "../components/contact-section/ContactSection";
import TechnologiesSection from "../components/technologies-section/TechnologiesSection";
import ServicesSection from "../components/services-section/ServicesSection";
import AboutSection from "../components/about-section/AboutSection";
import ResultsSection from "../components/results-section/ResultsSection";
import DifferentialsSection from "../components/differentials-section/DifferentialsSection";
import TestimonialsSection from "../components/testimonials-section/TestimonialsSection";
import FAQSection from "../components/faq-section/FAQSection";

const Home = () => {
  return (
    <div className="site-shell min-h-[100vh] flex flex-col">
      <NavbarPrincipal></NavbarPrincipal>
      <main
        id="section"
        className="w-full min-h-screen flex flex-col items-center"
      >
        <HeroSection></HeroSection>
        <ResultsSection></ResultsSection>
        <ProjectsSection></ProjectsSection>
        <ServicesSection></ServicesSection>
        <DifferentialsSection></DifferentialsSection>
        <TestimonialsSection></TestimonialsSection>
        <ProcessSection></ProcessSection>
        <AboutSection></AboutSection>
        <TechnologiesSection></TechnologiesSection>
        <CertificatesSection></CertificatesSection>
        <FAQSection></FAQSection>
        <ContactSection></ContactSection>
        <Footer></Footer>
      </main>
    </div>
  );
};

export default Home;
