import React from "react";

const CardCertificacion = ({ certificado }) => {
  return (
    <div className="rounded-[6px] pt-2 md:py-5 cardCertification w-[100%] min-w-[260px] h-[250px] duration-[0.8s] bg-[#F7F7F7] flex flex-col px-2 md:px-4 xl:px-10 shadow-xl lg:w-[75%] lg:h-[225px] xl:w-[60%]">
      <div className="flex flex-col justify-start rounded-[4px] h-[100%]">
          <h4 className="mb-1 font-bold text-[#028891] md:text-[20px] lg:text-[24px]">{certificado.titulo}</h4>
          <p className="text-[#028891] md:text-[18px] lg:text-[20px]">{certificado.org}</p>
          <p className="text-[#028891] mt-4">
            {certificado.fechaInicio} | {certificado.fechaFin}
          </p>

      </div>
      <div className="flex justify-center mt-5 mb-2 sm:mt-0 sm:justify-end">
        <button className=" rounded-[6px] bg-[#028891] md:text-[18px] text-white hover:bg-[#F7F7F7] hover:border hover:border-[#028891] hover:text-[#028891] px-12 py-3 flex items-center gap-2">
          <i className="text-2xl bi bi-zoom-in"></i>
          <span>Ver</span>
        </button>
      </div>
    </div>
  );
};

export default CardCertificacion;
