import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import proyectos from "../helpers/proyectos";


const ModalProyect = ({ show, handleShowModal, proyecto }) => {


  return (
    <Modal
      show={show}
      onHide={handleShowModal}
      className="modalProyect rounded-0  modal "
      centered
      size="xl"
      scrollable
    >
      <div class="modal-body">
        <a
          type="button"
          class="text-secondary"
          onClick={handleShowModal}
          data-bs-theme="dark"
        >
          <i class="bi bi-arrow-left fs-3"></i>
        </a>
        <div className="row mb-5">
            <article>
            <div className="mb-4 mt-5">
              <h3 className="d-inline rounded-2 p-3 bg-white mb-3">
                {proyecto.nombre}
              </h3>
            </div>
            </article>
        <article className="col-lg-6">
        
            <img src={proyecto.imagen} alt="" className=" imgModal mb-3" />
            <div className="rounded-2 py-2 bg-white mb-2 px-2">
                <p className="fw-bold">Tecnologías utilizadas:</p>
                <ul className="d-flex gap-3 flex-wrap">
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
            
            <div className="d-flex gap-2 align-items-center">
              <div className="bg-white rounded-2 py-2 px-2 mb-3">
                <p className="fw-bold mb-0">
                  Tipo: <span className="fw-normal">{proyecto.tipo}</span>
                </p>
              </div>
              <div className="bg-white rounded-2 py-2 px-2 mb-3 d-flex align-items-center">
                <p className="fw-bold mb-0">
                  Proyecto:{" "}
                  <span className="fw-normal">{proyecto.proyecto}</span>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2 py-3 px-2 mb-2">
              <p className="fw-bold mb-0">Descripción:</p>
              <ul>
                <li className="text-dark">{proyecto.descripcion}</li>
              </ul>
            </div>
            <div className="bg-white rounded-2 py-3 px-2 mb-2">
              <p className="fw-bold mb-0">Objetivos:</p>
              <ul>
                <li className="text-dark">{proyecto.objetivos}</li>
              </ul>
            </div>
            <div className="bg-white rounded-2 py-3 px-2 mb-2">
              <p className="fw-bold mb-0">
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
           
            <div className="rounded-2 py-2 bg-white mb-2 px-2">
            <p className="fw-bold mb-0">
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
