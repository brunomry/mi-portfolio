import React from "react";
import { Button, Form } from "react-bootstrap";

const FormContacto = () => {
  return (
    <Form className="sizeText px-2 px-xl-5 pt-4 pb-3 formContact rounded-2 shadow">
      <Form.Group className="mb-2">
        <p className="sizeText mb-4 text-center">Envíame un mensaje y estaré encantado en responderte.</p>
        <Form.Label htmlFor="name" className="mb-1">Nombre y Apellido</Form.Label>
        <Form.Control
          id="name"
          className="section input py-2"
          type="text"
          placeholder="Nombre completo"
          required
          title="Ingresa tu nombre completo"
        />
      </Form.Group>

      <Form.Group className="mb-2" >
        <Form.Label htmlFor="email" className="mb-1">Email</Form.Label>
        <Form.Control
          id="email"
          className="section input py-2"
          type="email"
          placeholder="correo"
          required
          title="Ingresa tu correo electrónico"
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label htmlFor="subject" className="mb-1">Asunto</Form.Label>
        <Form.Control
          id="subject"
          className="section input  py-2"
          type="text"
          placeholder="Asunto"
          required
          title="Ingresa el asunto"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="message" className="mb-1">Mensaje</Form.Label>
        <Form.Control
          as="textarea"
          className="section input textarea"
          id="message"
          type="text"
          placeholder="Mensaje"
          required
          title="Ingresa tu mensaje"
        />
      </Form.Group>
      <div className="d-flex ">
        <button type="submit" className="btn sizeText w-100">
        <i className="bi bi-send me-2"></i> Enviar Mensaje
        </button>
      </div>
    </Form>
  );
};

export default FormContacto;
