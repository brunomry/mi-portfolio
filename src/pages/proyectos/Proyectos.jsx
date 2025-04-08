import React, { useState } from "react";
import CardProyecto from "./CardProyecto";
import proyectos from "../../helpers/proyectos";
import { Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";

const Proyectos = () => {
  const [key, setKey] = useState("apps");

  const filtrarPorTipo = (tipoProyecto) =>
    proyectos.filter((p) => p.tipo === tipoProyecto);

  return (
    <section className="w-[100%] lg:w-[80%] flex flex-col gap-3 xl:gap-4 items-center px-3 xl:w-[80%] pt-[50px] md:pt-[50px] 2xl:pt-[50px] fondo mainSection">
      <div className="w-[100%] min-h-[100%] lg:w-[80%] rounded-[10px] lg:px-10 lg:py-10 lg:shadow-xl lg:bg-[white]">
        <h1 className="mb-6 md:mb-8 font-bold text-[20px] md:text-[25px] xl:text-[30px] 2xl:text-[40px] text-[#333]">
          Proyectos destacados
        </h1>
        <article className="flex flex-col px-3 sm:flex-wrap min-h-[450px] w-[100%] sm:w-[100%]  sm:h-[100%] sm:pb-[50px]  sm:justify-center md:items-center gap-3 lg:gap-8 ">
          {filtrarPorTipo("Aplicación web").length > 0 &&
            filtrarPorTipo("Aplicación web").map((proyecto) => (
              <CardProyecto
                key={proyecto.id}
                proyecto={proyecto}
              ></CardProyecto>
            ))}
        </article>
      </div>
    </section>
  );
};

export default Proyectos;
