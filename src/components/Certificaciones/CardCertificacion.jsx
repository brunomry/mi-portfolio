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
        className="cursor-pointer rounded-[6px] bg-[#fff] py-8 cardCertification w-[100%] min-w-[260px] min-h-[225px] md:h-[150px] xl:h-[250px] duration-[0.8s] border-[1px] border-s-[#000] border-s-[5px] text-center md:text-start flex flex-col px-2 md:px-4 xl:px-5 lg:hover:shadow-xl"
        title="clic para ver certificación"
      >
        <div className="flex flex-col justify-between rounded-[4px] min-h-[100%]">
          <div className="flex flex-col ">
            <div className="min-h-[120px] xl:min-h-[150px] flex flex-col">
              <h5 className="mb-1 font-bold text-[#444] md:text-[20px]">
                {certificado.titulo}
              </h5>
              <p className="text-gray-600 md:text-[1rem] xl:text-[1.125rem] ">
                {certificado.org}
              </p>
              <p className="text-gray-500">
                {certificado.fechaInicio} | {certificado.fechaFin}
              </p>
            </div>
            <div className="flex w-[100%] md:justify-end">
              <button
                className="px-5 py-[10px] w-[100%] md:w-[50%] xl:w-[100%] rounded-[25px] bg-[#fff] text-[#222] hover:bg-[#000] hover:text-[#fff] border-[#222] border-[1px] hover:border-[#000] text-[16px] md:text-[1rem] xl:text-[1.125rem]"
                onClick={() => openCarousel(index)}
              >
                ver certificación
              </button>
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
