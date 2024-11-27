const Footer = () => {
  return (
    <footer className="w-[100%] py-[50px] bg-[#fff] border-t">
      <p className="text-center text-black">
        &copy;2024. Diseñado con React y Tailwind por
        <a
          className=" text-blue-500 ms-1 lg:hover:underline"
          href="https://www.linkedin.com/in/bruno-madozzo/"
          target="_blank"
          title="Visita mi perfil de LinkedIn"
        >
          BRUNO MADOZZO
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;