import { Route, Routes } from "react-router-dom";
import ProyectsLayout from "../Layout/ProyectsLayout";
import ProyectosVista from "../pages/ProjectsView";
import ProjectDetail from "../pages/ProjectDetail";

const ProyectsRouter = () => {
  return (
    <ProyectsLayout>
      <Routes>
        <Route
          path="/detalleproyecto/:id"
          element={<ProjectDetail />}
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
