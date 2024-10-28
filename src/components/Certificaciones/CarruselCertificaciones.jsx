import progweb from "../../assets/certificaciones/programacion-web.jpeg";
import reactavanzado from "../../assets/certificaciones/react-avanzado.jpeg";
import fullstackmern from "../../assets/certificaciones/fullstack-mern.jpeg";

const CarruselCertificaciones = () => {
  return (
    <div
    id="animation-carousel"
    className="relative w-[100%] my-10 md:mt-0 md:w-[100%] lg:w-[75%] vsm:h-[40vh] mb:h-[30vh] md:h-[50vh] lg:h-[60vh] 2xl:h-[75vh] 2xl: border-[8px] border-gray-200"
    data-carousel="static"
  >
    <div className="relative h-[100%] overflow-hidden rounded-lg ">
      <div className="hidden duration-0 ease-linear" data-carousel-item="active">
        <img
          src={reactavanzado}
          className="absolute block object-fill w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="Certificación de curso Especialización Frontend en React"
          title="Certificación de curso Especialización Frontend en React"
        />
      </div>

      <div className="hidden duration-0 ease-linear" data-carousel-item>
        <img
          src={fullstackmern}
          className="absolute block object-fill w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="Certificación de curso Desarrollador Full Stack MERN"
          title="Certificación de curso Desarrollador Full Stack MERN"
        />
      </div>
      <div className="hidden duration-0 ease-linear" data-carousel-item>
        <img
          src={progweb}
          className="absolute block object-fill w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="Certificación de curso Programación web"
          title="Certificación de curso Programación web"
        />
      </div>
    </div>

    <button
      type="button"
      className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-prev
    >
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30">
        <svg
          className="w-4 h-4 text-gray-800 rtl:rotate-180"
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
      className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-next
    >
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30">
        <svg
          className="w-4 h-4 text-gray-800 rtl:rotate-180"
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
  )
}

export default CarruselCertificaciones;