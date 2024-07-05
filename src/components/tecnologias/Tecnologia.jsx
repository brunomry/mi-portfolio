const Tecnologia = ({ tech }) => {
  return (
    <figure key={tech.name} className="text-center text-white tech p-5 shadow">
      <img src={tech.icon} alt={tech.name} className="img-fluid iconTech" title={tech.name}/>
      <figcaption className="mt-1 text-dark fw-bold">{tech.name}</figcaption>
    </figure>
  );
};

export default Tecnologia;
