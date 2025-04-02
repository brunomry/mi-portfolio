import React from "react";

const CardTestimonio = ({ testimonio }) => {
  return (
    <article className="rounded-[15px]  bg-[#fff] py-8 w-[100%] shadow-lg min-w-[460px] md:max-w-[300px]  min-h-[225px]  2xl:max-w-[450px] duration-[0.8s]  text-center md:text-start flex flex-col px-2 md:px-4 xl:px-5">
      <div className=" flex flex-col gap-5 justify-between h-[100%]">
        <p className="text-[#2c2c2c] md:text-[1rem] xl:text-[1.125rem]">
          "{testimonio.opinion}" asidjasiodj aoisdjaoisd asda sdasd
        </p>
        <div className="flex gap-4">
          <img
            src={testimonio.img}
            alt=""
            className="border rounded-[100%] object-cover max-w-[75px] max-h-[50px]"
          />
          <div>
            <h3 className=" font-bold text-[#444] md:text-[20px]">
              {testimonio.nombre}
            </h3>
            <p className="text-gray-500">{testimonio.relacion}</p>

            {/* <div className="flex pt-2  gap-3">
              {testimonio.linkedin !== "" && (
                <a
                  href="https://www.linkedin.com/in/bruno-madozzo/"
                  target="_blank"
                  title="perfil de LinkedIn"
                >
                  <i className=" text-blue-400 hover:text-blue-500 rounded-[6px] bi bi-linkedin sm:text-[25px]"></i>
                </a>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardTestimonio;
