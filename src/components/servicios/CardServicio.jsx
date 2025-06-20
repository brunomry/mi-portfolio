import { BsCheckSquareFill } from "react-icons/bs";

const CardCertificacion = ({ servicio }) => {
  return (
    <div
      className="rounded-[8px] bg-[#2B7FF7] w-[100%] min-w-[260px] md:max-w-[340px] lg:max-w-[375px] min-h-[150px]  xl:max-w-[400px] duration-[0.8s]  md:text-start flex flex-col px-2 md:px-0 xl:px-5"
      title={servicio.servicio}
    >
      <div className="flex flex-col justify-between rounded-[4px] min-h-[100%]">
        <div className="flex flex-col ">
          <div className="min-h-[120px] xl:min-h-[150px] flex flex-col gap-2 md:gap-4">
            <BsCheckSquareFill className="text-[#fafafa] text-[24px] inline-block" />
            <h5 className="font-black text-[#fafafa] md:text-[18px]">
              {" "}
              {servicio.servicio}
            </h5>
            <p className="text-[#c2d4f8] text-[14px] md:text-[1rem] font-light">
              {servicio.descripcion}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCertificacion;
