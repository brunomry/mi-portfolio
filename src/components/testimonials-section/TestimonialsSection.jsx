const evidence = [
  {
    type: "Presencia digital y crecimiento",
    title: "Una web que informa, genera confianza y abre conversaciones",
    text: "El sitio del Hostal San Jorge nació para construir una presencia digital profesional y crecer junto al negocio. Hoy funciona como referencia para mostrar habitaciones, servicios y formas de contacto, y además ya generó más de 50 consultas directas por WhatsApp en lo que va del año.",
    link: "https://hostalsanjorgecafayate.com/",
    linkLabel: "Visitar Hostal San Jorge",
  },
  {
    type: "Herramienta comercial en evolución",
    title: "Un sitio que acompaña el crecimiento de la empresa",
    text: "Rafter utiliza su web para presentar la empresa, explicar sus servicios y compartir información con potenciales clientes. El proyecto continúa incorporando cambios y contenidos a medida que el negocio crece.",
    link: "https://rafterconstructoradev.netlify.app/",
    linkLabel: "Visitar Rafter Constructora",
  },
];

const TestimonialsSection = () => (
  <section className="evidence-section w-full">
    <div className="mx-auto max-w-[1320px]">
      <div className="evidence-heading">
        <p className="section-kicker">Confianza en la práctica</p>
        <h2>Lo que ya dicen los proyectos.</h2>
        <p>Hasta contar con testimonios textuales autorizados, prefiero mostrar hechos verificables y relaciones de trabajo reales.</p>
      </div>
      <div className="evidence-grid">
        {evidence.map((item, index) => (
          <article key={item.title} className="evidence-card">
            <span className="evidence-number">0{index + 1}</span>
            <p className="evidence-type">{item.type}</p>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">{item.linkLabel} <i className="bi bi-arrow-up-right" /></a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
