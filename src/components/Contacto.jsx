import React from "react";
import FormContacto from "./Contacto/FormContacto";

const Contacto = () => {
  return (
    <article
      className="flex flex-col items-center justify-center gap-2 min-h-[550px] w-[95%] px-3 py-4 containerContact sm:gap-5 contact"
      id="contacto"
    >
      <h2 className="font-bold text-[27px] md:text-[35px] lg:text-[38px] xl:text-[40px] text-[#028891]">Contáctame</h2>
      <div className="flex flex-col gap-2 md:flex-row xl:gap-3 ">
        <FormContacto></FormContacto>
        <div className="flex flex-col items-center">
          <p className="mt-5 text-center descriptionContact sm:w-[80%] lg:text-start md:text-[18px] lg:text-[20px] text-[#028891]">
            Si estás interesado en mi perfil, no dudes en ponerte en contacto
            conmigo.{" "}
          </p>
          <div className="flex flex-col gap-2 mt-6 md:text-[18px] lg:text-[20px] text-[#028891]">
            <div className="w-[100%] bg-white rounded-[4px] flex px-5 py-2 items-center gap-5 ">
              <i className="text-4xl text-red-500 bi bi-google" title="Email"></i>
              <span className="">brunomadozzo@gmail.com</span>
            </div>
            <div className="flex items-center gap-5 px-5 py-2 bg-white w-[100%] rounded-[4px]">
              <i className="text-4xl text-blue-500 bi bi-linkedin"></i>
              <span className="">bruno madozzo</span>
            </div>
            <div className="flex items-center gap-5 px-5 py-2 bg-white w-[100%] rounded-[4px]">
              <i className="text-4xl text-black bi bi-github"></i>
              <span className="">brunomry</span>
            </div>
            <div className="flex items-center gap-5 px-5 py-2 bg-white w-[100%] rounded-[4px]">
              <i className="text-4xl text-gray-400 bi bi-geo-alt-fill"></i>
              <span className="">Tucumán, Argentina</span>
            </div>
          </div>
          <p className="mt-5 mb-4 text-center sizeText md:text-[18px] lg:text-[20px] text-[#028891]">
            ¡Gracias por visitar mi portfolio!
          </p>
        </div>
      </div>
    </article>
  );
};

export default Contacto;
