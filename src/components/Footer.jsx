const Footer = () => {
  return (
    <footer className="w-[100%] py-[50px] bg-[#fff] border-t px-[5px]">
      <p className="text-center text-[#787777] text-[14px]">
        &copy;2024. Desarrollado con React y Tailwind por
        <a
          className=" text-blue-400 ms-1 lg:hover:underline"
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