import { BsCheckSquareFill } from "react-icons/bs";

const ServiceCard = ({ service }) => {
  return (
    <div
      className="surface-card group bg-white w-full min-w-[260px] min-h-[280px] p-6 flex flex-col justify-between"
      title={service.service}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col justify-start items-start gap-3">
          <div
            className="bg-[#0b6e69] text-white p-3 rounded-xl shadow-md
                          group-hover:scale-110 transition-transform duration-300 flex items-center justify-center"
          >
            <BsCheckSquareFill className="text-[22px]" />
          </div>
          <h5 className="font-extrabold text-[#222] text-base xl:text-lg 2xl:text-xl leading-snug">
            {service.service}
          </h5>
        </div>
        <p className="text-[#555] text-sm md:text-base font-light leading-relaxed">
          {service.description}
        </p>
        {service.tags && (
          <div className="flex flex-wrap gap-2 mt-2">
            {service.tags.map((tag, index) => (
              <span
                key={index}
                className="tag-pill px-3 py-1 rounded-full text-xs md:text-sm font-medium"
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

export default ServiceCard;
