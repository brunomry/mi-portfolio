import "./styles.css";
import "flowbite";
import "flowbite-react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import ScrollTop from "./common/ScrollTop";

function App() {
  return (
    // <div className="h-[100vh] flex flex-col lg:flex-row gap-5">
    //   <Sidebar></Sidebar>
    //   <Secciones></Secciones>
    // </div>
    <BrowserRouter>
      <ScrollTop></ScrollTop>
      <AppRouter></AppRouter>
    </BrowserRouter>
  );
}

export default App;
