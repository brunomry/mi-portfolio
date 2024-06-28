import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";

const Menu = () => {
  return (
    <>
      {[false, "sm"].map((expand) => (
        <Navbar expand="lg" className="navBar d-flex justify-content-end" >
            <Navbar.Toggle
              className="border border-white navToggle text-white "
              aria-controls="basic-navbar-nav"
            />

                <Nav className="ps-3 shadow py-3 rounded-3 d-flex flex-column 
                 navOptions d-md-none d-lg-block">
                  <Nav.Link href="#sobremi" className="fw-bold fs-5 me-3 navLink ">
                    SOBRE MÍ
                  </Nav.Link>
                  <Nav.Link
                    href="#tecnologias"
                    className="fw-bold fs-5 me-3 navLink"
                  >
                    TECNOLOGÍAS
                  </Nav.Link>
                  <Nav.Link
                    href="#proyectos"
                    className="fw-bold fs-5 me-3 navLink"
                  >
                    PROYECTOS
                  </Nav.Link>
                  <Nav.Link
                    href="#certificaciones"
                    className="fw-bold fs-5 me-3 navLink"
                  >
                    CERTIFICACIONES
                  </Nav.Link>
                  <Nav.Link
                    href="#contacto"
                    className="fw-bold fs-5 me-2 navLink"
                  >
                    CONTACTO
                  </Nav.Link>
                </Nav>
        </Navbar>
      ))}
    </>
  );
};

export default Menu;
