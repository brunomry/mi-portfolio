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
            Llevo más de 4 años formándome en desarrollo web y mi carrera en
            Ingeniería en Sistemas me dio una visión integral para trabajar
            proyectos de principio a fin: desde el análisis y diseño, hasta el
            desarrollo y la implementación final.
          </p>
          <p className="text-[#555] text-sm md:text-base font-light leading-relaxed">
            Además, trabajo como recepcionista en dos hostales, lo que me dio
            una comprensión profunda de cómo funciona un negocio por dentro:
            reservas, atención al cliente, organización de información y
            procesos diarios. Gracias a esto, desarrollo aplicaciones y sitios
            web pensados desde la operación real, que ayudan a los negocios a
            trabajar mejor y crecer.
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
