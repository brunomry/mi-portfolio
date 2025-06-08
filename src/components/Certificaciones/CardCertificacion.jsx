import { useState } from "react";
import CarruselCertificaciones from "./CarruselCertificaciones";
import certificados from "../helpers/certificados";

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
        className="cursor-pointer rounded-[6px] bg-[#0a0a0a] py-8 cardCertification w-[100%] min-w-[200px] md:max-w-[300px] lg:max-w-[400px] h-[175px] duration-[0.8s] border-[1px] text-center md:text-start flex flex-col px-2 md:px-4 xl:px-5 hover:border-[#2B7FF7]"
        title="clic para ver certificación"
      >
        <div className="flex flex-col justify-between rounded-[4px] min-h-[100%] h-[fit-content]">
          <div className="flex flex-col justify-between gap-4">
            <div className=" flex flex-col">
              <p className="text-[#787777] text-[14px]">
                {certificado.fechaInicio} - {certificado.fechaFin}
              </p>
              <h5 className="mb-1 font-black text-[#2B7FF7] md:text-[18px]">
                {certificado.titulo}
              </h5>
              <p className="text-gray-600 md:text-[1rem] ">{certificado.org}</p>
            </div>
          </div>
        </div>
      </div>
      {visible && (
        <CarruselCertificaciones
          setVisible={setVisible}
          visible={visible}
          certificadosActuales={certificados}
          certificadoActual={certificadoActual}
        ></CarruselCertificaciones>
      )}
    </>
  );
};

export default CardCertificacion;
