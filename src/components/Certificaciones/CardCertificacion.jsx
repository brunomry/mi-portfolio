import React from 'react';

const CardCertificacion = ({certificado}) => {
    return (
        <div className="card px-2 py-3 cardCertification shadow border border-white d-flex">
        <div className="px-2 d-flex flex-column justify-content-between align-items-center rounded-2 h-100">
          <div className='tex'>
            <h3 className="mb-1">{certificado.titulo}</h3>
            <p className="fs-5">{certificado.org}</p>
            <p className='text-white'>{certificado.fechaInicio} | {certificado.fechaFin}</p>
            
         
          </div>
          <div className=" d-flex justify-content-center w-100 border-none">
            <button className="btn btnSocial text-dark border border-white ">
              <a href="#" className="px-5 text-white">
                Ver
              </a>
            </button>
            </div>
        </div>
      </div>
    );
};

export default CardCertificacion;