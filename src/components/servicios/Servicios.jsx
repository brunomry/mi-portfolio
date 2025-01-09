import React from "react";
import CardServicio from "./CardServicio";
import servicios from "../helpers/servicios";

function Servicios() {
  return (
    <article
      className="flex flex-col items-center w-[100%] min-h-[35vh] sm:min-h-[100vh] md:min-h-[50vh] lg:min-h-[50vh] mt-3 lg:mt-0 bg-[#fff] gap-2 sm:gap-4 xl:py-5 services px-2 md:px-5 xl:px-[50px]"
      id="servicios"
    >
      <h2 className="text-center font-bold text-[25px] xl:text-[30px] 2xl:text-[35px] text-[#333]">
        {" "}
        &lt; Servicios /&gt;
      </h2>
      <div className="flex w-[100%] md:flex-row md:flex-wrap md:gap-2 xl:w-[100%] 2xl:w-[75%] containerServices h-[250px] mt-8 sm:h-[100%] pb-[20px] md:justify-center md:items-center gap-3 lg:gap-3 xl:gap-2 2xl:gap-3 ">
        {servicios.map((servicio) => (
          <CardServicio key={servicio.id} servicio={servicio}></CardServicio>
        ))}
      </div>
    </article>
  );
}

export default Servicios;
