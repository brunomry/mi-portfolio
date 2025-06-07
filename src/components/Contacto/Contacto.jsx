const Contacto = () => {
  return (
    <article
      className="flex flex-col md:py-20 md:px-8 lg:px-[200px] xl:py-40 xl:px-[250px] justify-start gap-2 min-h-[400px] xl:min-h-[450px] w-[100%] px-3 py-5  bg-[#fff] containerContact xl:gap-5 contact"
      id="contacto"
    >
      <h2 className="font-black text-center text-[25px] xl:text-[30px] 2xl:text-[30px] text-[#2B7FF7]">
       ¿Estás buscando a alguien con seriedad y compromiso para sumarse a tu equipo? ¿Necesitas una web para tu negocio?
      </h2>
      <h2 className="font-black text-center text-[25px] xl:text-[30px] 2xl:text-[30px] text-[#2B7FF7]">
       No dudes en contactarme.
      </h2>
      <div className="flex flex-col  gap-2 lg:flex-row justify-center xl:gap-3 w-[100%]">
        <div className="flex flex-col ">
          <p className="text-[#787777] text-center descriptionContact w-[100%] lg:text-start ">
          
          </p>
          <div className="flex flex-col items-center xl:flex-row gap-4 xl:gap-12 mt-6 w-[100%] lg:mt-14">
            <div
              className="w-[420px] bg-white border  rounded-[8px] flex p-8   hover:text-[#000] items-center gap-5"
              title="Contáctame por correo"
            >
              <i
                className="text-4xl text-red-500 bi bi-google"
                title="Email"
              ></i>
              <div className="flex flex-col">
                <span className="text-[#787777] text-[14px]">Email</span>
                <span className="text-[#444]">brunomadozzo@gmail.com</span>
              </div>
            </div>
            <a
              href="https://www.linkedin.com/in/bruno-madozzo/"
              target="_blank"
              title="Contáctame por LinkedIn"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-8  bg-[#fff] border hover:border-[#2B7FF7] hover:text-[#2B7FF7] hover:bg-[#fff] w-[420px] rounded-[8px]"
            >
              <i className="text-4xl text-[#2B7FF7] bi bi-linkedin"></i>
              <div className="flex flex-col">
                <span className="text-[#787777] text-[14px]">LinkedIn</span>
                <span className="text-[#0a0a0a]">Bruno Madozzo</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Contacto;
