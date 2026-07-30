const Footer = () => {
  return (
    <footer className="block w-full border-t border-slate-100 bg-white px-5 py-9">
      <p className="mx-auto flex max-w-[1320px] flex-col justify-center gap-1 text-center text-[13px] font-medium text-[#829ab1] md:flex-row">
        <a
          className="lg:hover:underline"
          href="https://www.linkedin.com/in/bruno-madozzo/"
          target="_blank"
          title="Visita mi perfil de LinkedIn"
        >&copy; <span className="text-[#0b6e69]">Bruno Madozzo.</span>
        </a><span>Desarrollador web</span>    
      </p>
    </footer>
  );
};

export default Footer;
