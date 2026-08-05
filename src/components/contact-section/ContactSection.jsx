import { useState } from "react";
import { handleCV, handleWpp } from "../../helpers/handleFn.js";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    await navigator.clipboard.writeText("brunomadozzo@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="contact-stage w-full" id="contacto">
      <div className="mx-auto max-w-[1320px]">
        <div className="contact-main">
          <div className="contact-message">
            <p className="contact-kicker">El próximo paso puede ser simple</p>
            <h2>¿Tenés un proyecto o un proceso que podría funcionar mejor?</h2>
            <p>Contame qué necesitás. Puedo ayudarte a ordenar la idea, definir una solución y convertirla en un producto web claro, funcional y preparado para crecer.</p>
            <div className="contact-primary-actions">
              <button type="button" onClick={() => handleWpp("Hola Bruno, vi tu portfolio y quisiera consultarte por un proyecto web.")}><i className="bi bi-whatsapp" /> Escribirme por WhatsApp</button>
              <button type="button" onClick={copyEmail}><i className="bi bi-envelope" /> {copied ? "Correo copiado" : "Copiar correo"}</button>
            </div>
            <p className="contact-availability"><span /> Disponible para proyectos freelance y colaboraciones remotas.</p>
          </div>
          <div className="contact-routes">
            <article><span>Para negocios y profesionales</span><h3>Una web o sistema pensado para un objetivo concreto.</h3><p>Presencia digital, consultas, reservas, clientes o procesos internos.</p></article>
            <article><span>Para empresas y equipos</span><h3>Una persona que puede aportar producto y desarrollo.</h3><p>Abierto a colaborar en proyectos frontend, backend y análisis de soluciones.</p></article>
          </div>
        </div>
        <div className="contact-footer-links">
          <a href="mailto:brunomadozzo@gmail.com"><span>Email</span>brunomadozzo@gmail.com</a>
          <a href="https://www.linkedin.com/in/bruno-madozzo/" target="_blank" rel="noopener noreferrer"><span>LinkedIn</span>Bruno Madozzo <i className="bi bi-arrow-up-right" /></a>
          <a href="https://github.com/brunomry" target="_blank" rel="noopener noreferrer"><span>GitHub</span>brunomry <i className="bi bi-arrow-up-right" /></a>
          <button type="button" onClick={handleCV}><span>Currículum</span>Ver CV <i className="bi bi-download" /></button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
