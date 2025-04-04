const Contacto = () => {
  return (
    <article
      className="flex flex-col items-center justify-start gap-2 min-h-[100vh] xl:w-[80%] pt-[100px] px-3 py-5  containerContact sm:gap-5 contact fondo"
    >
      <h2 className="font-bold text-[25px] xl:text-[30px] 2xl:text-[35px] text-[#333]">
        &lt; Contacto /&gt;
      </h2>
      <div className="flex flex-col justify-center gap-2 md:flex-row xl:gap-3 xl:w-[80%]">
        <div className="flex flex-col  items-center w-[50%]">
          {/* <p className="text-[#787777] text-center descriptionContact w-[100%] lg:text-start md:text-[1rem] xl:text-[1.125rem]  2xl:text-[20px]">
            ¿Tienes un negocio, ofreces un servicio y aún no cuentas con una página web? Escríbeme para llevar tu negocio al siguiente nivel
          </p> */}
          <div className="flex flex-col w-[100%] gap-2 mt-8 md:text-[1rem] xl:text-[1.125rem] 2xl:text-[20px] xl:gap-4">
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
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-5   hover:text-[#000] bg-white hover:hover:border-gray-500 border-[1px]  w-[100%] rounded-[25px]"
            >
              <i className="text-4xl text-blue-600 bi bi-linkedin"></i>
              <div className="flex flex-col">
                <span className="text-[#787777]">LinkedIn</span>
                <span className="">Bruno Madozzo</span>
              </div>
            </a>
            <a
              href=""
              target="_blank"
              title="Contáctame por WhatsApp"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-5   hover:text-[#000] bg-white hover:hover:border-gray-500 border-[1px]  w-[100%] rounded-[25px]"
            >
              <i className="text-4xl text-green-600 bi bi-whatsapp"></i>
              <div className="flex flex-col">
                <span className="text-[#787777]">WhatsApp</span>
                <span className="">Bruno Madozzo</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Contacto;
