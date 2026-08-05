const solutions = [
  {
    number: "01",
    title: "Sitios web profesionales",
    promise: "Para que tu negocio se vea tan sólido como el trabajo que hace.",
    description: "Sitios claros, rápidos y adaptados a celulares que presentan tu propuesta, generan confianza y facilitan el contacto.",
    includes: ["Diseño responsive", "Formularios y WhatsApp", "SEO inicial", "Dominio y publicación"],
    icon: "bi-window",
  },
  {
    number: "02",
    title: "Landing pages",
    promise: "Una página, un objetivo, menos distracciones.",
    description: "Páginas enfocadas en promocionar un servicio, producto o lanzamiento y transformar visitas en consultas.",
    includes: ["Estructura de conversión", "Llamados a la acción", "Medición", "Optimización móvil"],
    icon: "bi-cursor",
  },
  {
    number: "03",
    title: "Aplicaciones de gestión",
    promise: "Procesos dispersos convertidos en un flujo de trabajo.",
    description: "Soluciones a medida para centralizar clientes, reservas, órdenes, pagos, inventario u operaciones internas.",
    includes: ["Análisis de procesos", "Paneles administrativos", "API y base de datos", "Accesos y validaciones"],
    icon: "bi-kanban",
  },
  {
    number: "04",
    title: "Mejora y mantenimiento",
    promise: "Tu producto no termina el día de la publicación.",
    description: "Rediseño, rendimiento, SEO, correcciones y nuevas funcionalidades para sitios o aplicaciones existentes.",
    includes: ["Auditoría inicial", "Rediseño", "Rendimiento", "Soporte evolutivo"],
    icon: "bi-arrow-repeat",
  },
];

const ServicesSection = () => (
  <section id="servicios" className="site-section services-studio w-full">
    <div className="mx-auto max-w-[1320px]">
      <div className="services-intro">
        <p className="section-kicker">Qué podemos construir</p>
        <h2 className="section-display">Servicios convertidos en soluciones.</h2>
        <p>No necesitás conocer la tecnología correcta antes de escribirme. Primero entendemos el objetivo; después definimos qué conviene construir.</p>
      </div>
      <div className="solutions-list">
        {solutions.map((solution) => (
          <article key={solution.number} className="solution-row">
            <span className="solution-number">{solution.number}</span>
            <div className="solution-icon"><i className={`bi ${solution.icon}`} /></div>
            <div className="solution-main"><h3>{solution.title}</h3><strong>{solution.promise}</strong><p>{solution.description}</p></div>
            <ul>{solution.includes.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        ))}
      </div>
      <div className="services-cta">
        <p>¿Tu necesidad no encaja exactamente en una categoría?</p>
        <a href="#contacto">La evaluamos juntos <i className="bi bi-arrow-right" /></a>
      </div>
    </div>
  </section>
);

export default ServicesSection;
