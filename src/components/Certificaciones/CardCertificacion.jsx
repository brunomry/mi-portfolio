import React from 'react';

const CardCertificacion = ({certificado}) => {
    return (
        <div className="card px-3 py-5 cardCertification bg-dark ">
        <div className="px-2 py-2 d-flex flex-column justify-content-center align-items-center rounded-2">
          <div className='tex'>
            <h3 className=" text-primary mb-1">{certificado.titulo}</h3>
            <p className="fs-5">{certificado.org}</p>
            <p>{certificado.fechaInicio} | {certificado.fechaFin}</p>
            <div className="d-flex gap-3 justify-content-center mt-5">
            <button className="btn btnSocial ">
              <a href="#" className="px-5">
                Ver
              </a>
            </button>
            </div>
         
          </div>
        </div>
      </div>
    );
};

export default CardCertificacion;