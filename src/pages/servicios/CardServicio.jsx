import { BsCheckSquareFill } from "react-icons/bs";

const CardCertificacion = ({ servicio }) => {
  return (
    <article
      className="rounded-[6px]  py-8 w-[100%]  lg:h-[200px]  2xl:max-w-[80%] duration-[0.8s]  text-center md:text-start flex flex-col px-2 md:px-4 xl:px-5"
      title={servicio.servicio}
    >
        <div className="flex  ">
          <div className=" flex xl:w-[40%]">
            <h3 className="mb-1 font-bold text-[#444] md:text-[20px] 2xl:text-[25px]">
              {/* <BsCheckSquareFill className="text-[#375c86] " />{" "} */}
              <span className="text-[#375c86]">{servicio.titulo}</span>
            </h3>
            {/* <p className="text-[#787777] md:text-[1rem] xl:text-[1.125rem] 2xl:text-[20px]">
              {servicio.descripcion}
            </p> */}
          </div>
          <ul className="list-disc ms-4 xl:w-[60%]">
            {
              servicio.servicios.map(s => (
                <li className=" md:text-[1rem] text-[#375c86] xl:text-[1.125rem]">{s}</li>
              ))
            }
          </ul>
        </div>
        
    </article>
  );
};

export default CardCertificacion;
