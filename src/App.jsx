import "./styles.css";
import 'flowbite';
import "flowbite-react";
import MenuNavegacion from "./components/MenuNavegacion";
import ContainerPrincipal from "./components/ContainerPrincipal";

function App() {
  return (
    <div className="h-[100vh] flex flex-col lg:flex-row">
      <MenuNavegacion></MenuNavegacion>
      <ContainerPrincipal></ContainerPrincipal>
    </div>
  );
}

export default App;
