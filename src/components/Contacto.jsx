import React from "react";
import FormContacto from "./Contacto/FormContacto";

const Contacto = () => {
  return (
    <article
      className="containerContact py-4 py-md-5 d-flex flex-column gap-2 gap-sm-4 justify-content-center align-items-center px-3 section contact"
      id="contacto"
    >
      <h2 className="display-6 fw-bold animationOpacity">Contáctame</h2>
      <div className="d-flex flex-column flex-md-row gap-2 gap-xl-5 animationOpacity">
        <FormContacto></FormContacto>
        <div className="d-flex align-items-center flex-column">
          <p className="descriptionContact text-center sizeText text-lg-start mt-5">
            Si estás interesado en mi perfil, no dudes en ponerte en contacto
            conmigo.{" "}
          </p>
          <div className="mt-3 d-flex flex-column gap-2">
            <div className="w-100 bg-white rounded-2 d-flex px-3 align-items-center gap-3 ">
              <i className="bi bi-google fs-1 text-danger" title="Email"></i>
              <span className="sizeText">brunomadozzo@gmail.com</span>
            </div>
            <div className="w-100 bg-white rounded-2 d-flex px-3 align-items-center gap-3">
              <i className="bi bi-linkedin fs-1 text-primary"></i>
              <span className="sizeText">bruno madozzo</span>
            </div>
            <div className="w-100 bg-white rounded-2 d-flex px-3 align-items-center gap-3">
              <i className="bi bi-github fs-1 text-dark"></i>
              <span className="sizeText">brunomry</span>
            </div>
            <div className="w-100 bg-white rounded-2 d-flex px-3 align-items-center gap-3">
              <i className="bi bi-geo-alt-fill fs-1 text-secondary"></i>
              <span className="sizeText">Tucumán, Argentina</span>
            </div>
          </div>
          <p className="sizeText mb-4 text-center mt-5">
            ¡Gracias por visitar mi perfil!
          </p>
        </div>
      </div>
    </article>
  );
};

export default Contacto;
