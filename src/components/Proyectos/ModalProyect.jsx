const ModalProyect = ({ show, handleShowModal, proyecto }) => {
  return (
    <modal
      className={`md:w-[75%] lg:w-[65%] md:text-[18px] lg:text-[20px] text-[#028891] md:mt-[150px] lg:mt-[25px] bg-[#c9c4ff] border-[#c8a7f6] border-[5px] rounded-[6px] my-8 fixed top-0 bottom-0 overflow-auto ${
        show ? "block z-[99]" : "hidden"
      }`}
    >
      <div class="w-[100%] mx-auto ">
        <div className="px-6 mb-5 row w-[100%] h-[100%]">
          <article className="flex items-center justify-between py-2 my-2 bg-[#eae8ff]">
            <div className="flex items-center gap-2">
              <h3 className="p-3 rounded-[4px] font-bold sm:flex-wrap md:text-[25px] lg:text-[28px]">
                {proyecto.nombre}
              </h3>
              <a
                href=""
                className="px-4 border-[#028891] border-[1px] rounded-[4px]"
              >
                Visitar
              </a>
            </div>

            <a
              type="button"
              class="flex justify-end px-6 cursor-pointer"
              onClick={() => handleShowModal(false)}
              title="Cerrar"
            >
              <i className="bi bi-x-lg text-[40px] px-6"></i>
            </a>
          </article>
          <article className="col-lg-6 ">
            <div className="px-6 py-6 mb-2 bg-[#eae8ff] rounded-[4px]">
              <p className="mb-2 font-bold">Tecnologías utilizadas:</p>
              <ul className="gap-6 flex w-[75%] flex-wrap">
                {proyecto.tecnologias.map((t) => (
                  <div
                    key={t.name}
                    className="flex flex-col items-center gap-2"
                  >
                    <img src={t.icon} alt="" width={40} height={40} />
                    <figcaption>{t.name}</figcaption>
                  </div>
                ))}
              </ul>
            </div>
          </article>
          <article className="col-lg-6 ">
            <div className="flex items-center gap-2">
              <div className="px-6 py-6 mb-2 bg-[#eae8ff] rounded-[4px]">
                <p className="mb-0 font-bold">
                  Tipo:{" "}
                  <span className="font-normal md:text-[18px] lg:text-[20px]">
                    {proyecto.tipo}
                  </span>
                </p>
              </div>
              <div className="flex items-center px-6 py-6 mb-2 bg-[#eae8ff] rounded-[4px]">
                <p className="mb-0 font-bold">
                  Proyecto:{" "}
                  <span className="font-normal">{proyecto.proyecto}</span>
                </p>
              </div>
            </div>

            <div className="px-6 py-6 mb-2 bg-[#eae8ff] rounded-[4px]">
              <p className="mb-0 font-bold">Descripción:</p>
              <ul>
                <li>{proyecto.descripcion}</li>
              </ul>
            </div>
            <div className="px-6 py-6 mb-2 bg-[#eae8ff] rounded-[4px]">
              <p className="mb-0 font-bold">
                {proyecto.integrantes.length > 1
                  ? "Responsabilidades:"
                  : "Aspectos relevantes"}
              </p>
              <ul>
                {proyecto.responsabilidades.map((r) => (
                  <li key={r}>
                    <i class="bi bi-check2 text-[1.25rem] text-[#028891] me-2"></i>
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <div className="px-6 py-6 mb-2 bg-[#eae8ff] rounded-[4px]">
              <p className="mb-0 font-bold">
                {proyecto.integrantes.length > 1 ? "Equipo:" : `Autor: `}
              </p>
              <ul>
                {proyecto.integrantes.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </article>
          <button
            type="button"
            class="w-[100%] mt-3 bottom-[20px] text-center cursor-pointer text-[20px] border-[1px] rounded-[4px] bg-[#028891] py-2 text-white"
            onClick={() => handleShowModal(false)}
            title="Cerrar"
          >
            Cerrar
          </button>
        </div>
      </div>
    </modal>
  );
};

export default ModalProyect;
