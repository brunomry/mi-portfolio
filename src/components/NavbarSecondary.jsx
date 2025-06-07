import { Link } from "react-router-dom";

const NavbarSecondary = () => {
  return (
    <header className=" w-[100%] h-[48px] lg:h-[96px] fixed top-0 left-0 z-[99] bg-[#FAFAFA] flex items-center px-4 lg:px-10 xl:px-20 2xl:px-96">
      <nav className="w-[100%] flex justify-between">
        <p className="xl:text-[20px] text-[#0A0A0A] font-black ">
          BrunoMadozzo&#40;&#41;&#59;
        </p>
        <ul className="hidden lg:flex items-center gap-2 lg:gap-8 lg:justify-end xl:gap-12 min-w-[760px]">
          <li className="">
            <Link
              className="block text-[14px] navLink text-[#787777]   text-center"
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li className="">
            <Link
              className="block text-[14px] navLink text-[#787777]   text-center"
              to={"/proyectos"}
            >
              Proyectos
            </Link>
          </li>
          <li className="">
            <div className="">
              <i class="bi bi-moon text-[20px]"></i>
              <i class="bi bi-moon-fill text-[20px] hidden"></i>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavbarSecondary;
