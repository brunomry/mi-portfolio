import ContenedorTecnologia from "./ContenedorTecnologia";

const Tecnologias = () => {
  return (
    <section className="w-[100%] md:w-[100%] lg:w-[75%] xl:w-[80%]  text-[#028891]  flex flex-col md:gap-2 items-center tecnologias pt-[50px] md:pt-[50px] mb-[20px] fondo mainSection">
      <div className="w-[100%] rounded-[10px] p-2 md:px-10 md:py-10 ">
        <h1 className="font-bold text-[20px] mb-2 md:text-[25px] xl:text-[30px] 2xl:text-[40px] text-[#333]">
          Tecnologías
        </h1>
        <p className="text-[#787777] text-[14px] md:text-[1rem] xl:text-[1.25rem] ">
          Estas son las tecnologías, herramientas y más que aplico en mis
          proyectos o de las cuales tengo conocimientos.
        </p>
        <ContenedorTecnologia
          categoria="frontend"
          subtitulo="Frontend"
        ></ContenedorTecnologia>
        <ContenedorTecnologia
          categoria="backend"
          subtitulo="Backend"
        ></ContenedorTecnologia>
        <ContenedorTecnologia
          categoria="colaboracion"
          subtitulo="Versionado y colaboración"
        ></ContenedorTecnologia>
        <ContenedorTecnologia
          categoria="SEO"
          subtitulo="SEO"
        ></ContenedorTecnologia>
        <ContenedorTecnologia
          categoria="documentacion"
          subtitulo="Documentación"
        ></ContenedorTecnologia>
        <ContenedorTecnologia
          categoria="otras"
          subtitulo="Otras"
        ></ContenedorTecnologia>
      </div>
    </section>
  );
};

export default Tecnologias;
