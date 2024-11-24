import { BsCheckSquareFill } from "react-icons/bs";

const CardCertificacion = ({ servicio }) => {
  return (
    <div
      className="cursor-pointer rounded-[6px] bg-[#fff] py-8 cardCertification w-[100%] min-w-[260px] md:max-w-[300px] min-h-[225px] xl:h-[250px]  duration-[0.8s] border-[1px] border-b-[#000] border-b-[5px] text-center md:text-start flex flex-col px-2 md:px-4 xl:px-5 lg:hover:shadow-xl"
      title="clic para ver certificación"
    >
      <div className="flex flex-col justify-between rounded-[4px] min-h-[100%]">
        <div className="flex flex-col ">
          <div className="min-h-[120px] xl:min-h-[150px] flex flex-col">
            <h5 className="mb-1 font-bold text-[#444] md:text-[20px]">
              <BsCheckSquareFill className="text-[#000] inline-block" />{" "}
              {servicio.servicio}
            </h5>
            <p className="text-[#787777] md:text-[1rem] xl:text-[1.125rem] ">
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
