import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import proyectos from "../helpers/proyectos";


const ModalProyect = ({ show, handleShowModal, proyecto }) => {


  return (
    <Modal
      show={show}
      onHide={handleShowModal}
      className="modalProyect rounded-0 modal "
      centered
      size="xl"
      scrollable
    >
      <div class="modal-body w-[100%] bg-[#eae8ff]">
        <a
          type="button"
          class="text-secondary"
          onClick={handleShowModal}
          data-bs-theme="dark"
        >
          <i class="bi bi-arrow-left fs-3"></i>
        </a>
        <div className="mb-5 row">
            <article>
            <div className="mt-5 mb-4">
              <h3 className="p-3 mb-3 bg-white d-inline rounded-2">
                {proyecto.nombre}
              </h3>
            </div>
            </article>
        <article className="col-lg-6">
        
            <img src={proyecto.imagen} alt="" className="mb-3 w-[100%]" />
            <div className="px-2 py-2 mb-2 bg-white rounded-2">
                <p className="fw-bold">Tecnologías utilizadas:</p>
                <ul className="flex-wrap gap-3 d-flex">
                    {
                        proyecto.tecnologias.map(t=>(
                            <figure key={t.name} className="d-flex flex-column align-items-center">
                                <img src={t.icon} alt="" width={40} height={40}/>
                                <figcaption>{t.name}</figcaption>
                            </figure>
                        ))
                    }
                
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
          
        </div>
       
      </div>
    </Modal>
  );
};

export default ModalProyect;
