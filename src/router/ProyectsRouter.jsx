import { Route, Routes } from "react-router-dom";
import ProyectsLayout from "../Layout/ProyectsLayout";
import DetalleProyecto from "../pages/DetalleProyecto";
import ProyectosVista from "../pages/ProyectosVista";

const ProyectsRouter = () => {
  return (
    <ProyectsLayout>
      <Routes>
        <Route
          path="/detalleproyecto/:id"
          element={<DetalleProyecto />}
        ></Route>
        <Route
          path="/proyectos"
          element={<ProyectosVista></ProyectosVista>}
        ></Route>
      </Routes>
    </ProyectsLayout>
  );
};

export default ProyectsRouter;
