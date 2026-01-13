const Footer = () => {
  return (
    <footer className="block w-[100%] py-8 md:py-[50px] bg-[#fff] px-[8px]">
      <p className="text-center text-[#a1a1a1] flex flex-col md:flex-row justify-center gap-1 font-light text-[14px]">
        <a
          className="lg:hover:underline"
          href="https://www.linkedin.com/in/bruno-madozzo/"
          target="_blank"
          title="Visita mi perfil de LinkedIn"
        >&copy; <span className="text-blue-400">Bruno Madozzo.</span>
        </a><span>Desarrollador web</span>    
      </p>
    </footer>
  );
};

export default Footer;