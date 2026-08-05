import { useEffect, useState } from "react";
import { handleWpp } from "../helpers/handleFn.js";

const navigation = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Por qué yo", href: "#por-que" },
  { label: "Proceso", href: "#proceso" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

const NavbarPrincipal = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);
  useEffect(() => {
    const closeOnEscape = (event) => event.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-nav fixed left-0 top-0 z-[99] w-full">
      <div className="relative z-20 mx-auto flex h-[68px] max-w-[1500px] items-center justify-between px-5 md:h-[82px] md:px-8 lg:px-12">
        <a className="brand-mark" href="#sobremi" aria-label="Ir al inicio" onClick={() => setIsOpen(false)}><span>Soluciones web</span></a>
        <nav className="hidden items-center gap-4 md:flex lg:gap-7" aria-label="Navegación principal">
          {navigation.map((item) => <a key={item.href} href={item.href} className="nav-link transition-colors">{item.label}</a>)}
          <button type="button" className="nav-cta" onClick={() => handleWpp("Hola Bruno, vi tu portfolio y quisiera consultarte por un proyecto web.")}>Consultar <i className="bi bi-arrow-up-right" /></button>
        </nav>
        <button type="button" onClick={() => setIsOpen((current) => !current)} className="relative z-30 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#102a43] md:hidden" aria-label={isOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={isOpen} aria-controls="mobile-navigation">
          <i className={`bi ${isOpen ? "bi-x-lg" : "bi-list"} text-xl`} />
        </button>
      </div>
      <div id="mobile-navigation" className={`mobile-menu fixed inset-0 z-10 h-[100dvh] w-screen overflow-hidden bg-white px-5 pb-6 pt-[88px] transition duration-300 md:hidden ${isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0 pointer-events-none"}`}>
        <nav className="mx-auto flex h-full max-w-lg flex-col justify-center" aria-label="Navegación móvil">
          <div className="flex flex-col">
            {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="border-b border-slate-100 py-[clamp(.65rem,2.2vh,1rem)] text-[clamp(1rem,2.8vh,1.25rem)] font-bold text-[#102a43] transition hover:text-[#0b6e69]">{item.label}</a>)}
          </div>
          <button type="button" onClick={() => { setIsOpen(false); handleWpp("Hola Bruno, vi tu portfolio y quisiera consultarte por un proyecto web."); }} className="button-primary mt-[clamp(.8rem,2.5vh,1.5rem)] flex items-center justify-center gap-2 border">Contarte mi proyecto <i className="bi bi-whatsapp" /></button>
        </nav>
      </div>
    </header>
  );
};

export default NavbarPrincipal;
