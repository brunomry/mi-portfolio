const Tecnologia = ({tech}) => {
    return (
        <figure key={tech.name} className="text-center text-white">
              <img src={tech.icon} alt={tech.name} />
              <figcaption>{tech.name}</figcaption>
        </figure>
    );
};

export default Tecnologia;