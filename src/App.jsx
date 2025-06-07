import "./styles.css";
import 'flowbite';
import "flowbite-react";
import MenuNavegacion from "./components/NavbarPrincipal";
import ContainerPrincipal from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPrincipal from "./Layout/MainPrincipal";
import ProyectsRouter from "./ProyectsRouter";

function App() {
  return (
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPrincipal></MainPrincipal>}></Route>
          <Route path="/proyectos/*" element={<ProyectsRouter></ProyectsRouter>}></Route>
        </Routes>
     </BrowserRouter>
  );
}

export default App;
