import React from "react";

import home from "../assets/bgHome.jpg";

const Home = () => {
  return (
    <article
      className="d-flex flex-column flex-md-row justify-content-md-center align-items-center home pb-2 rounded-2 shadow section"
      id="sobremi"
    >
      <div className="d-flex flex-column align-items-center  flex-md-row home_presentation">
        <div className="text-center">
          <p className="text-dark lead mb-1">¡Bienvenido! 👋</p>
          <h1 className=" mb-2 mb-md-4 display-3 fw-bold">
            Hola, soy Bruno Madozzo
          </h1>
          <h2 className="display-6 fw-bold mb-5">Desarrollador Web Frontend</h2>
          <div className="descriptionHome  py-5 px-5 rounded-4 mb-5">
            <p className="fs-5 text-dark  mx-2 mx-xl-5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, iusto
              provident ratione dolore libero vitae nam, assumenda asperiores
              optio molestias animi eligendi cupiditate natus accusantium.
              Fugiat suscipit veritatis et debitis.
            </p>
          </div>

          <div className="d-flex flex-column gap-3 gap-md-4 justify-content-center align-items-center">
            <button className="btn px-5 rounded-0 fw-bold btnCV fs-5">
              Descargar CV <i className="bi bi-download ms-2"></i>
            </button>
            <div className="d-flex gap-4 text-dark">
              <a className="social">
                <i className="bi bi-github fs-1 text-dark"></i>
              </a>
              <a className="social">
                <i className="bi bi-linkedin fs-1 text-primary"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Home;
