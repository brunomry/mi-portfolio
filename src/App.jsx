import "./styles-min.css";
import 'flowbite';
import "flowbite-react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    // <div className="h-[100vh] flex flex-col lg:flex-row gap-5">
    //   <Sidebar></Sidebar>
    //   <Secciones></Secciones>
    // </div>
    <BrowserRouter>
      <AppRouter></AppRouter>
    </BrowserRouter>
  );
}

export default App;
