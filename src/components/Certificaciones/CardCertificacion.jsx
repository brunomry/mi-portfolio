const CardCertificacion = ({ certificado }) => {
  return (
    <div className="rounded-[6px] bg-[#fff] py-8 cardCertification w-[100%] min-w-[260px] h-[225px] md:h-[150px] xl:h-[200px] duration-[0.8s] border-[1px] border-s-[#000] border-s-[5px] text-center md:text-start flex flex-col px-2 md:px-4 xl:px-5 shadow-xl">
      <div className="flex flex-col justify-between rounded-[4px] h-[100%]">
        <div>
          <h5 className="mb-1 font-bold text-[#444] md:text-[20px]">
            {certificado.titulo}
          </h5>
          <p className="text-gray-600 md:text-[1rem] xl:text-[1.125rem] ">
            {certificado.org}
          </p>
        </div>
        <p className="text-gray-500 mt-4">
          {certificado.fechaInicio} | {certificado.fechaFin}
        </p>
      </div>
    </div>
  );
};

export default CardCertificacion;
