import React from "react";
import CardServicio from "./CardServicio";
import servicios from "../helpers/servicios";

function Servicios() {
  return (
    <article
      className="py-8 px-4 flex flex-col md:py-20 md:px-8 lg:px-[100px] xl:px-[150px] xl:py-40 w-[100%] min-h-[35vh] sm:min-h-[100vh] md:min-h-[50vh] lg:min-h-[50vh] lg:mt-0 bg-[#2B7FF7] gap-2 sm:gap-4  services "
      id="servicios"
    >
      <h2 className="font-black text-[25px] xl:text-[30px] 2xl:text-[35px] text-[#FAFAFA]">
        {" "}
         Servicios
      </h2>
      <div className="flex flex-col w-[100%] md:flex-row gap-12 md:gap-4 md:flex-wrap min-h-[250px] mt-8 sm:h-[100%] pb-[20px] lg:gap-12 lg:mt-8 xl:gap-12 ">
        {servicios.map((servicio) => (
          <CardServicio key={servicio.id} servicio={servicio}></CardServicio>
        ))}
      </div>
    </article>
  );
}

export default Servicios;
