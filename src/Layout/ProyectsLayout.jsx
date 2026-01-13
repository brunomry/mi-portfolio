import NavbarSecondary from "../common/NavbarSecondary";
import ScrollTop from "../common/ScrollTop";

const ProyectsLayout = ({ children }) => {
  return (
    <div className="min-h-[100vh] flex flex-col ">
      <ScrollTop></ScrollTop>
      <NavbarSecondary></NavbarSecondary>
      {children}  
    </div>
  );
};

export default ProyectsLayout;
