import React from "react";
import { Link } from "react-router-dom";
import CardTestimonio from "./CardTestimonio";
import { testimonios } from "../../helpers/testimonios";

const Testimonios = () => {
  return (
    <section className="w-[100%] md:w-[90%] xl:w-[80%] min-h-[100vh] bg-[#fff] text-[#028891]  flex flex-col md:gap-2 items-center tecnologias py-[100px]  mb-[20px] fondo">
      <div className="w-[80%] rounded-[10px] px-10 py-10 shadow-xl pb-20 bg-[white]">
        <div className="flex justify-between w-[100%]">
          <h1 className="text-center font-bold text-[25px] xl:text-[30px] 2xl:text-[40px] text-[#333]">
            Testimonios
          </h1>
          <Link
            to={"/login"}
            className="flex items-center justify-center px-5 py-[8px] 2xl:py-[10px] w-[250px] rounded-[45px] bg-pink-800 text-white border-[1px] text-[16px] md:text-[1rem] xl:text-[1.125rem] gap-4"
          >
            <span>Dejar testimonio</span>
          </Link>
        </div>
        <div className="flex flex-wrap w-[100%]  containerServices  mt-8 pb-[20px]  gap-8 ">
          {testimonios.map((testimonio) => (
            <CardTestimonio
              key={testimonio.id}
              testimonio={testimonio}
            ></CardTestimonio>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
