import React from "react";
import NavbarSecondary from "../components/NavbarSecondary";
import Footer from "../components/Footer";
import ScrollTop from "../components/common/ScrollTop";

const ProyectsLayout = ({ children }) => {
  return (
    <div className="min-h-[100vh] flex flex-col lg:flex-row">
      <ScrollTop></ScrollTop>
      <NavbarSecondary></NavbarSecondary>
      {children}
      
    </div>
  );
};

export default ProyectsLayout;
