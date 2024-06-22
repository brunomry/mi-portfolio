import React from "react";
import perfil from "../assets/perfil.png";

const Home = () => {
  return (
    <article className="d-flex flex-column justify-content-center align-items-center flex-md-row home py-2 py-md-5 " id="sobremi">
      <div className="d-flex flex-column flex-md-row align-items-center home_presentation">
        <div className="text-center">
          <p className="text-white lead mb-0">¡Bienvenido!</p>
          <h1 className="mb-2 mb-md-5 display-3 fw-bold">Hola, soy Bruno Madozzo</h1>
          <div className="mb-2 mb-md-5">
          <img
            src={perfil}
            alt=""
            className="imgProfile rounded-circle img-fluid border border-2 border-white"
          />
        </div>
          <h3 className="mb-3 mb-md-5 display-6 fw-bold">Desarrollador Web Frontend</h3>

          <div className="d-flex flex-column gap-3 gap-md-4 justify-content-center align-items-center">
            <button className="btn px-5 rounded-0 fw-bold btnCV text-white border border-1 border-white fs-5">
              Descargar CV <i className="bi bi-download ms-2"></i>
            </button>
            <div className="d-flex gap-4">
              <a className="social">
                <i className="bi bi-github fs-1"></i> 
              </a>
              <a className="social">
                <i className="bi bi-linkedin fs-1"></i>
              </a>
            </div>
          </div>
        </div>
       
      </div>
    </article>
  );
};

export default Home;
