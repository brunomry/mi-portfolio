import React from "react";
import { Link } from "react-router-dom";
import CardTestimonio from "./CardTestimonio";
import { testimonios } from "../../helpers/testimonios.js";

const Testimonios = () => {
  return (
    <section className="w-[100%] min-h-[50vh] bg-[#FAFAFA]  flex flex-col md:gap-2 items-center  md:py-20 px-4 py-8  md:px-[100px] xl:py-40" id="testimonios">
      <div className=" rounded-[10px] px-10 py-10  pb-20 flex flex-col gap-4 2xl:gap-8">
        <div className="flex justify-between w-[100%]">
          <h1 className="text-center font-black text-[25px] xl:text-[30px] 2xl:text-[40px] text-[#333]">
            Testimonios
          </h1>
          <Link
            to={"/login"}
            className="flex items-center justify-center px-5 py-[8px] 2xl:py-[10px] w-[250px] rounded-[45px] bg-pink-800 text-white border-[1px] text-[16px] md:text-[1rem] xl:text-[1.125rem] gap-4"
          >
            <span>Dejar testimonio</span>
          </Link>
        </div>
        <div className="columns-1 md:columns-2 xl:columns-2 2xl:columns-3 gap-8  space-y-6 min-h-[50vh] overflow-auto">
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
