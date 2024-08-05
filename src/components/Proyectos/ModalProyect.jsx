const ModalProyect = ({ show, handleShowModal, proyecto }) => {
  return (
    <modal
      className={`lg:w-[65%] md:mt-[150px] lg:mt-[25px] bg-[#f5e4fd] border-[#000] border-[1px] rounded-[6px] my-8 fixed top-0 bottom-0 overflow-auto ${
        show ? "block z-[99]" : "hidden"
      }`}
    >
      <div class="w-[100%] mx-auto">
        <a
          type="button"
          class="flex justify-end px-10 cursor-pointer sticky py-2 top-0 right-0 "
          onClick={() => handleShowModal(false)}
          title="Cerrar"
        >
          <i class="bi bi-x-lg text-[40px] bg-[#effeff] px-2"></i>
        </a>
        <div className=" mb-5 row w-[100%]">
          <article>
            <div className="mt-5 mb-4">
              <h3 className="p-3 mb-3 bg-white d-inline rounded-2">
                {proyecto.nombre}
              </h3>
            </div>
          </article>
          <article className="col-lg-6">
            <img
              src={proyecto.imagen}
              alt=""
              className="mb-3 w-[300px] h-[300px]"
            />
            <div className="px-2 py-2 mb-2 bg-white rounded-2">
              <p className="fw-bold">Tecnologías utilizadas:</p>
              <ul className="flex-wrap gap-3 d-flex">
                {proyecto.tecnologias.map((t) => (
                  <figure
                    key={t.name}
                    className="d-flex flex-column align-items-center"
                  >
                    <img src={t.icon} alt="" width={40} height={40} />
                    <figcaption>{t.name}</figcaption>
                  </figure>
                ))}
              </ul>
            </div>
          </article>
          <article className="col-lg-6">
            <div className="gap-2 d-flex align-items-center">
              <div className="px-2 py-2 mb-3 bg-white rounded-2">
                <p className="mb-0 fw-bold">
                  Tipo: <span className="fw-normal">{proyecto.tipo}</span>
                </p>
              </div>
              <div className="px-2 py-2 mb-3 bg-white rounded-2 d-flex align-items-center">
                <p className="mb-0 fw-bold">
                  Proyecto:{" "}
                  <span className="fw-normal">{proyecto.proyecto}</span>
                </p>
              </div>
            </div>

            <div className="px-2 py-3 mb-2 bg-white rounded-2">
              <p className="mb-0 fw-bold">Descripción:</p>
              <ul>
                <li className="text-dark">{proyecto.descripcion}</li>
              </ul>
            </div>
            <div className="px-2 py-3 mb-2 bg-white rounded-2">
              <p className="mb-0 fw-bold">Objetivos:</p>
              <ul>
                <li className="text-dark">{proyecto.objetivos}</li>
              </ul>
            </div>
            <div className="px-2 py-3 mb-2 bg-white rounded-2">
              <p className="mb-0 fw-bold">
                {proyecto.integrantes.length > 1
                  ? "Responsabilidades:"
                  : "Funcionalidades relevantes"}
              </p>
              <ul>
                {proyecto.responsabilidades.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>

            <div className="px-2 py-2 mb-2 bg-white rounded-2">
              <p className="mb-0 fw-bold">
                {proyecto.integrantes.length > 1
                  ? "Integrantes:"
                  : `Autor: ${proyecto.integrantes}`}
              </p>
              <ul>
                {proyecto.integrantes.length > 1 &&
                  proyecto.integrantes.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          </article>
          <a
            type="button"
            class="flex justify-center px-10 cursor-pointer text-[20px] border-[1px] rounded-2 bg-[#028891] py-2 text-white"
            onClick={() => handleShowModal(false)}
            title="Cerrar"
          >
            Cerrar
          </a>
        </div>
      </div>
    </modal>
  );
};

export default ModalProyect;
