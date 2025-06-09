import { Link } from "react-router-dom";

const NavbarSecondary = () => {
  return (
    <header className=" w-[100%] h-[64px] md:h-[96px] fixed bottom-0 md:top-0 left-0 z-[99] bg-[#FAFAFA] flex items-center px-4 md:px-10 xl:px-20 2xl:px-40">
      <nav className="w-[100%] flex justify-between">
        <Link className=" text-[#0A0A0A] font-black hidden md:block" to={"/"}>
          BrunoMadozzo&#40;&#41;&#59;
        </Link>
        <div className="w-fit">
        <small className="text-[#787777] text-[12px] md:hidden">Bruno Madozzo - Desarrollador web</small>
        </div>
        <ul className="flex items-center gap-2 justify-end md:justify-end xl:gap-12">
          <li className="">
            <Link
              className="block text-[14px] md:text-[#787777] font-light  text-center"
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li className="">
            <Link
              className="block text-[14px] md:text-[#787777] font-light  text-center"
              to={"/proyectos/otros-proyectos"}
            >
              Proyectos
            </Link>
          </li>
          {/* <li className="">
            <div className="">
              <i class="bi bi-moon text-[20px]"></i>
              <i class="bi bi-moon-fill text-[20px] hidden"></i>
            </div>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default NavbarSecondary;
