import { useState } from "react";
import certificates from "../../helpers/certificates.js";
import CertificatesCarrousel from "./CertificatesCarrousel";

const CertificateCard = ({ certificate, index }) => {
  const [visible, setVisible] = useState(false);
  const [currentCertificate, setCurrentCertificate] = useState(0);

  const openCarousel = (index) => {
    setCurrentCertificate(index);
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
              {certificate.startDate} - {certificate.endDate}
            </p>
            <h5 className="font-extrabold text-[#000] text-base xl:text-lg 2xl:text-xl">
              {certificate.title}
            </h5>
            <p className="text-[#777] text-sm ">{certificate.org}</p>
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
        <CertificatesCarrousel
          setVisible={setVisible}
          visible={visible}
          currentsCertificates={certificates}
          currentCertificate={currentCertificate}
        />
      )}
    </>
  );
};

export default CertificateCard;
