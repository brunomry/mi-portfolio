import { Link } from "react-router-dom";

const NavbarSecondary = () => {
  return (
    <header className=" w-[100%] h-[72px] md:h-[96px] fixed top-0 left-0 z-[99] bg-[#FAFAFA] flex items-center px-2 md:px-10 xl:px-20 2xl:px-40">
      <nav className="w-[100%] flex justify-between md:justify-center items-center gap-12">
        <Link
          className="text-[#0A0A0A] font-black text-[12px] md:text-sm"
          to={"/"}
        >
          BM Soluciones web
        </Link>
        <div className="w-fit">
        </div>
        <ul className="flex gap-2 items-center md:gap-4 justify-end md:justify-end">
          <li className="">
            <Link
              className="block text-[12px] md:text-sm md:text-[#787777] font-light  text-center"
              to={"/"}
            >
              Principal
            </Link>
          </li>
          <li className="">
            <Link
              className="block text-[12px] md:text-sm md:text-[#787777] font-light  text-center"
              to={"/proyectos"}
            >
              Proyectos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavbarSecondary;
