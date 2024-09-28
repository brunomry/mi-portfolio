const Tecnologia = ({ tech }) => {
  return (
    <figure
      key={tech.name}
      title={tech.name}
      className="px-5 text-center tech w-[100%] min-w-[150px] max-w-[150px] h-[150px] xl:max-w-[175px] xl:h-[150px] duration-[1s] bg-[#ffffff] border-[1px] border-b-[#000] border-b-[5px] rounded-xl flex flex-col justify-center items-center shadow-xl"
    >
      <img src={tech.icon} alt={tech.name} className="w-[50px] h-[50px] xl:w-[80px] xl:h-[80px] iconTech" />
      <figcaption className="mt-1 text-[#000] md:text-[1rem] xl:text-[1.125rem] ">{tech.name}</figcaption>
    </figure>
  );
};

export default Tecnologia;
