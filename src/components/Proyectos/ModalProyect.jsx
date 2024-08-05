const ModalProyect = ({ show, handleShowModal, proyecto }) => {
  return (
    <div
  className={`fixed top-0 bottom-0 left-0 right-0 z-[99]  bg-gray-800 bg-opacity-50  ${show ? 'block' : 'hidden'}`}
>
  <div className="md:w-3/4 lg:w-[75%] h-[95vh] xl:text-[20px] mx-auto lg:overflow-auto mt-4 bg-[#c9c4ff] border-4 border-[#c8a7f6] rounded-md p-2 md:p-4 lg:p-4 text-[#028891]">
    <div className="flex justify-between  items-center bg-[#eae8ff] py-2 px-4 rounded-md mb-2">
      <div className="flex items-center gap-2 ">
        <h3 className="text-lg font-bold md:text-2xl lg:text-3xl">{proyecto.nombre}</h3>
        <a
          href=""
          className="px-4 py-1 border border-[#028891] rounded-md text-sm md:text-base lg:text-lg"
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
      <article className="mb-2">
        <div className="bg-[#eae8ff] p-4 rounded-md">
          <p className="mb-2 font-bold">Tecnologías utilizadas:</p>
          <ul className="flex flex-wrap gap-6">
            {proyecto.tecnologias.map((t) => (
              <div key={t.name} className="flex flex-col items-center">
                <img src={t.icon} alt={t.name} width={40} height={40} />
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
            Proyecto: <span className="font-normal">{proyecto.proyecto}</span>
          </p>
        </div>
        </div>
        
        <div className="bg-[#eae8ff] p-4 rounded-md mb-2">
          <p className="font-bold">Descripción:</p>
          <p>{proyecto.descripcion}</p>
        </div>
        <div className="bg-[#eae8ff] p-4 rounded-md mb-2">
          <p className="font-bold">
            Responsabilidades o Aspectos relevantes
          </p>
          <ul>
            {proyecto.responsabilidades.map((r) => (
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
      className="w-full mt-4 py-2 bg-[#028891] text-white rounded-md text-lg"
      onClick={() => handleShowModal(false)}
      title="Cerrar"
    >
      Cerrar
    </button>
  </div>
</div>

  );
};

export default ModalProyect;
