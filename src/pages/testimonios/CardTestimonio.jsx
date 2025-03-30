import React from "react";

const CardTestimonio = ({ testimonio }) => {
  return (
    <article className="rounded-[15px]  bg-[#fff] py-8 w-[100%] border min-w-[460px] md:max-w-[300px]  min-h-[225px]  2xl:max-w-[450px] duration-[0.8s]  text-center md:text-start flex flex-col px-2 md:px-4 xl:px-5">
      <div className=" flex flex-col gap-5 justify-between h-[100%]">
        <p className="text-[#787777] md:text-[1rem] xl:text-[1.125rem]">
          "{testimonio.opinion}" asidjasiodj aoisdjaoisd asda sdasd
        </p>
        <div className="flex gap-4">
          <img
            src={testimonio.img}
            alt=""
            className="border rounded-full object-cover max-w-[120px] max-h-[100px]"
          />
          <div>
            <h3 className=" font-bold text-[#444] md:text-[20px]">
              {testimonio.nombre}
            </h3>
            <p className="text-gray-600 mb-0">{testimonio.rol}</p>
            <p className="text-gray-400">{testimonio.relacion}</p>

            <div className="flex pt-2  gap-3">
              {testimonio.github !== "" && (
                <a
                  href={testimonio.github}
                  target="_blank"
                  title="perfil de Github"
                  className=" "
                  rel="noopener noreferrer"
                >
                  <i className="px-2 text-[#000] rounded-[6px] pt-1 bi bi-github sm:text-[25px]"></i>
                </a>
              )}
              {testimonio.linkedin !== "" && (
                <a
                  href="https://www.linkedin.com/in/bruno-madozzo/"
                  target="_blank"
                  title="perfil de LinkedIn"
                  className="  "
                >
                  <i className=" text-blue-500 rounded-[6px] bi bi-linkedin sm:text-[25px]"></i>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardTestimonio;
