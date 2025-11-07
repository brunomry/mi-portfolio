const CardTecnologia = ({ tech }) => {
  return (
    <figure
      key={tech.name}
      title={tech.name}
      className="flex flex-col items-center justify-center gap-2 bg-white rounded-2xl 
                 p-4 min-w-[120px] md:min-w-[165px] h-[120px] md:h-[120px] lg:h-[150px] 
               shadow-md "
    >
      <img
        src={tech.icon}
        alt={tech.name}
        className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] iconTech"
      />
      <figcaption className="text-gray-600  text-sm  text-center">
        {tech.name}
      </figcaption>
    </figure>
  );
};

export default CardTecnologia;
