import { useState, useEffect } from "react";
import CardProyecto from "./CardProyecto";
import proyectos from "../../helpers/proyectos";
import { Link } from "react-router-dom";

const categorias = ["Frontend", "Backend", "UI", "Universidad"];

const Proyectos = ({ mostrar }) => {
  const [filtro, setFiltro] = useState("Frontend");
  const [listaFiltrada, setListaFiltrada] = useState([]);

  useEffect(() => {
    filtrarProyectos(filtro);
  }, [filtro]);

  const filtrarProyectos = (categoria) => {
    let filtrados = [];
    switch (categoria) {
      case "Frontend":
        filtrados = proyectos.filter((p) => p.area.includes("frontend"));
        break;
      case "Backend":
        filtrados = proyectos.filter((p) => p.area.includes("backend"));
        break;
      case "UI":
        filtrados = proyectos.filter((p) => p.area.includes("ui"));
        break;
      case "Universidad":
        filtrados = proyectos.filter((p) => p.area.includes("universidad"));
        break;
      default:
        filtrados = proyectos;
    }
    setListaFiltrada(filtrados);
  };

  return (
    <section
      id="proyectos"
      className="w-[100%] py-12 xl:py-20 2xl:py-40 px-4 md:px-8 lg:px-[100px] xl:px-[120px] 2xl:px-[150px] flex flex-col gap-4 md:gap-6 bg-[#f9f9f9] "
    >
      <h2 className="font-extrabold text-[24px] md:text-[28px] xl:text-[32px] 2xl:text-[36px] text-[#000] xl:mb-4">
        Proyectos
      </h2>
      <p className="text-[#555] text-sm md:text-base font-light">
        Estos son algunos de mis proyectos, que incluyen aplicaciones web,
        sitios web, landing pages y trabajos académicos. Cada proyecto muestra
        soluciones prácticas, diseño de interfaces y funcionalidades
        desarrolladas con diversas tecnologías modernas.
      </p>
      <article className="flex gap-2 md:gap-4 mt-4 flex-wrap">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setFiltro(cat)}
            className={`px-4 py-2 rounded-full font-medium text-sm md:text-base transition 
              ${
                filtro === cat
                  ? "bg-[#595c61] text-white"
                  : "bg-[#e0e0e0] text-[#333] hover:bg-[#b4b4b4]"
              }`}
          >
            {cat}
          </button>
        ))}
      </article>
      <div
        className={`mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:gap-8 ${
          listaFiltrada.length === 3 ? "justify-items-center" : ""
        }`}
      >
        {listaFiltrada.map((proyecto) => (
          <CardProyecto key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
