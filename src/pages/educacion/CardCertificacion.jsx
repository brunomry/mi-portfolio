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
        className="cursor-pointer rounded-[6px] bg-[#fff] py-8 cardCertification w-[90%] min-w-[260px] max-w-[500px] min-h-[225px] md:h-[150px] xl:h-[270px] duration-[0.8s] text-center md:text-start flex flex-col px-2 md:px-4 xl:px-5 lg:shadow-xl border"
        title="clic para ver certificación"
      >
            <div className="h-[100%] flex flex-col justify-between gap-2">
              <div>
              <h5 className="mb-1 font-bold text-[#444] md:text-[20px] 2xl:text-[22px]">
                {formacion.titulo}
              </h5>
              <p className="text-gray-600 md:text-[1rem] xl:text-[1.125rem] 2xl:text-[20px]">
                {formacion.org}
              </p>
              <p className="text-gray-500">
                {formacion.fechaInicio} | {formacion.fechaFin}
              </p>
              </div>     
              <div className="flex w-[100%] md:justify-end ">
                <button
                  className="px-5 py-[10px] w-[100%] md:w-[50%] xl:w-[45%] rounded-[25px] bg-[#fff] text-[#375c86] hover:bg-[#000] hover:text-[#fff] border-[1px] border-[#375c86] hover:border-[#000] text-[16px] md:text-[1rem] xl:text-[1.125rem]"
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
                  {formacion.img === "" && (
                    <i className="px-2 text-[#375c86] hover:text-[#fff] rounded-[6px] pt-1 bi bi-github sm:text-[20px]"></i>
                  )}
                  {`${
                    formacion.img === "" ? "Repositorio" : "ver certificación"
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
