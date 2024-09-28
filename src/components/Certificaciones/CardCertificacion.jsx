import React from "react";
import Swal from "sweetalert2";

const CardCertificacion = ({ certificado }) => {

  const mostrarCertificacion = () => {
    Swal.fire({
      icon: "info",
      title: "Funcionalidad en desarrollo",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
  }

  return (
    <div className="rounded-[6px] bg-[#fff] pt-6 md:pb-2 cardCertification w-[100%] min-w-[260px] h-[225px] md:h-[200px] duration-[0.8s] border-[1px] border-s-[#000] border-s-[5px] text-center md:text-start flex flex-col px-2 md:px-4 xl:px-10 shadow-xl lg:w-[75%] xl:w-[65%]">
      <div className="flex flex-col justify-start rounded-[4px] h-[100%]">
          <h5 className="mb-1 font-bold text-[#444] md:text-[20px] lg:text-[24px]">{certificado.titulo}</h5>
          <p className="text-[#555] md:text-[1rem] xl:text-[1.125rem] ">{certificado.org}</p>
          <p className="text-[#787777] mt-4">
            {certificado.fechaInicio} | {certificado.fechaFin}
          </p>

      </div>
      <div className="flex justify-center mt-5 mb-2 sm:mt-0 sm:justify-end">
        <button onClick={mostrarCertificacion} className="w-[100%] md:w-[initial] text-center rounded-[6px] bg-[#000] md:text-[18px] text-white hover:bg-[#fff] hover:border hover:border-[#028891] hover:text-[#028891] px-12 py-1 flex justify-center items-center gap-2">
          <i className="text-2xl bi bi-zoom-in"></i>
          <span>Ver</span>
        </button>
      </div>
    </div>
  );
};

export default CardCertificacion;
