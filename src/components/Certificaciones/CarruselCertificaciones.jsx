import { useEffect, useState } from "react";

const CarruselCertificaciones = ({
  setVisible,
  visible,
  certificadosActuales,
  certificadoActual,
}) => {
  const [posicionActual, setPosicionActual] = useState(certificadoActual);

  const closeCarousel = (e) => {
    if (e.target.matches(".noClose")) {
      return;
    }

    if (e.target.matches(".noClose *")) {
      return;
    }
    setVisible(false);
  };

  const handlePrev = () => {
    setPosicionActual((posicion) =>
      posicion === 0 ? certificadosActuales.length - 1 : posicion - 1
    );
  };

  const handleNext = () => {
    setPosicionActual((posicion) =>
      posicion === certificadosActuales.length - 1 ? 0 : posicion + 1
    );
  };

  return (
    <div
      id="animation-carousel"
      className="z-[99] fixed inset-0 h-[100vh] bg-[rgba(0,0,0,0.9)] w-[100%] flex items-center justify-center"
      data-carousel="static"
      onClick={(e) => closeCarousel(e)}
    >
      <div className="relative w-full max-w-[75%] h-[55%] lg:h-[75%] flex justify-center">
        <div
          className="h-[100%] flex justify-center items-center"
          data-carousel-item
        >
          <img
            src={certificadosActuales[posicionActual].img}
            className="noClose block absolute max-w-full object-cover max-h-full border-[5px] md:border-[15px]"
            alt="..."
          />
        </div>
      </div>
      {/* <button
        className="z-[100] absolute hidden md:block top-[20px] mb:top-[100px] right-[70px] md:top-[200px] md:right-[100px] lg:top-4 2xl:right-[250px] 2xl:top-[75px] text-white text-2xl cursor-pointer"
        onClick={(e)=>closeCarousel(e)}
      >
       <i className="bi bi-x text-[20px] xl:text-[50px]"></i>
      </button> */}
      <button
        type="button"
        className="noClose absolute top-0 left-0 z-30 flex items-center justify-center md:w-[100px] lg:w-[200px] 2xl:w-[400px] translate-y-[40vh] lg:translate-y-[30vh] 2xl:translate-y-[40vh] h-[200px] px-4 cursor-pointer group focus:outline-none lg:hover:bg-[rgba(0,0,0,0.3)]"
        data-carousel-prev
        onClick={handlePrev}
      >
        <span className="noClose inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800">
          <svg
            className="noClose w-4 h-4 text-gray-200 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="noClose absolute top-0 end-0 z-30 flex items-center justify-center md:w-[100px] lg:w-[200px] 2xl:w-[400px] translate-y-[40vh] lg:translate-y-[30vh] 2xl:translate-y-[40vh] h-[200px] px-4 cursor-pointer group focus:outline-none lg:hover:bg-[rgba(0,0,0,0.3)]"
        data-carousel-next
        onClick={handleNext}
      >
        <span className="noClose inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800">
          <svg
            className="noClose w-4 h-4 text-gray-200 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default CarruselCertificaciones;
