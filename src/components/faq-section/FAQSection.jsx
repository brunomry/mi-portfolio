import { useState } from "react";

const faqs = [
  ["¿Cuánto tarda un proyecto?", "Depende del alcance. Una landing page puede requerir entre dos y cuatro semanas; un sitio completo o una aplicación a medida necesitan una evaluación previa."],
  ["¿Trabajás con clientes de otras ciudades?", "Sí. El relevamiento, seguimiento y las revisiones pueden realizarse de manera remota, con comunicación directa durante todo el proceso."],
  ["¿Puedo solicitar cambios después de la entrega?", "La propuesta incluye las revisiones y cambios definidos dentro del presupuesto acordado. Si después de la entrega necesitás nuevas modificaciones o funcionalidades, evaluamos su alcance y preparo una nueva cotización."],
  ["¿También gestionás dominio y publicación?", "Sí. Puedo acompañarte con la elección y configuración del dominio, hosting, despliegue y aspectos técnicos necesarios para publicar."],
  ["¿Trabajás sobre páginas o aplicaciones existentes?", "Sí. Primero realizo una revisión técnica para conocer el estado del proyecto, las tecnologías utilizadas y el alcance de los cambios. A partir de ese análisis, puedo continuar sobre la base existente, proponer mejoras o recomendar una migración cuando sea la opción más segura y sostenible. Antes de avanzar, explico las alternativas, sus costos y sus implicancias. La viabilidad se confirma después de la revisión técnica inicial."],
  ["¿Cómo se define el presupuesto?", "Se calcula según los objetivos, cantidad de secciones, funcionalidades, integraciones, complejidad y necesidades de soporte. Primero definimos el alcance para que la propuesta sea clara."],
  ["¿Cómo se realizan los pagos?", "En proyectos de duración corta, generalmente trabajo con un 50 % al comenzar y el 50 % restante al finalizar. Si el desarrollo requiere más tiempo, podemos definir pagos por etapas. En productos SaaS, se evalúa un pago inicial por la implementación y luego un abono mensual por el uso, soporte y mantenimiento del software."],
];

const FAQSection = () => {
  const [open, setOpen] = useState(0);
  return (
    <section id="preguntas" className="site-section faq-section w-full">
      <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <div className="faq-intro">
          <p className="section-kicker">Antes de empezar</p>
          <h2 className="section-display">Preguntas frecuentes</h2>
          <p>Un proyecto claro comienza por despejar dudas. Si la tuya no está acá, escribime y la vemos juntos.</p>
          <a href="#contacto">Hacer otra consulta <i className="bi bi-arrow-right" /></a>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <article key={question} className={`faq-item ${open === index ? "faq-item-open" : ""}`}>
              <button type="button" onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}>
                <span>{question}</span><i className={`bi ${open === index ? "bi-dash" : "bi-plus"}`} />
              </button>
              <div className="faq-answer"><p>{answer}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
