import React from "react";
import { Button, Form } from "react-bootstrap";

const FormContacto = () => {
  return (
    <Form className="border-secondary px-2 px-sm-5 pt-4 pb-3 formContact rounded-2 bg-white shadow">
      <Form.Group className="mb-3">
        <Form.Label htmlFor="name">Nombre y Apellido:</Form.Label>
        <Form.Control
          id="name"
          className="section input "
          type="text"
          placeholder="Nombre completo"
          required
          title="Ingresa tu nombre completo"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="email">Email:</Form.Label>
        <Form.Control
          id="email"
          className="section input  "
          type="email"
          placeholder="correo"
          required
          title="Ingresa tu correo electrónico"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="message">Mensaje:</Form.Label>
        <Form.Control
          as="textarea"
          className="section input   textarea"
          id="message"
          type="text"
          placeholder="Mensaje"
          required
          title="Ingresa tu mensaje"
        />
      </Form.Group>
      <div className="d-flex justify-content-sm-end">
        <button type="submit" className="btn">
          Enviar
        </button>
      </div>
    </Form>
  );
};

export default FormContacto;
