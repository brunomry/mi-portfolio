import React from "react";

const CardCertificacion = ({ certificado }) => {
  return (
    <div className="border-0 card px-2 pt-2 py-md-2 cardCertification  d-flex px-2 px-lg-5 shadow">
      <div className="px-2 d-flex flex-column justify-content-center align-items-start rounded-2 h-100">
        <div className="">
          <h4 className="mb-1 fw-bold">{certificado.titulo}</h4>
          <p className="sizeText fw.bold">{certificado.org}</p>
          <p className="">
            {certificado.fechaInicio} | {certificado.fechaFin}
          </p>
        </div>
      </div>
      <div className="mt-5 mt-sm-0 d-flex justify-content-center justify-content-xl-end mb-2">
        <button className="btn btnCertification px-5 d-flex align-items-center gap-2">
          <i className="bi bi-zoom-in fs-4"></i> 
          <span>Ver</span>
        </button>
      </div>
    </div>
  );
};

export default CardCertificacion;
