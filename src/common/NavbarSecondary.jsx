import { Link } from "react-router-dom";

const NavbarSecondary = () => (
  <header className="site-nav fixed left-0 top-0 z-[99] w-full">
    <nav className="mx-auto flex h-[68px] max-w-[1500px] items-center justify-between px-5 md:h-[82px] md:px-8 lg:px-12">
      <Link className="brand-mark" to="/">
        <span>Soluciones web</span>
      </Link>
      <div className="flex items-center gap-5">
        <Link className="nav-link" to="/">Principal</Link>
        <Link className="button-primary !min-h-0 !rounded-xl !px-4 !py-2 text-sm" to="/proyectos">
          Proyectos
        </Link>
      </div>
    </nav>
  </header>
);

export default NavbarSecondary;
