import perfil from "../../assets/about.jpeg";

const AboutSection = () => {
  return (
    <section
      id="sobre-mi"
      className="site-section section-white flex flex-col w-full"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:flex-1 order-2 lg:order-1">
        <article className="flex flex-col md:gap-4">
          <h2 className="section-heading font-black text-[32px] md:text-[48px] text-[#102a43] tracking-[-0.04em] xl:mb-4">
            Sobre mí
          </h2>
          <p className="text-[#555] text-sm md:text-base font-light leading-relaxed">
            Llevo más de 4 años formándome en desarrollo web y mi carrera en
            Ingeniería en Sistemas me dio una visión integral para trabajar
            proyectos de principio a fin: desde el análisis y diseño, hasta el
            desarrollo y mejora continua de cada solución.
          </p>
          <p className="text-[#555] text-sm md:text-base font-light leading-relaxed">
            Además, trabajo actualmente a medio turno como recepcionista en dos hostales, lo que me dio
            una comprensión profunda de cómo funciona un negocio por dentro:
            reservas, atención al cliente, organización de información y
            procesos diarios. A partir de esta experiencia y más, desarrollo
            aplicaciones y sitios web pensados desde la operación real, que
            mejoran la organización, aumentan la visibilidad y ayudan a tomar
            mejores decisiones.
          </p>
          <div className="flex flex-wrap gap-8 mt-6">
            <div className="stat-card flex flex-col items-center">
              <span className="text-2xl 2xl:text-4xl font-bold text-gray-800">
                4+
              </span>
              <span className="text-sm md:text-base text-gray-600">
                Años de formación
              </span>
            </div>
            <div className="stat-card flex flex-col items-center">
              <span className="text-2xl 2xl:text-4xl font-bold text-gray-800">
                2
              </span>
              <span className="text-sm md:text-base text-gray-600">
                Becas obtenidas
              </span>
            </div>
            <div className="stat-card flex flex-col items-center">
              <span className="text-2xl 2xl:text-4xl font-bold text-gray-800">
                1+
              </span>
              <span className="text-sm md:text-base text-gray-600">
                Año de experiencia
              </span>
            </div>
            <div className="stat-card flex flex-col items-center">
              <span className="text-2xl 2xl:text-4xl font-bold text-gray-800">
                15+
              </span>
              <span className="text-sm md:text-base text-gray-600">
                Tecnologías dominadas
              </span>
            </div>
          </div>
        </article>
        <article
          className="w-full h-[400px]
           lg:h-[550px] 2xl:h-[600px] 2xl:w-[75%]
          rounded-[28px] border-[8px] border-[#e8f4f2] shadow-[0_28px_65px_rgba(16,42,67,.13)] overflow-hidden order-1 lg:order-2"
        >
          <img
            src={perfil}
            alt="Bruno Madozzo"
            className="w-full h-full rounded-[8px] object-cover"
          />
        </article>
      </div>
    </section>
  );
};

export default AboutSection;
