import React from "react";
import FormContacto from "./Contacto/FormContacto";

const Contacto = () => {
  return (
    <article
      className="flex flex-col items-center justify-start gap-2 min-h-[400px] xl:h-[550px] w-[95%] px-3 py-4 containerContact sm:gap-5 contact"
      id="contacto"
    >
      <h2 className="font-bold text-[25px] xl:text-[30px] text-[#333]">Contáctame</h2>
      <div className="flex flex-col gap-2 md:flex-row xl:gap-3 ">
        <FormContacto></FormContacto>
        <div className="flex flex-col items-center">
          <p className=" text-center descriptionContact sm:w-[80%] lg:text-start md:text-[1rem] xl:text-[1.125rem]  ">
            Si estás interesado en mi perfil, no dudes en ponerte en contacto
            conmigo.{" "}
          </p>
          <div className="flex flex-col gap-2 mt-6 md:text-[1rem] xl:text-[1.125rem] w-[100%] md:w-[65%]">
            <div className="w-[100%] bg-white border-[1px] border-s-[#000] border-s-[5px] rounded-[4px] flex p-5   hover:text-[#000] items-center gap-5 ">
              <i className="text-4xl text-red-500 bi bi-google" title="Email"></i>
              <span className="">brunomadozzo@gmail.com</span>
            </div>
            <a href="https://www.linkedin.com/in/bruno-madozzo/" target="_blank" className="flex items-center gap-5 p-5   hover:text-[#000] bg-white hover:hover:shadow-xl border-[1px] border-s-[#000] border-s-[5px] w-[100%] rounded-[4px]">
              <i className="text-4xl text-blue-500 bi bi-linkedin"></i>
              <span className="">bruno madozzo</span>
            </a>
            <a href="https://github.com/brunomry" target="_blank" className="flex items-center gap-5 p-5  bg-white  hover:text-[#000] hover:shadow-xl border-[1px] border-s-[#000] border-s-[5px] w-[100%] rounded-[4px]">
              <i className="text-4xl text-black bi bi-github"></i>
              <span className="">brunomry</span>
            </a>
            <div className="flex items-center gap-5 p-5  bg-white border-[1px] border-s-[#000]  border-s-[5px] w-[100%] rounded-[4px]">
              <i className="text-4xl text-gray-400 bi bi-geo-alt-fill"></i>
              <span className="">Tucumán, Argentina</span>
            </div>
          </div>
          {/* <p className="mt-5 mb-4 text-center sizeText md:text-[1rem] xl:text-[1.125rem]  ">
            ¡Gracias por visitar mi portfolio!
          </p> */}
        </div>
      </div>
    </article>
  );
};

export default Contacto;
