import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import perfil from "../assets/perfilbg.png";

const Menu = () => {
  return (
    <>
      {[false, "sm", "md"].map((expand) => (
        <Navbar expand="lg" className="w-[100%] h-[80px] lg:h-[100vh] lg:w-[25%] xl:w-[20%] fixed top-0 left-0 m-auto bg-[#028891] flex justify-center z-[99]">
          <Container fluid className="lg:px-0 flex justify-end">
            <Navbar.Toggle
              className=" text-white "
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header
                closeButton
                className=""
              ></Offcanvas.Header>
              <Offcanvas.Body className="px-0 w-[100%]">
                <Nav
                  className="pt-3 flex flex-col lg:justify-center items-center
                 w-[100%] h-[100vh] md:block gap-2 sm:gap-4 xl:pt-[30px]"
                >
                  <div className="hidden lg:block mx-auto w-[150px] h-[150px] rounded-[50%] border-[5px] border-[#12c0bd] lg:w-[180px] lg:h-[180px] mb-2 shadow">
                    <img
                      src={perfil}
                      alt="Bruno Madozzo"
                      title="Bruno Madozzo"
                      className="shadow-xl w-[100%] h-[100%] rounded-[50%] object-cover"
                    />
                  </div>
                  <h2 className="text-center text-white text-[32px] mb-2">Bruno Madozzo</h2>
                  <div className="flex justify-center xl:mb-4 gap-3">
                    <a
                      href="https://github.com/brunomry"
                      target="_blank"
                      title="Github"
                    >
                      <i className="bi bi-github text-white text-3xl sm:text-4xl"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/bruno-madozzo/"
                      target="_blank"
                      title="LinkedIn"
                    >
                      <i className="bi bi-linkedin text-white text-3xl sm:text-4xl"></i>
                    </a>
                  </div>
                  <div className="rounded-[4px] pt-[30px] w-[100%] ">
                    <Nav.Link
                      className="block w-[100%] font-bold xl:mb-2 navLink text-[#f6e8e8] duration-[0.5s] hover:duration-[0.5s] relative pb-[15px] md:text-[18px] lg:text-[20px] text-center"
                      href="#sobremi" 
                      >
                      Acerca de mí
                    </Nav.Link>
                    <Nav.Link
                      href="#tecnologias"
                      className="block w-[100%] font-bold xl:mb-2 navLink text-[#f6e8e8] duration-[0.7s] hover:duration-[0.7s] relative pb-[15px] md:text-[18px] lg:text-[20px] text-center "
                    >
                      Tecnologías
                    </Nav.Link>
                    <Nav.Link
                      href="#proyectos"
                      className="block font-bold xl:mb-2 navLink text-[#f6e8e8] duration-[0.7s] hover:duration-[0.7s] relative pb-[15px] md:text-[18px] lg:text-[20px] text-center "
                    >
                      Proyectos
                    </Nav.Link>
                    <Nav.Link
                      href="#certificaciones"
                      className="block font-bold xl:mb-2 navLink text-[#f6e8e8] duration-[0.7s] hover:duration-[0.7s] relative pb-[15px] md:text-[18px] lg:text-[20px] text-center"
                    >
                      Certificaciones
                    </Nav.Link>
                    <Nav.Link
                      href="#contacto"
                      className="block font-bold xl:mb-2 navLink text-[#f6e8e8] duration-[0.7s] hover:duration-[0.7s] relative pb-[15px] md:text-[18px] lg:text-[20px] text-center"
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
