import Menu from "./components/Menu";
import "./styles.css";
import Secciones from "./components/Secciones";

function App() {
  return (
    <div className="h-[100vh] flex flex-col lg:flex-row gap-5">
      <Menu></Menu>
      <Secciones></Secciones>
    </div>
  );
}

export default App;
