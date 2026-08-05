const reasons = [
  {
    number: "01",
    title: "Visión integral",
    text: "Puedo acompañar el proyecto desde el relevamiento y la estructura visual hasta el desarrollo, la publicación y el mantenimiento.",
  },
  {
    number: "02",
    title: "Capacidad de análisis",
    text: "Mi formación en Ingeniería en Sistemas me permite estudiar los procesos de cualquier tipo de negocio, detectar oportunidades de mejora y traducirlas en una solución clara y viable.",
  },
  {
    number: "03",
    title: "Comunicación directa",
    text: "Trabajás conmigo durante todo el proceso, con decisiones explicadas, avances visibles y espacio real para revisar detalles.",
  },
  {
    number: "04",
    title: "Preparado para crecer",
    text: "No pienso solo en entregar una pantalla: construyo una base que pueda incorporar nuevas funciones cuando el negocio las necesite.",
  },
];

const included = [
  "Análisis inicial y definición de objetivos",
  "Diseño responsive adaptado a tu identidad",
  "Formularios, WhatsApp e integraciones necesarias",
  "Dominio, publicación y configuración técnica",
  "Optimización inicial para buscadores",
  "Revisión, soporte y posibilidad de mantenimiento",
];

const DifferentialsSection = () => (
  <section id="por-que" className="site-section why-section w-full">
    <div className="mx-auto max-w-[1320px]">
      <div className="section-heading-row">
        <div>
          <p className="section-kicker">Una forma clara de trabajar</p>
          <h2 className="section-display">Por qué trabajar conmigo</h2>
        </div>
        <p className="section-lead">El valor no está solamente en programar: está en entender qué necesita funcionar mejor y convertirlo en una solución clara.</p>
      </div>

      <div className="why-layout">
        <div className="why-list">
          {reasons.map((reason) => (
            <article key={reason.number} className="why-item">
              <span>{reason.number}</span>
              <div><h3>{reason.title}</h3><p>{reason.text}</p></div>
            </article>
          ))}
        </div>
        <aside className="included-panel">
          <p className="included-label">En cada proyecto</p>
          <h3>Una solución lista para ponerse a trabajar.</h3>
          <ul>
            {included.map((item) => <li key={item}><i className="bi bi-check2-circle" />{item}</li>)}
          </ul>
          <a href="#contacto" className="included-link">Evaluar mi proyecto <i className="bi bi-arrow-right" /></a>
        </aside>
      </div>
    </div>
  </section>
);

export default DifferentialsSection;
