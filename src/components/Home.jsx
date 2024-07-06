import cv from "../assets/CV Bruno Madozzo Romay.pdf";
import perfil from "../assets/perfilbg.png";

const Home = () => {
  const handleDownloadPDF = () => {
    const urlPDF = cv;
    window.open(urlPDF, "_blank");
  };

  return (
    <article
      className="d-flex flex-column justify-content-center align-items-xl-center home pb-2 rounded-2 section pt-0"
      id="sobremi"
    >
      <div className="d-none justify-content-center pb-md-3 w-100 mb-5 gap-5">
        <div className="rounded-5 border-1 d-flex align-items-center gap-2">
          <i className="bi bi-brightness-high fs-2 text-dark" title="tema"></i>
          <span>Tema</span>
        </div>
        <div className="rounded-5 border-1 d-flex align-items-center gap-2">
          <i className="bi bi-globe fs-2 text-dark" title="idioma"></i>
          <span>Idioma</span>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center  flex-md-row home_presentation">
        <div className="text-center">
          <p className="lead mb-1">
            ¡Bienvenido! <span title="saludo">👋</span>
          </p>
          <h1 className=" mb-2 mb-xl-4 display-3 fw-bold">
            Hola, soy Bruno Madozzo
          </h1>

          <h2 className="display-6 fw-bold mb-3 mb-xl-5">
            Desarrollador Web Frontend
          </h2>
          <div className="descriptionHome  p-3 p-xl-5 rounded-4 mb-4 mb-xl-5">
            <div className="d-block d-sm-none mx-auto imgProfile mb-2 shadow">
              <img
                src={perfil}
                alt="Bruno Madozzo"
                title="Bruno Madozzo"
                className="shadow"
              />
            </div>
            <p className="sizeText mx-2 mx-xl-5 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, iusto
              provident ratione dolore libero vitae nam, assumenda asperiores
              optio molestias animi eligendi cupiditate natus accusantium.
              Fugiat suscipit veritatis et debitis.
            </p>
          </div>

          <div className="d-flex flex-column gap-3 gap-xl-4 justify-content-center align-items-center">
            <button
              className="btn px-5 rounded-0 btnCV sizeText"
              onClick={handleDownloadPDF}
            >
              Descargar CV <i className="bi bi-download ms-2"></i>
            </button>
            <div className="d-flex gap-4 text-dark">
              <a
                className="social"
                href="https://github.com/brunomry"
                target="_blank"
                title="Github"
              >
                <i className="bi bi-github fs-1 text-dark"></i>
              </a>
              <a
                className="social"
                href="https://www.linkedin.com/in/bruno-madozzo/"
                target="_blank"
                title="LinkedIn"
              >
                <i className="bi bi-linkedin fs-1 text-primary"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Home;
