import React from "react";
import img from "../../assets/bg.jpg";

const CardProyecto = () => {
  return (
    <div className="card cardProyect bg-dark ">
      <img src={img} alt="" className="rounded-top imgProyect"/>
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h3 className=" text-primary mb-1">Ambiente Bohemio</h3>
          <p className="text-white fs-5">Aplicación web de Restaurante</p>
          <p className="text-success tecnologies">HTML5 | CSS3 | Bootstrap5 | React | Node | Express | Javascript | MongoDB</p>
        </div>
        <div className="d-flex gap-3 justify-content-end">
          <button className="btn btnSocial d-flex align-items-center gap-2">
            
            <i className="bi bi-github fs-4 text-white"></i> 
            <a href="#">Github</a>       
          </button>
          <button className="btn btnSocial d-flex align-items-center gap-2">
            
            <i className="bi bi-link-45deg fs-4 text-white"></i>   
            <a href="#" className="">Enlace</a>          
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProyecto;
