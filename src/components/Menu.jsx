import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";

const Menu = () => {
  return (
    <>
      {[false, "sm"].map((expand) => (
        <Navbar expand="md" className="nav px-2" data-bs-theme="dark">
          <Container fluid className="px-0">
            <Navbar.Brand href="#home" className="d-md-none navLink">
            
            </Navbar.Brand>
            <Navbar.Toggle
              className="border border-white navToggle text-white "
              aria-controls="basic-navbar-nav offcanvasNavbar-expand-sm"
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="canvas text-white"
            >
              <Offcanvas.Header closeButton className=""></Offcanvas.Header>
              <Offcanvas.Body>
                {" "}
                <Nav className="mx-auto text-center">
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
                    href="#contacto"
                    className="fw-bold fs-5 me-2 navLink"
                  >
                    CONTACTO
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Menu;
