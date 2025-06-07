import React from "react";
import NavbarSecondary from "../components/NavbarSecondary";
import Footer from "../components/Footer";
import ScrollTop from "../components/common/ScrollTop";

const ProyectsLayout = ({ children }) => {
  return (
    <>
      <ScrollTop></ScrollTop>
      <NavbarSecondary></NavbarSecondary>
      {children}
      <Footer></Footer>
    </>
  );
};

export default ProyectsLayout;
