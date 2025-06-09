import "./styles.css";
import "flowbite";
import "flowbite-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProyectsRouter from "./router/ProyectsRouter";
import Home from "./pages/Home";
import Footer from "./components/common/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos/*" element={<ProyectsRouter />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    
  );
}

export default App;
