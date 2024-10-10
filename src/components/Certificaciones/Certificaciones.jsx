import React from "react";
import CardCertificacion from "./CardCertificacion";
import certificados from "../helpers/certificados";

const Certificaciones = () => {
  return (
    <article
      className="flex flex-col w-[100%] min-h-[35vh] sm:min-h-[100vh] md:min-h-[50vh] lg:min-h-[50vh] mt-3 lg:mt-0 bg-[#fff] gap-2 sm:gap-5 xl:py-4 certifications px-2 md:px-[50px]"
      id="certificaciones"
    >
      <h2 className="text-center font-bold text-[25px] xl:text-[30px] text-[#333]"> &lt; Certificaciones /&gt;</h2>
      <div className="flex sm:flex-col containerCertifications h-[250px] sm:h-[100%] sm:pb-[50px] md:justify-center md:items-center gap-3 lg:gap-4 ">
        {certificados.map((certificado) => (
          <CardCertificacion
            key={certificado.id}
            certificado={certificado}
          ></CardCertificacion>
        ))}
      </div>
    </article>
  );
};

export default Certificaciones;
