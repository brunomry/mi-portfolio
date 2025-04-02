import { Route, Routes } from "react-router-dom";
import AcercaDeMi from "../pages/sobremi/AcercaDeMi";
import MainLayout from "../layout/MainLayout";
import Tecnologias from "../pages/tecnologias/Tecnologias";
import Proyectos from "../pages/proyectos/Proyectos";
import Educacion from "../pages/educacion/Educacion";
import Servicios from "../pages/servicios/Servicios";
import Contacto from "../pages/contacto/Contacto";
import Testimonios from "../pages/testimonios/Testimonios";
import Login from "../pages/auth/Login";
import FormularioTestimonio from "../pages/testimonios/FormularioTestimonio";
import DetalleProyecto from "../pages/proyectos/DetalleProyecto";

const AppRouter = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<AcercaDeMi></AcercaDeMi>}></Route>
        <Route path="/tecnologias" element={<Tecnologias></Tecnologias>}></Route>
        <Route
          path="/proyectos"
          element={<Proyectos></Proyectos>}
        ></Route>
         <Route
          path="/educacion"
          element={<Educacion></Educacion>}
        ></Route>
         <Route
          path="/servicios"
          element={<Servicios></Servicios>}
        ></Route>
           <Route
          path="/testimonios"
          element={<Testimonios></Testimonios>}
        ></Route>
        <Route
          path="/formtestimonio"
          element={<FormularioTestimonio></FormularioTestimonio>}
        ></Route>
          <Route
          path="/contacto"
          element={<Contacto></Contacto>}
        ></Route> 
        <Route
          path="/login"
          element={<Login></Login>}
        ></Route>
         <Route
          path="/detalleproyecto/:id"
          element={<DetalleProyecto></DetalleProyecto>}
        ></Route>
      </Routes>
    </MainLayout>
  );
};

export default AppRouter;
