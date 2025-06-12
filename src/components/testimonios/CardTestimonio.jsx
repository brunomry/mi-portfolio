import React from "react";

const CardTestimonio = ({ testimonio }) => {
  return (
    <article className="border rounded-[8px]  bg-[#fff] py-8 w-[100%] shadow overflow-auto h-[fit-content]  max-w-[600px] duration-[0.8s]  text-center md:text-start flex flex-col px-2 md:px-4 xl:px-8">
      <div className=" flex flex-col gap-8 justify-between h-[100%]">
        <div>
          <p className="text-[#787777] italic text-[12px] text-end font-light">
            {testimonio.relacion}
          </p>
          <div className="flex justify-center flex-col">
            <i class="bi bi-quote text-[35px] font-black"></i>
            <p className="text-[#787777] italic text-[14px] ms-8 font-light">
              {testimonio.comentario}.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <img
            src={testimonio.foto}
            alt=""
            className="border rounded-[100%] object-cover max-w-[75px] max-h-[50px]"
          />
          <div>
            <h3 className="capitalize font-bold text-[#444] md:text-[16px] nombreUsuario">
              {testimonio.usuario}
            </h3>
            <p className="text-[#787777] text-[12px]">{testimonio.rol}</p>

            <div className="flex gap-3">
              {testimonio.linkedin !== "" && (
                <a
                  href={testimonio.linkedin}
                  target="_blank"
                  title="perfil de LinkedIn"
                >
                  <i className=" text-blue-400 hover:text-blue-500 rounded-[6px] bi bi-linkedin sm:text-[20px]"></i>
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
