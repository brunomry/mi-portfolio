import brandLogo from "../assets/brand-logo.png";

const Footer = () => {
  return (
    <footer className="block w-full border-t border-slate-100 bg-white px-5 py-9">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center gap-3 text-center">
        <img src={brandLogo} alt="Bruno Madozzo · Soluciones web" className="footer-brand-logo" />
        <p className="flex flex-col items-center gap-1 text-[13px] font-medium text-[#829ab1] sm:flex-row sm:gap-2">
          <span>&copy; 2024 - {new Date().getFullYear()}</span>
          <a
            className="font-bold text-[#0b6e69] transition hover:underline"
            href="https://www.linkedin.com/in/bruno-madozzo/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visita mi perfil de LinkedIn"
          >
            Bruno Madozzo.</a>
          <span>Desarrollador web</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;