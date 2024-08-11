import React from "react";
import { Button, Form } from "react-bootstrap";

const FormContacto = () => {
  return (
    <form className="hidden px-2 pt-4 pb-3 shadow w-[100%] bg-white xl:px-5 formContact rounded-[6px] sm:w-[80%] md:w-[75%]  xl:w-[500px]">
      <div className="mb-3">
        <p className="mb-4 text-center md:text-[18px] lg:text-[20px] text-[#028891]">Envíame un mensaje y estaré encantado en responderte.</p>
        <label htmlFor="name" className="block md:text-[18px] lg:text-[20px] text-[#028891]">Nombre y Apellido</label>
        <Form.Control
          id="name"
          className="block py-2 border-b-[1px] input focus:border-b-[1px] w-[100%] border-[#028891]"
          type="text"
          placeholder="Nombre completo"
          required
          title="Ingresa tu nombre completo"
        />
      </div>

      <div className="mb-3" >
        <label htmlFor="email" className="block md:text-[18px] lg:text-[20px] text-[#028891]">Email</label>
        <Form.Control
          id="email"
          className="block py-2 border-b-[1px] input w-[100%] border-[#028891]"
          type="email"
          placeholder="correo"
          required
          title="Ingresa tu correo electrónico"
        />
      </div>
      <div className="mb-3 ">
        <label htmlFor="subject" className="block md:text-[18px] lg:text-[20px] text-[#028891]">Asunto</label>
        <Form.Control
          id="subject"
          className="block py-2 border-b-[1px] input w-[100%] border-[#028891]"
          type="text"
          placeholder="Asunto"
          required
          title="Ingresa el asunto"
        />
      </div>
      <div className="mb-3">
        <Form.Label htmlFor="message" className="block mb-1 md:text-[18px] lg:text-[20px] text-[#028891]">Mensaje</Form.Label>
        <Form.Control
          as="textarea"
          className="ps-2 input textarea h-[150px] rounded-[4px] border-[1px] block py-2 input w-[100%] border-[#028891]"
          id="message"
          type="text"
          placeholder="Mensaje"
          required
          title="Ingresa tu mensaje"
        />
      </div>
      <div className="flex justify-end">
        <button type="submit" className="bg-[#028891] md:text-[18px] rounded-[6px] lg:text-[20px] text-white py-2 w-[100%] border hover:bg-white hover:border-[#028891] hover:text-[#028891]">
        <i className="bi bi-send me-2 hover:text-[#028891] "></i> Enviar Mensaje
        </button>
      </div>
    </form>
  );
};

export default FormContacto;
