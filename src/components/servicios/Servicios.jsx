import React from "react";
import CardServicio from "./CardServicio";
import servicios from "../helpers/servicios";

function Servicios() {
  return (
    <article
      className="flex flex-col lg:px-[150px] lg:py-40 w-[100%] min-h-[35vh] sm:min-h-[100vh] md:min-h-[50vh] lg:min-h-[50vh] mt-3 lg:mt-0 bg-[#2B7FF7] gap-2 sm:gap-4  services px-2 md:px-5 "
      id="servicios"
    >
      <h2 className="font-black text-[25px] xl:text-[30px] 2xl:text-[35px] text-[#FAFAFA]">
        {" "}
         Servicios
      </h2>
      <div className="flex w-[100%] md:flex-row md:gap-2 md:flex-wrap containerServices h-[250px] mt-8 sm:h-[100%] pb-[20px] gap-3 lg:gap-4 xl:gap-4 2xl:gap-8 ">
        {servicios.map((servicio) => (
          <CardServicio key={servicio.id} servicio={servicio}></CardServicio>
        ))}
      </div>
    </article>
  );
}

export default Servicios;
