import FormContacto from "./FormContacto";

const Contacto = () => {
  return (
    <article
      className="flex flex-col items-center justify-start gap-2 min-h-[400px] xl:h-[450px] w-[95%] px-3 xl:py-4 containerContact sm:gap-5 contact"
      id="contacto"
    >
      <h2 className="font-bold text-[25px] xl:text-[30px] text-[#333]">
        &lt; Contacto /&gt;
      </h2>
      <div className="flex flex-col justify-center gap-2 md:flex-row xl:gap-3 ">
        <FormContacto></FormContacto>
        <div className="flex flex-col  items-center md:w-[65%]">
          <p className="text-[#787777] text-center descriptionContact w-[100%] lg:text-start md:text-[1rem] xl:text-[1.125rem]  ">
            ¿Tienes un proyecto en mente o estás interesado en que forme parte
            de tu equipo? Hablemos
          </p>
          <div className="flex flex-col gap-2 mt-6 md:text-[1rem] xl:text-[1.125rem] w-[100%]">
            <div
              className="w-[100%] bg-white border-[1px]  rounded-[25px] flex p-5   hover:text-[#000] items-center gap-5"
              title="Contáctame por correo"
            >
              <i
                className="text-4xl text-red-500 bi bi-google"
                title="Email"
              ></i>
              <div className="flex flex-col">
                <span className="text-[#787777]">Email</span>
                <span className="">brunomadozzo@gmail.com</span>
              </div>
            </div>
            <a
              href="https://www.linkedin.com/in/bruno-madozzo/"
              target="_blank"
              title="Contáctame por LinkedIn"
              className="flex items-center gap-5 p-5   hover:text-[#000] bg-white hover:hover:shadow-lg border-[1px]  w-[100%] rounded-[25px]"
            >
              <i className="text-4xl text-blue-600 bi bi-linkedin"></i>
              <div className="flex flex-col">
                <span className="text-[#787777]">LinkedIn</span>
                <span className="">Bruno Madozzo</span>
              </div>
            </a>
            {/* <a href="https://github.com/brunomry" target="_blank" className="flex items-center gap-5 p-5  bg-white  hover:text-[#000] hover:shadow-xl border-[1px]  w-[100%] rounded-[4px]">
              <i className="text-4xl text-black bi bi-github"></i>
              <span className="">brunomry</span>
            </a>
            <div className="flex items-center gap-5 p-5  bg-white border-[1px] w-[100%] rounded-[4px]">
              <i className="text-4xl text-gray-400 bi bi-geo-alt-fill"></i>
              <span className="">Tucumán, Argentina</span>
            </div> */}
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