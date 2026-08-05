const results = [
  {
    value: "+50",
    label: "consultas directas",
    text: "generadas por WhatsApp para un alojamiento local después de rediseñar su web.",
    accent: true,
  },
  {
    value: "En uso",
    label: "como herramienta comercial",
    text: "una web que la empresa comparte para presentar mejor sus servicios a clientes.",
  },
  {
    value: "De punta a punta",
    label: "una sola mirada",
    text: "análisis, interfaz, desarrollo, publicación, soporte y nuevas mejoras.",
  },
];

const ResultsSection = () => (
  <section className="results-section w-full" aria-label="Resultados y experiencia">
    <div className="mx-auto grid max-w-[1320px] gap-0 lg:grid-cols-[.75fr_1fr_1fr_1fr]">
      <div className="results-intro">
        <span className="section-index">01</span>
        <p>Resultados antes que promesas.</p>
      </div>
      {results.map((result) => (
        <article key={result.label} className={`result-item ${result.accent ? "result-item-featured" : ""}`}>
          <strong>{result.value}</strong>
          <h2>{result.label}</h2>
          <p>{result.text}</p>
        </article>
      ))}
    </div>
  </section>
);

export default ResultsSection;
