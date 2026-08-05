import technologies from "../../helpers/technologies.js";

const labels = { frontend: "Frontend habitual", ui: "Diseño", backend: "Backend", bd: "Datos" };

const TechnologiesSection = () => (
  <section className="tools-section w-full" id="tecnologías">
    <div className="mx-auto max-w-[1320px]">
      <div className="tools-heading">
        <div><p className="section-kicker">Herramientas, no protagonistas</p><h2>La tecnología al servicio de la solución.</h2></div>
        <p>Elijo el stack según el proyecto. Estas son las herramientas con las que ya construí interfaces, APIs y sistemas funcionales.</p>
      </div>
      <div className="tools-groups">
        {Object.entries(technologies).map(([category, list]) => (
          <article key={category} className="tools-group">
            <h3>{labels[category]}</h3>
            <div>{list.map((tech) => <span key={tech.name}><img src={tech.icon} alt="" />{tech.name}</span>)}</div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default TechnologiesSection;
