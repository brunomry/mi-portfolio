import { useState } from "react";
import { handleDownloadPDF } from "../../helpers/handleFn";

const Contacto = () => {
  const [copiado, setCopiado] = useState(false);

  const copiarCorreo = () => {
    navigator.clipboard
      .writeText("brunomadozzo@gmail.com")
      .then(() => {
        setCopiado(true);
        setTimeout(() => setCopiado(false), 2000);
      })
      .catch((err) => console.error("Error al copiar el correo:", err));
  };

  return (
    <section
      className="py-12 xl:py-20 2xl:py-40 px-4 md:px-8 lg:px-[100px] xl:px-[120px] 2xl:px-[150px]  flex flex-col gap-4 md:gap-12 min-h-[400px] xl:min-h-[450px] w-[100%] bg-[#FAFAFA] containerContact contact"
      id="contacto"
    >
      <h2 className="font-extrabold text-[24px] md:text-[28px] xl:text-[32px] 2xl:text-[36px] text-[#1d2a4d]">
        Contacto
      </h2>
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 2xl:gap-20 ">
        <div className=" flex flex-col gap-4 md:gap-8 2xl:gap-12 order-1 ">
          <div className="flex flex-col md:gap-4  ">
            <h2 className="font-bold md:font-black text-base lg:text-[20px] text-[#2B7FF7] leading-snug max-w-4xl">
              ¿Estás buscando a una persona con quien colaborar, realmente
              comprometida, con ganas de sumarse y aportar a un equipo?
            </h2>
            <p className="text-[#555] text-sm md:text-base lg:text-md max-w-4xl font-light mt-2">
              ¡No dudes en escribirme! Estoy disponible para unirme y aportar
              mis conocimientos en proyectos web y más.
            </p>
          </div>
          <div className="flex flex-col md:gap-4 ">
            <h2 className="font-bold md:font-black text-base lg:text-[20px] text-[#2B7FF7] leading-snug max-w-4xl">
              ¿Necesitas una web profesional para tu negocio?
            </h2>
            <p className="text-[#555] text-sm md:text-base lg:text-md  max-w-4xl font-light mt-2">
              Trabajemos juntos para mejorar tu presencia digital y llegar a más
              clientes.
            </p>
          </div>
          <div className="flex flex-col md:gap-4 ">
            <h2 className="font-bold md:font-black text-base lg:text-[20px] text-[#2B7FF7] leading-snug max-w-4xl">
              ¿Quieres optimizar la gestión de tu negocio y tener todo
              centralizado en una sola aplicación?
            </h2>
            <p className="text-[#555] text-sm md:text-base lg:text-md  max-w-4xl font-light mt-2">
              Puedo ayudarte a desarrollar soluciones web o apps que ahorren
              tiempo, automaticen tareas y te permitan gestionar tu negocio de
              manera más eficiente.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:flex-wrap lg:flex-nowrap lg:flex-col md:gap-4 justify-start lg:items-stretch items-center md:order-1">
          <a
            onClick={copiarCorreo}
            className="relative w-full md:min-w-[300px] max-w-[320px] flex items-center gap-4 p-4 md:p-6 bg-white border rounded-2xl shadow-md hover:shadow-lg cursor-pointer transition-all"
            title="Haz clic para copiar mi correo"
          >
            <i className="bi bi-envelope-fill text-2xl text-red-500"></i>

            <div className="flex flex-col">
              <span className="text-[#787777] font-medium text-sm">Email</span>
              <span className="text-[#0a0a0a] font-semibold text-sm md:text-base">
                brunomadozzo@gmail.com
              </span>
            </div>
            {copiado && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#1257b8] text-white text-sm rounded-full shadow-lg transition-all">
                Correo copiado!
              </span>
            )}
          </a>
          <a
            href="https://www.linkedin.com/in/bruno-madozzo/"
            target="_blank"
            title="Contáctame por LinkedIn"
            rel="noopener noreferrer"
            className="w-full md:min-w-[320px] max-w-[320px] flex items-center gap-4 p-4 md:p-6 bg-white border rounded-2xl shadow-md hover:shadow-lg transition-all"
          >
            <i className="text-2xl text-[#2B7FF7] bi bi-linkedin"></i>
            <div className="flex flex-col">
              <span className="text-[#787777] text-sm">LinkedIn</span>
              <span className="text-[#0a0a0a] font-semibold text-sm md:text-base">
                Bruno Madozzo
              </span>
            </div>
          </a>
          <a
            href="https://github.com/brunomry"
            target="_blank"
            title="Mi GitHub"
            rel="noopener noreferrer"
            className="w-full min-w-[320px] max-w-[320px] flex items-center gap-4 p-4 md:p-6 bg-white border rounded-2xl shadow-md hover:shadow-lg transition-all"
          >
            <i className="text-2xl text-black bi bi-github"></i>
            <div className="flex flex-col">
              <span className="text-[#787777] text-sm">GitHub</span>
              <span className="text-[#0a0a0a] font-semibold text-sm md:text-base">
                brunomry
              </span>
            </div>
          </a>
          <a
            onClick={handleDownloadPDF}
            title="Descargar CV"
            className="w-full md:min-w-[320px] max-w-[320px] flex items-center gap-4 p-4 md:p-6 bg-white border rounded-2xl shadow-md hover:shadow-lg transition-all"
          >
            <i className="text-2xl text-[#2B7FF7] bi bi-file-earmark-person-fill"></i>
            <div className="flex flex-col">
              <span className="text-[#787777] text-start text-sm">CV</span>
              <span className="text-[#0a0a0a] font-semibold text-sm md:text-base">
                Descargar
              </span>
            </div>
          </a>
          <p className=" text-[#555] text-sm text-center md:text-start mt-4 lg:mt-6">
            También puedes enviarme un mensaje por WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
