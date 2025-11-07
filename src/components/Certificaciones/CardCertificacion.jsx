import { useState } from "react";
import CarruselCertificaciones from "./CarruselCertificaciones";
import certificados from "../../helpers/certificados";

const CardCertificacion = ({ certificado, index }) => {
  const [visible, setVisible] = useState(false);
  const [certificadoActual, setCertificadoActual] = useState(0);

  const openCarousel = (index) => {
    setCertificadoActual(index);
    setVisible(true);
  };

  return (
    <>
      <div
        onClick={() => openCarousel(index)}
        className="cursor-pointer rounded-xl bg-white shadow-md hover:shadow-xl 
                   transition-all duration-500 ease-in-out p-6 flex flex-col justify-between
                   flex-[1_1_280px] w-[100%] min-w-[300px] md:max-w-[340px] lg:max-w-[380px] min-h-[200px] "
        title="Clic para ver certificación"
      >
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-2">
            <p className="text-[#555] text-sm md:text-base">
              {certificado.fechaInicio} - {certificado.fechaFin}
            </p>
            <h5 className="font-extrabold text-[#000] text-base xl:text-lg 2xl:text-xl">
              {certificado.titulo}
            </h5>
            <p className="text-[#777] text-sm ">
              {certificado.org}
            </p>
          </div>

          <button
            onClick={() => openCarousel(index)}
            className="mt-4 px-4 py-2 rounded-lg bg-[#000]  hover:bg-[#292929]  text-white font-medium 
                       text-sm md:text-base transition-colors shadow-md w-full"
          >
            Ver Certificación
          </button>
        </div>
      </div>
      {visible && (
        <CarruselCertificaciones
          setVisible={setVisible}
          visible={visible}
          certificadosActuales={certificados}
          certificadoActual={certificadoActual}
        />
      )}
    </>
  );
};

export default CardCertificacion;
