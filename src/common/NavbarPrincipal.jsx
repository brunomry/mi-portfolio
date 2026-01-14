import { useState, useEffect } from "react";

const NavbarPrincipal = () => {
  const [desplegado, setDesplegado] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setDesplegado(!desplegado);
  const closeMenu = () => isMobile && setDesplegado(false);

  return (
    <header className="fixed top-0 left-0 w-full z-[99] bg-[#FFF]">
      <div className="flex justify-between md:justify-around items-center px-6 md:px-10 lg:px-20 h-[64px] md:h-[96px]">
        <a
          className="text-[#0A0A0A] font-bold text-[12px]"
          href="#sobremi"
        >
          BM Soluciones web
        </a>
        <nav className="hidden md:flex items-center gap-8 md:gap-4 lg:gap-12 text-[#787777] text-sm ">
          {[
            "Proyectos",
            "Servicios",
            "Tecnologías",
            "Mi Método",
            "Certificaciones",
            "Contacto",
          ].map((item) => (
            <a
              key={item}
              href={`${item === "Mi Método" ? "#proceso" : `#${item.toLowerCase()}`}`}
              className="hover:text-[#2B7FF7] transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
        {isMobile && (
          <button onClick={toggleMenu} className="md:hidden z-50">
            <i
              className={`bi ${desplegado ? "bi-x-lg" : "bi-list"} text-xl`}
            />
          </button>
        )}
      </div>
      {isMobile && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center transition-transform duration-500 ease-in-out transform ${
            desplegado
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0 pointer-events-none"
          }`}
        >
          {[
            "Proyectos",
            "Servicios",
            "Tecnologías",
            "Mi Método",
            "Certificaciones",
            "Sobre mí",
            "Contacto",
          ].map((item) => (
            <a
              key={item}
              href={`${item === "Mi Método" ? "#proceso" : item === "Sobre mí" ? "#sobre-mi" : `#${item.toLowerCase()}`}`}
              onClick={closeMenu}
              className="text-[#000] text-2xl my-4 hover:text-gray-600 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default NavbarPrincipal;
