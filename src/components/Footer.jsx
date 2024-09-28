import React from "react";

const Footer = () => {
  return (
    <footer className="w-[100%] py-[50px] bg-[#fff] border-t">
      <p className="text-center text-black">
        &copy;2024. Desarrollado con React y TailwindCSS. Por
        <a
          className="font-bold text-[#000] ms-1"
          href="https://www.linkedin.com/in/bruno-madozzo/"
          target="_blank"
        >
          Bruno Madozzo
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
