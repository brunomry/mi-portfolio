const CardTecnologia = ({ tech }) => {
  return (
    <figure
      key={tech.name}
      title={tech.name}
      className="md:px-5 text-center tech w-[fit-content] h-[fit-content] md:min-w-[150px] md:max-w-[150px] md:h-[130px]  duration-[1s] md:bg-[#ffffff] rounded-xl flex flex-col justify-center items-center "
    >
      <img
        src={tech.icon}
        alt={tech.name}
        className="w-[30px] h-[30px]  iconTech"
      />
      <figcaption className="text-[#375c86] text-[12px] md:text-[1rem] xl:text-[1.25rem] ">
        {tech.name}
      </figcaption>
    </figure>
  );
};

export default CardTecnologia;
