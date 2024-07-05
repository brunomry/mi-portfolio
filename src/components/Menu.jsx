import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import perfil from "../assets/perfilbg.png";

const Menu = () => {
  return (
    <>
      {[false, "sm"].map((expand) => (
        <Navbar expand="lg" className="navBar d-flex justify-content-center ">
          <Container fluid className="px-0 ">
            <Navbar.Toggle
              className="border border-white navToggle text-white "
              aria-controls="basic-navbar-nav"
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav
                  className=" shadow  d-flex flex-column justify-content-lg-center align-items-center
                 navOptions d-md-none d-lg-block gap-4"
                >
                  <div className="mx-auto d-none d-lg-block imgProfile mb-2">
                    <img src={perfil} alt="Bruno Madozzo" title="Bruno Madozzo" className="" />
                  </div>
                  <h2 className="text-center text-white">Bruno Madozzo</h2>
                  <div className="d-none d-lg-flex justify-content-center mb-xl-4 gap-3">
                    <a
                      className="social"
                      href="https://github.com/brunomry"
                      target="_blank"
                      title="Github"
                    >
                      <i className="bi bi-github fs-1"></i>
                    </a>
                    <a
                      className="social"
                      href="https://www.linkedin.com/in/bruno-madozzo/"
                      target="_blank"
                      title="LinkedIn"
                    >
                      <i className="bi bi-linkedin fs-1"></i>
                    </a>
                  </div>
                  <div className="navList rounded-2 p-2 ">
                    <Nav.Link
                      href="#sobremi"
                      className=" fw-bold mb-xl-2 navLink text-center"
                    >
                      Acerca de mí
                    </Nav.Link>
                    <Nav.Link
                      href="#tecnologias"
                      className="fw-bold  mb-xl-2 navLink text-center "
                    >
                      Tecnologías
                    </Nav.Link>
                    <Nav.Link
                      href="#proyectos"
                      className="fw-bold mb-xl-2 navLink text-center "
                    >
                      Proyectos
                    </Nav.Link>
                    <Nav.Link
                      href="#certificaciones"
                      className="fw-bold mb-xl-2 navLink text-center"
                    >
                      Certificaciones
                    </Nav.Link>
                    <Nav.Link
                      href="#contacto"
                      className="fw-bold mb-xl-2 navLink text-center"
                    >
                      Contacto
                    </Nav.Link>
                  </div>
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
