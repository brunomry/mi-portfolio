const CardTecnologia = ({ tech }) => {
  return (
    <figure
      key={tech.name}
      title={tech.name}
      className="px-5 text-center tech w-[100%] min-w-[150px] max-w-[150px] h-[130px]  duration-[1s] bg-[#ffffff] shadow-xl rounded-xl flex flex-col justify-center items-center "
    >
      <img
        src={tech.icon}
        alt={tech.name}
        className="w-[50px] h-[50px]  iconTech"
      />
      <figcaption className="mt-1 text-[#375c86] md:text-[1rem] xl:text-[1.25rem] ">
        {tech.name}
      </figcaption>
    </figure>
  );
};

export default CardTecnologia;
