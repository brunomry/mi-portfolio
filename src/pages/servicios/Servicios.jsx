import React from "react";
import CardServicio from "./CardServicio";
import servicios from "../../helpers/servicios";

function Servicios() {
  return (
    <section
      className="flex flex-col items-center w-[100%] xl:w-[80%] min-h-[100vh]  pt-[100px] bg-[#fff] gap-2 sm:gap-4 services px-2 md:px-5 xl:px-[50px] fondo"
      id="servicios"
    >
      <h2 className="text-center font-bold text-[25px] xl:text-[30px] 2xl:text-[35px] text-[#333]">
        {" "}
        &lt; Servicios /&gt;
      </h2>
      <div className="flex flex-wrap w-[100%] md:gap-2 xl:w-[100%] 2xl:w-[80%] containerServices h-[250px] mt-8 sm:h-[100%] pb-[20px] md:justify-center md:items-center gap-3 lg:gap-3 xl:gap-8 ">
        {servicios.map((servicio) => (
          <CardServicio key={servicio.id} servicio={servicio}></CardServicio>
        ))}
      </div>
    </section>
  );
}

export default Servicios;
