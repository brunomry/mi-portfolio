const ModalProyect = ({ show, handleShowModal, proyecto }) => {
  return (
    <div
      className={` fixed top-0 bottom-0 left-0 right-0 z-[99]  bg-gray-800 bg-opacity-50  ${
        show ? "block" : "hidden"
      }`}
    >
      <div className="md:w-[90%] modal fontSizeModal xl:w-[65%] lg:h-[90vh] xl:min-h[80] mx-auto flex flex-col justify-between mt-4 bg-[#c9c4ff] lg:overflow-auto border-4 border-[#c8a7f6] rounded-md p-2 md:p-4 lg:p-4 text-[#028891]">
        <div className="lg:h-[90vh]">
          <div className="flex justify-between items-center bg-[#eae8ff] py-2 px-4 w-[100%] rounded-md mb-2">
            <div className="flex items-center gap-2 ">
              <h3 className="text-lg font-bold md:text-2xl lg:text-3xl">
                {proyecto.nombre}
              </h3>
              <a
                href={proyecto.enlace}
                className="px-4 py-1 border border-[#028891] rounded-md text-sm md:text-base lg:text-lg"
                target="_BLANK"
              >
                Visitar
              </a>
            </div>
            <button
              type="button"
              className="text-[#028891] text-2xl"
              onClick={() => handleShowModal(false)}
              title="Cerrar"
            >
              <i className="bi bi-x-lg text-[30px] px-6"></i>
            </button>
          </div>
          <article className="mb-2 ">
            <div className="bg-[#eae8ff] p-4 rounded-md">
              <p className="mb-2 font-bold">Tecnologías utilizadas:</p>
              <ul className="flex flex-wrap gap-6">
                {proyecto.tecnologias.map((t) => (
                  <div key={t.name} className="flex flex-col items-center">
                    <img
                      src={t.icon}
                      alt={t.name}
                      className="iconTechModal w-[25px]"
                    />
                    <figcaption>{t.name}</figcaption>
                  </div>
                ))}
              </ul>
            </div>
          </article>
          <article>
            <div className="flex gap-2 mb-2 rounded-md">
              <div className="bg-[#eae8ff] rounded-md p-4 ">
                <p className="font-bold">
                  Tipo: <span className="font-normal">{proyecto.tipo}</span>
                </p>
              </div>
              <div className="bg-[#eae8ff] p-4 rounded-md">
                <p className="font-bold">
                  Proyecto:{" "}
                  <span className="font-normal">{proyecto.proyecto}</span>
                </p>
              </div>
              <div className="bg-[#eae8ff] p-4 rounded-md">
                <p className="font-bold">
                  Inicio: <span className="font-normal">{proyecto.fecha}</span>
                </p>
              </div>
              <div className="bg-[#eae8ff] p-4 rounded-md">
                <p className="font-bold">
                  Duración:{" "}
                  <span className="font-normal">{proyecto.duracion}</span>
                </p>
              </div>
              <div className="bg-[#eae8ff] p-4 rounded-md">
                <p className="font-bold">
                  Última actualización:{" "}
                  <span className="font-normal">
                    {proyecto.ultima_actualizacion}
                  </span>
                </p>
              </div>
            </div>

            <div className="bg-[#eae8ff] p-4 rounded-md mb-2">
              <p className="font-bold">Descripción:</p>
              <p>{proyecto.descripcion}</p>
            </div>
            <div
              className={`bg-[#eae8ff] p-4 rounded-md mb-2 ${
                proyecto.responsabilidades.length === 0 ? "hidden" : "block"
              }`}
            >
              <p className="font-bold">
                {proyecto.proyecto === "Individual" ||
                proyecto.proyecto === "Freelance"
                  ? "Aspectos relevantes"
                  : "Responsabilidades o Aspectos relevantes"}
              </p>
              <ul>
                {proyecto.responsabilidades.length > 0 &&
                  proyecto.responsabilidades.map((r) => (
                    <li key={r}>
                      <i className="bi bi-check2 text-[#028891] mr-2"></i>
                      {r}
                    </li>
                  ))}
              </ul>
            </div>
          </article>
          <button
            type="button"
            className="w-[100%] mt-2 py-2 bg-[#028891] text-white rounded-md text-lg"
            onClick={() => handleShowModal(false)}
            title="Cerrar"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalProyect;
