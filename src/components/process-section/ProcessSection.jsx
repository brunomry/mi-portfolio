import processSteps from "../../helpers/processSteps.js";

const ProcessSection = () => (
  <section className="site-section process-section w-full" id="proceso">
    <div className="mx-auto max-w-[1320px]">
      <div className="section-heading-row">
        <div><p className="section-kicker">Del primer mensaje a la publicación</p><h2 className="section-display">Un proceso visible y sin sorpresas</h2></div>
        <p className="section-lead">Cada etapa termina con algo concreto. Sabés qué estamos resolviendo, qué sigue y qué necesitás revisar.</p>
      </div>
      <div className="process-track">
        {processSteps.map((step, index) => {
          const Icon = step.Icon;
          return (
            <article key={step.id} className="process-node">
              <div className="process-node-head"><span>0{index + 1}</span><div><Icon className="h-5 w-5" /></div></div>
              <h3>{step.title}</h3><p>{step.description}</p>
              <strong><i className="bi bi-check2" /> {step.deliverable}</strong>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default ProcessSection;
