const Footer = () => {
  return (
    <footer className="hidden md:block w-[100%] md:py-[50px] bg-[#fff] border-t px-[5px]">
      <p className="text-center text-[#a1a1a1] font-light text-[14px]">
        &copy;<a
          className=" text-blue-400 lg:hover:underline"
          href="https://www.linkedin.com/in/bruno-madozzo/"
          target="_blank"
          title="Visita mi perfil de LinkedIn"
        >Bruno Madozzo
        </a> - Desarrollador web.     
      </p>
    </footer>
  );
};

export default Footer;