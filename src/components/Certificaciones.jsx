import React from "react";
import CardCertificacion from "./Certificaciones/CardCertificacion";
import certificados from "./helpers/certificados";

const Certificaciones = () => {
  return (
    <article
      className=" d-flex flex-column gap-2 gap-sm-3 py-4 certifications section px-2 py-lg-5"
      id="certificaciones"
    >
      <h2 className="text-center display-6 fw-bold ">Certificaciones</h2>
      <div className="d-flex containerCertifications justify-content-md-center align-items-md-center gap-3 gap-lg-2 gap-xl-3">
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
