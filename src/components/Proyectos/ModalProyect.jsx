const ModalProyect = ({ show, handleShowModal, proyecto }) => {
  const cerrarModal = () => {};

  return (
    <div
      className={` fixed top-0 bottom-0 left-0 right-0 z-[99]  bg-gray-800 bg-opacity-50  ${
        show ? "block" : "hidden"
      }`}
      onClick={cerrarModal}
    >
      <div className="lg:w-[75%] modal mt-4 fontSizeModal xl:w-[75%]  lg:h-[100] mx-auto flex flex-col justify-between bg-[#fff] lg:overflow-auto rounded-md p-2 md:p-2 lg:p-2 text-[#028891]">
        <div className=" lg:min-h-[50vh] lg:max-h-[80vh] xl:h-[inherit] xl:min-h-[25vh]">
          <div className="flex justify-between items-center py-2 px-3 w-[100%] ">
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
              <i className="bi bi-x-lg text-[20px]"></i>
            </button>
          </div>
          <article className="mb-2 ">
            <div className="p-2 rounded-md">
              <p className="mb-2 font-bold">Tecnologías utilizadas:</p>
              <ul className="flex flex-wrap gap-4">
                {proyecto.tecnologias.map((t) => (
                  <div key={t.name} className="flex flex-col items-center">
                    <img
                      src={t.icon}
                      alt={t.name}
                      className="iconTechModal w-[40px]"
                    />
                    <figcaption className="text-[1rem]">{t.name}</figcaption>
                  </div>
                ))}
              </ul>
            </div>
          </article>
          <article>
            <div className="flex gap-5 mb-2 rounded-md">
              <div className="flex flex-col rounded-md p-2 py-0 text-[1rem]">
                <p className="font-bold ">Tipo</p>
                <span className="font-normal ">{proyecto.tipo}</span>
              </div>
              <div className="flex flex-col rounded-md p-2 py-0 text-[1rem]">
                <p className="font-bold">Proyecto</p>
                <span className="font-normal">{proyecto.proyecto}</span>
              </div>
              <div className="flex flex-col rounded-md p-2 py-0 text-[1rem]">
                <p className="font-bold">Inicio</p>
                <span className="font-normal">{proyecto.fecha}</span>
              </div>
              <div className="flex flex-col rounded-md p-2 py-0 text-[1rem]">
                <p className="font-bold">Duración</p>
                <span className="font-normal">{proyecto.duracion}</span>
              </div>
              <div className="flex flex-col rounded-md p-2 py-0 text-[1rem]">
                <p className="font-bold">Última actualización</p>
                <span className="font-normal">
                  {proyecto.ultima_actualizacion}
                </span>
              </div>
            </div>

            <div className="flex flex-col rounded-md p-2 py-0 text-[1rem] mb-2">
              <p className="font-bold">Descripción:</p>
              <p>{proyecto.descripcion}</p>
            </div>
            <div
              className={`text-[1rem] p-2 pb-3 py-0 rounded-md mb-2 ${
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
          {/* <div className="flex justify-end mx-3">
          <button
            type="button"
            className="w-[25%] my-2 py-1 bg-[#028891] text-white rounded-md text-lg"
            onClick={() => handleShowModal(false)}
            title="Cerrar"
          >
            Cerrar
          </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ModalProyect;
