import { Link } from "react-router-dom";

const NavbarSecondary = () => {
  return (
    <header className=" w-[100%] h-[72px] md:h-[96px] fixed bottom-0 md:top-0 left-0 z-[99] bg-[#FAFAFA] flex items-center px-4 md:px-10 xl:px-20 2xl:px-40">
      <nav className="w-[100%] flex justify-between">
        <p className=" text-[#0A0A0A] font-black hidden md:block">
          BrunoMadozzo&#40;&#41;&#59;
        </p>
        <ul className="w-[100%] flex items-center gap-12 justify-center md:justify-end xl:gap-12">
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
