import React from "react";
import CardCertificacion from "./Certificaciones/CardCertificacion";
import certificados from "./helpers/certificados";

const Certificaciones = () => {
  return (
    <article
      className="py-4 py-md-5 d-flex flex-column gap-2 gap-sm-3 rounded-2 certifications shadow section px-5"
      id="certificaciones"
    >
      <h2 className="text-center display-6 fw-bold ">Certificaciones</h2>
      <div className="d-flex justify-content-center align-items-center flex-wrap gap-3 gap-lg-2 gap-xl-2">
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
