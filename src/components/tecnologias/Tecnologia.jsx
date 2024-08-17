const Tecnologia = ({ tech }) => {
  return (
    <figure
      key={tech.name}
      title={tech.name}
      className="px-5 text-center tech w-[100%] min-w-[150px] max-w-[200px] h-[175px] duration-[1s] bg-[#f7f7f7] flex flex-col justify-center items-center shadow-xl"
    >
      <img src={tech.icon} alt={tech.name} className="w-[100px] iconTech" />
      <figcaption className="mt-1 text-[#028891] md:text-[16px] lg:text-[18px] xl:text-[20px]">{tech.name}</figcaption>
    </figure>
  );
};

export default Tecnologia;
