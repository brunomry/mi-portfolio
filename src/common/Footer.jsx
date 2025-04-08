import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="hidden md:block w-[100%] lg:w-[75%] xl:w-[80%] py-5 bg-[#fff] border-t px-[5px]">
      <p className="text-center text-gray-600 text-[12px] md:text-[14px] lg:text-[1rem]">
        &copy;Bruno Madozzo - Desarrollador web.
      </p>
    </footer>
  );
};

export default Footer;
