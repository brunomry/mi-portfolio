const Tecnologia = ({ tech }) => {
  return (
    <figure
      key={tech.name}
      title={tech.name}
      className="px-5 text-center tech w-[100%] min-w-[150px] max-w-[175px] h-[150px] xl:max-w-[200px] xl:h-[175px] duration-[1s] bg-[#f7f7f7] flex flex-col justify-center items-center shadow-xl"
    >
      <img src={tech.icon} alt={tech.name} className="w-[80px] h-[80px] iconTech" />
      <figcaption className="mt-1 text-[#028891] md:text-[1rem] xl:text-[1.125rem] ">{tech.name}</figcaption>
    </figure>
  );
};

export default Tecnologia;
