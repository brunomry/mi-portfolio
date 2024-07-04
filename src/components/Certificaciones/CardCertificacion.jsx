import React from "react";

const CardCertificacion = ({ certificado }) => {
  return (
    <div className="card px-2 py-2 cardCertification border border-white d-flex px-2 px-lg-5">
      <div className="px-2 d-flex flex-column justify-content-center align-items-start rounded-2 h-100">
        <div className="tex">
          <h3 className="mb-1">{certificado.titulo}</h3>
          <p className="fs-5">{certificado.org}</p>
          <p className="">
            {certificado.fechaInicio} | {certificado.fechaFin}
          </p>
        </div>
      </div>
      <div className=" d-flex justify-content-center justify-content-xl-end">
        <button className="btn btnCertification px-5 d-flex align-items-center gap-2">
          <i class="bi bi-zoom-in fs-4"></i> 
          <span>Ver</span>
        </button>
      </div>
    </div>
  );
};

export default CardCertificacion;
