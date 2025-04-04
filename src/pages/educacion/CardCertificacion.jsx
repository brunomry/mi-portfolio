import { useState } from "react";
import CarruselCertificaciones from "./CarruselCertificaciones";
import educacion from "../../helpers/educacion";

const CardCertificacion = ({ formacion, index }) => {
  const [visible, setVisible] = useState(false);
  const [educacionActual, seteducacionActual] = useState(0);

  const openCarousel = (index) => {
    seteducacionActual(index + 1);
    setVisible(true);
  };

  return (
    <>
      <article
        onClick={() => {
          if (formacion.img !== "") {
            openCarousel(index);
          } else {
            window.open(
              "https://github.com/brunomry/trabajos_integradores_isi_UTN-FRT",
              "_blank",
              "noopener"
            );
          }
        }}
        className="cursor-pointer rounded-[6px] cardCertification w-[100%] min-w-[260px]  min-h-[100px]  duration-[0.8s] text-center md:text-start  px-2 md:px-4 xl:px-5 "
        title="clic para ver certificación"
      >
            <div className="h-[100%] flex w-[100%] justify-between">
              <div className="w-[80%]">
              <h3 className="mb-1 font-bold text-[#375c86] md:text-[20px] 2xl:text-[22px]">
                {formacion.titulo}
              </h3>
              <p className="text-gray-600 md:text-[1rem] xl:text-[1.125rem] 2xl:text-[20px]">
                {formacion.org}
              </p>
              <p className="text-gray-500">
                {formacion.fechaInicio} | {formacion.fechaFin}
              </p>
              </div>     
              <div className="flex w-[20%] items-start">
                <button
                  className=" py-2 w-[80%] rounded-[25px] bg-[#fff] text-[#375c86] hover:bg-[#375c86] hover:text-[#fff] border-[1px] border-[#375c86] hover:border-[#fff] text-[16px] md:text-[1rem] xl:text-[1.125rem]"
                  onClick={() => {
                    if (formacion.img !== "") {
                      openCarousel(index);
                    } else {
                      window.open(
                        "https://github.com/brunomry/trabajos_integradores_isi_UTN-FRT",
                        "_blank",
                        "noopener"
                      );
                    }
                  }}
                >
                  {`${
                    formacion.img === "" ? "ver repositorio" : "ver certificación"
                  } `}
                </button>
              </div>
            </div>
      </article>
      {visible && (
        <CarruselCertificaciones
          setVisible={setVisible}
          visible={visible}
          educacionActuales={educacion}
          educacionActual={educacionActual}
        ></CarruselCertificaciones>
      )}
    </>
  );
};

export default CardCertificacion;
