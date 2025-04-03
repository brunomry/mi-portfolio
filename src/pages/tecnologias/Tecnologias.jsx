import ContenedorTecnologia from "./ContenedorTecnologia";

const Tecnologias = () => {
  return (
    <section className="w-[100%] md:w-[90%] xl:w-[80%] min-h-[100vh] bg-[#fff] text-[#028891]  flex flex-col md:gap-2 items-center tecnologias py-[100px]  mb-[20px] fondo">
      <div className="w-[80%] rounded-[10px] px-10 py-10 shadow-xl bg-[white]">
        <h1 className="font-bold mb-2 text-[25px] xl:text-[30px] 2xl:text-[40px] text-[#333]">
          Tecnologías
        </h1>
        <p className="text-[#787777] md:text-[1rem] xl:text-[1.25rem] ">
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
