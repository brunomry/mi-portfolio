import React from "react";
import { Link } from "react-router-dom";
import CardTestimonio from "./CardTestimonio";
import { testimonios } from "../../helpers/testimonios";

const Testimonios = () => {
  return (
    <section className="flex flex-col items-center w-[100%] xl:w-[80%] min-h-[100vh]  py-[100px] bg-[#fff] gap-2 sm:gap-4 services px-2 md:px-5 xl:px-[50px] fondo">
      <div className="flex justify-between w-[80%]">
      <h1 className="text-center font-bold text-[25px] xl:text-[30px] 2xl:text-[35px] text-[#333]">
        &lt; Testimonios /&gt;
      </h1>
      <Link to={"/login"} className="flex items-center justify-center px-5 py-[8px] 2xl:py-[10px] w-[250px] rounded-[45px] bg-pink-800 text-white border-[1px] text-[16px] md:text-[1rem] xl:text-[1.125rem] gap-4">
        <span>Dejar testimonio</span>
      </Link>
      </div>
      

      <div className="flex flex-wrap w-[100%] md:gap-2 xl:w-[100%] 2xl:w-[80%] containerServices  mt-8 justify-center pb-[20px]  gap-3 lg:gap-3 xl:gap-8 ">
        {testimonios.map((testimonio) => (
          <CardTestimonio
            key={testimonio.id}
            testimonio={testimonio}
          ></CardTestimonio>
        ))}
      </div>
      
    </section>
  );
};

export default Testimonios;
