import "./styles.css";
import "flowbite";
import "flowbite-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPrincipal from "./Layout/MainPrincipal";
import ProyectsRouter from "./ProyectsRouter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <div className=" md:hidden h-screen flex  justify-center py-40 px-4 text-center bg-[#2B7FF7] text-[#FAFAFA] font-black">
        Ups! Actualmente estoy actualizando el diseño en celulares. Puedes ingresar desde una tablet o PC para ver el mismo.
      </div> */}
      {/* 
      <div className="hidden md:block"> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPrincipal />} />
          <Route path="/proyectos/*" element={<ProyectsRouter />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>

      {/* </div> */}
    </>
  );
}

export default App;
