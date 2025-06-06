import { BsCheckSquareFill } from "react-icons/bs";

const CardCertificacion = ({ servicio }) => {
  return (
    <div
      className="rounded-[8px] bg-[#2B7FF7] py-8 w-[100%] min-w-[260px] md:max-w-[350px] min-h-[150px] xl:h-[200px] 2xl:max-w-[450px] duration-[0.8s]  text-center md:text-start flex flex-col px-2 md:px-4 xl:px-5"
      title={servicio.servicio}
    >
      <div className="flex flex-col justify-between rounded-[4px] min-h-[100%]">
        <div className="flex flex-col ">
          <div className="min-h-[120px] xl:min-h-[150px] flex flex-col gap-4">
            <BsCheckSquareFill className="text-[#fafafa] text-[24px] inline-block" />
            <h5 className="mb-1 font-black text-[#fafafa] lg:text-[18px]">
              {" "}
              {servicio.servicio}
            </h5>
            <p className="text-[#c2d4f8] md:text-[1rem]">
              {servicio.descripcion}
            </p>
          </div>
          <div className="flex w-[100%] md:justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default CardCertificacion;
