import React from "react";
import CardCertificacion from "./Certificaciones/CardCertificacion";
import certificados from "./helpers/certificados";

const Certificaciones = () => {
  return (
    <article
      className="py-4 py-md-5 d-flex flex-column gap-2 gap-sm-5 rounded-2 certifications shadow section"
      id="certificaciones"
    >
      <h2 className="text-center">Certificaciones</h2>
      <div className="d-flex justify-content-center align-items-center flex-wrap gap-3 gap-lg-4 gap-xl-5">
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
