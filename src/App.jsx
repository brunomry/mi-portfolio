import "./styles.css";
import "flowbite";
import "flowbite-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProyectsRouter from "./router/ProyectsRouter";
import Home from "./pages/Home";
import Footer from "./components/common/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<ProyectsRouter />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
