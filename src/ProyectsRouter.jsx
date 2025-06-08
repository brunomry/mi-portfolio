import React from "react";
import { Route, Routes } from "react-router-dom";
import OtrosProyectos from "./components/Proyectos/OtrosProyectos";
import ProyectsLayout from "./Layout/ProyectsLayout";
import DetalleProyecto from "./components/Proyectos/DetalleProyecto";
import Footer from "./components/Footer";

const ProyectsRouter = () => {
  return (
    <ProyectsLayout>
      <Routes>
        <Route
          path="/otros-proyectos"
          element={<OtrosProyectos></OtrosProyectos>}
        ></Route>
        <Route
          path="/detalleproyecto/:id"
          element={<DetalleProyecto />}
        ></Route>
      </Routes>
    </ProyectsLayout>
  );
};

export default ProyectsRouter;
