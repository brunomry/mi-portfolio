import React from "react";
import img from "../../assets/bg.jpg";

const CardProyecto = ({ proyecto }) => {
  console.log(proyecto.nombre);

  return (
    <div className="card cardProyect ">
      <img
        src={proyecto.imagen}
        alt={proyecto.nombre}
        className="rounded-top imgProyect border-bottom"
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <div className="descriptionProyect rounded-2 py-1 px-2 d-flex flex-column align-items-center">
          <h3 className="mb-1">{proyecto.nombre}</h3>
          <p className="text-dark fs-5 mb-0">{proyecto.tipo}</p>
          {/* <p className="text-success tecnologies">HTML5 | CSS3 | Bootstrap5 | React | Node | Express | Javascript | MongoDB</p> */}
        </div>
        <div className="d-flex gap-3 justify-content-center">
          {/* <button className="btn btnSocial d-flex align-items-center gap-2">
            
            <i className="bi bi-github fs-4 text-white"></i> 
            <a href="#">Github</a>       
          </button> */}
          <button className="btn btnProyect d-flex align-items-center gap-2">
            {/* <i className="bi bi-link-45deg fs-4 text-white"></i>    */}
            <a href="#" className="px-5">
              Más Detalles
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProyecto;
