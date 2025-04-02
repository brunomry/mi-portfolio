const Footer = () => {
  return (
    <footer className="w-[100%] xl:w-[80%] pt-[50px] pb-2 bg-[#fff] border-t px-[5px]">
      {/* <p className="text-center mb-3 text-[20px]">Bruno Madozzo</p> */}
      <div className="flex justify-center items-center gap-3 mb-8">
        <a
          href="https://github.com/brunomry"
          target="_blank"
          title="Visita mis proyectos en mi repositorio de Github"
          className="rounded-[100%] border-[1px] border-[#375c86] p-1 flex items-center justify-center"
          rel="noopener noreferrer"
        >
          <i className="px-2 text-[#375c86] rounded-[6px] pt-1 bi bi-github sm:text-[20px]"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/bruno-madozzo/"
          target="_blank"
          title="Visita mi perfil de LinkedIn"
          className=" rounded-full border-[1px] border-[#375c86] py-1 flex items-center justify-center"
        >
          <i className="px-3  text-[#375c86] rounded-[6px] pt-1 bi bi-linkedin sm:text-[20px]"></i>
        </a>
      </div>
      <p className="text-center text-black">
        &copy;2024. Desarrollado con React y Tailwind por
        <a
          className=" text-blue-500 ms-1 lg:hover:underline"
          href="https://www.linkedin.com/in/bruno-madozzo/"
          target="_blank"
          title="Visita mi perfil de LinkedIn"
        >
          Bruno Madozzo
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
