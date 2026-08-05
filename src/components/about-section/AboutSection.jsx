import perfil from "../../assets/about.jpeg";

const AboutSection = () => (
  <section id="sobre-mi" className="site-section about-editorial w-full">
    <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
      <div className="about-photo-column">
        <div className="about-photo"><img src={perfil} alt="Bruno Madozzo" /></div>
        <div className="about-caption"><span>Cafayate · Argentina</span><span>Trabajo remoto</span></div>
      </div>
      <article className="about-story">
        <p className="section-kicker">La persona detrás del código</p>
        <h2 className="section-display">Entender la operación cambia la solución.</h2>
        <p className="about-opening">Mi formación en Ingeniería en Sistemas me enseñó a mirar un proyecto completo: analizar, ordenar, diseñar, desarrollar y mejorar.</p>
        <div className="about-columns">
          <p>Además de desarrollar, trabajo en la operación diaria de alojamientos. Conozco de primera mano las reservas, la atención al huésped, la organización de información y esas pequeñas tareas que, cuando se acumulan, consumen tiempo.</p>
          <p>Por eso no pienso únicamente en una interfaz atractiva. Pienso en quién la va a usar, qué necesita resolver en pocos pasos y cómo puede acompañar el crecimiento real del negocio.</p>
        </div>
        <blockquote>La tecnología funciona mejor cuando se adapta al trabajo real, no cuando obliga al negocio a adaptarse a ella.</blockquote>
        <div className="about-facts">
          <div><strong>4+</strong><span>años de formación continua</span></div>
          <div><strong>2</strong><span>becas de formación obtenidas</span></div>
          <div><strong>Full stack</strong><span>con foco en frontend y producto</span></div>
        </div>
      </article>
    </div>
  </section>
);

export default AboutSection;
