import { Link } from "react-router-dom";
import brandLogo from "../assets/brand-logo.png";

const NavbarSecondary = () => (
  <header className="site-nav fixed left-0 top-0 z-[99] w-full">
    <nav className="mx-auto flex h-[68px] max-w-[1500px] items-center justify-between px-5 md:h-[82px] md:px-8 lg:px-12">
      <Link className="brand-mark" to="/">
        <img src={brandLogo} alt="Bruno Madozzo · Soluciones web" className="brand-logo-image" />
      </Link>
      <div className="flex items-center gap-5">
        <Link className="nav-link hidden sm:inline-flex" to="/">Principal</Link>
        <Link className="button-primary !min-h-0 !rounded-xl !px-4 !py-2 text-sm" to="/proyectos">
          Proyectos
        </Link>
      </div>
    </nav>
  </header>
);

export default NavbarSecondary;
