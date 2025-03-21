const CardTecnologia = ({ tech }) => {
  return (
    <figure
      key={tech.name}
      title={tech.name}
      className="px-5 text-center tech w-[100%] min-w-[150px] max-w-[150px] h-[150px] xl:max-w-[175px] xl:h-[150px] duration-[1s] bg-[#ffffff] border-[1px] rounded-xl flex flex-col justify-center items-center "
    >
      <img src={tech.icon} alt={tech.name} className="w-[50px] h-[50px] xl:w-[80px] xl:h-[80px] iconTech" />
      <figcaption className="mt-1 text-[#787777] md:text-[1rem] xl:text-[1.125rem] 2xl:text-[20px]">{tech.name}</figcaption>
    </figure>
  );
};

export default CardTecnologia;
