import React from "react";

const CardTestimonio = ({ testimonio }) => {
  return (
    <article className="rounded-[8px]  bg-[#fff] py-8 w-[100%] shadow overflow-auto h-[fit-content]  max-w-[600px] duration-[0.8s]  text-center md:text-start flex flex-col px-2 md:px-4 xl:px-8">
      <div className=" flex flex-col gap-8 justify-between h-[100%]">
        <p className="text-[#787777] text-[14px]  font-light">
          "{testimonio.opinion}" asidjasiodj aoisdjaoisd asda sdasd
        </p>
        <div className="flex gap-4">
          <img
            src={testimonio.img}
            alt=""
            className="border rounded-[100%] object-cover max-w-[75px] max-h-[50px]"
          />
          <div>
            <h3 className=" font-medium text-[#444] md:text-[18px] nombreUsuario">
              {testimonio.nombre}
            </h3>
            <p className="text-[#787777] text-[14px]">{testimonio.relacion}</p>

            <div className="flex pt-2  gap-3">
              {testimonio.linkedin !== "" && (
                <a
                  href="https://www.linkedin.com/in/bruno-madozzo/"
                  target="_blank"
                  title="perfil de LinkedIn"
                >
                  <i className=" text-blue-400 hover:text-blue-500 rounded-[6px] bi bi-linkedin sm:text-[25px]"></i>
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
