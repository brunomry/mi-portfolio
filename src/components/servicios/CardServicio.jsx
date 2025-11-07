import { BsCheckSquareFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

const CardServicio = ({ servicio }) => {
  return (
    <div
      className="group bg-gradient-to-tr from-white to-[#f9faff] rounded-3xl shadow-lg 
                 hover:shadow-2xl transition-all duration-500 ease-in-out transform lg:hover:-translate-y-2
                 w-full min-w-[260px] md:max-w-[340px] lg:max-w-[380px] h-fit md:min-h-[240px] p-6 flex flex-col justify-between"
      title={servicio.servicio}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col justify-start items-start gap-3">
          <div
            className="bg-[#000] text-white p-3 rounded-xl shadow-md 
                          group-hover:scale-110 transition-transform duration-300 flex items-center justify-center"
          >
            <BsCheckSquareFill className="text-[22px]" />
          </div>
          <h5 className="font-extrabold text-[#000] text-base xl:text-lg 2xl:text-xl leading-snug">
            {servicio.servicio}
          </h5>
        </div>
        <p className="text-[#555] text-sm font-light leading-relaxed">
          {servicio.descripcion}
        </p>
        {servicio.tags && (
          <div className="flex flex-wrap gap-2 mt-2">
            {servicio.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#E4F0FF] text-[#000] px-3 py-1 rounded-full text-xs md:text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardServicio;
