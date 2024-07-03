import React from "react";
import FormContacto from "./Contacto/FormContacto";

const Contacto = () => {
  return (
    <article
      className="containerContact py-4 py-md-5 d-flex flex-column gap-2 gap-sm-4 justify-content-center align-items-center px-3 section contact "
      id="contacto"
    >
      <h2 className="display-6 fw-bold ">Contáctame</h2>
      <p className="descriptionContact text-center text-lg-start">
        Para colaborar o contratar mis servicios, no dudes en ponerte en
        contacto conmigo a través de mis redes sociales o completando el
        formulario a continuación.{" "}
      </p>
      <FormContacto></FormContacto>
    </article>
  );
};

export default Contacto;
