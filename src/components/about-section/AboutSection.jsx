import perfil from "../../assets/about.jpeg";

const AboutSection = () => {
  return (
    <section
      id="sobre-mi"
      className="flex pt-12 pb-12 flex-col w-full min-h-[40vh] bg-[#FFF]
      px-4 md:px-8 lg:px-[100px] xl:px-[120px] 2xl:px-[250px]
      md:min-h-[60vh] md:items-center md:pt-[100px] 
      lg:pt-[120px] xl:pt-[180px] lg:min-h-[70vh]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:flex-1 order-2 lg:order-1">
        <article className="flex flex-col md:gap-4">
          <h2 className="font-extrabold text-[24px] md:text-[28px] xl:text-[32px] 2xl:text-[36px] text-[#000] xl:mb-4">
            Sobre mí
          </h2>
          <p className="text-[#555] text-sm md:text-base font-light leading-relaxed">
            Llevo más de 4 años de formación en desarrollo web y mi carrera en
            Ingeniería en Sistemas me brindó una visión integral que me permite
            poder trabajar un proyecto de principio a fin: desde el análisis de
            requerimientos y bocetos, pasando por diseño, frontend y backend,
            hasta la implementación final. Actualmente me encuentro cerca de
            obtener el título intermedio de Analista de Sistemas y,
            próximamente, tomaré un receso de la universidad para enfocarme de
            lleno en el desarrollo freelance, con el objetivo siempre presente
            de poder sumarme a un equipo profesional donde pueda aportar y
            llevar mis conocimientos a un nuevo nivel. Planeo retomar mis
            estudios universitarios en el futuro para continuar ampliando mis
            capacidades.
          </p>
          <p className="text-[#555] text-sm md:text-base font-light leading-relaxed">
            Además, actualmente trabajo como recepcionista en dos hostales y en
            mis tiempos libres estoy jugando fútbol o dedicándome a mejorar
            proyectos actuales y a diseñar soluciones digitales que ayuden a los
            negocios a gestionar mejor su información y mejorar su presencia en
            Internet.
          </p>
          <div className="flex flex-wrap gap-8 mt-6">
            <div className="flex flex-col items-center">
              <span className="text-2xl 2xl:text-4xl font-bold text-gray-800">
                4+
              </span>
              <span className="text-sm md:text-base text-gray-600">
                Años de formación
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl 2xl:text-4xl font-bold text-gray-800">
                2
              </span>
              <span className="text-sm md:text-base text-gray-600">
                Becas obtenidas
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl 2xl:text-4xl font-bold text-gray-800">
                1+
              </span>
              <span className="text-sm md:text-base text-gray-600">
                Año de experiencia
              </span>
            </div>
            <div className="flex flex-col items-center">
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
          rounded-[20px] border-[4px] md:border-[8px] border-[#d2d2d2] order-1 lg:order-2"
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
