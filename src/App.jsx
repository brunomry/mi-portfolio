import "./styles.css";
import "flowbite";
import "flowbite-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProyectsRouter from "./router/ProyectsRouter";
import Home from "./pages/Home";
import Login from "./pages/Login";
import FormularioTestimonio from "./components/testimonios/FormularioTestimonio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login></Login>}/>
        <Route path="/formulario" element={<FormularioTestimonio></FormularioTestimonio>}/>

        <Route path="/proyectos/*" element={<ProyectsRouter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
