const CardTecnologia = ({ tech }) => {
  return (
    <figure
      key={tech.name}
      title={tech.name}
      className="lg:px-5 border md:border-0 text-center tech w-[100%] min-w-[150px] max-w-[160px] h-[100px] lg:h-[100px] lg:max-w-[175px] xl:h-[150px] duration-[1s]  rounded-xl flex flex-col gap-2 lg:gap-4 justify-center items-center "
    >
      <img src={tech.icon} alt={tech.name} className="w-[40px] h-[40px] xl:w-[72px] xl:h-[72px] iconTech" />
      <figcaption className="text-[#2B7FF7] text-[14px] font-bold md:text-[1rem] ">{tech.name}</figcaption>
    </figure>
  );
};

export default CardTecnologia;
