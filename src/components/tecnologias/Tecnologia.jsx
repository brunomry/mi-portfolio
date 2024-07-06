const Tecnologia = ({ tech }) => {
  return (
    <figure key={tech.name} className="px-5 text-center text-white tech w-100 d-flex flex-column justify-content-center align-items-center shadow">
      <img src={tech.icon} alt={tech.name} className="iconTech" title={tech.name}/>
      <figcaption className="mt-1 sizeText">{tech.name}</figcaption>
    </figure>
  );
};

export default Tecnologia;
