import certifications from "../../helpers/certificates.js";
import CertificationCard from "./CertificateCard";

const CertificatesSection = () => {
  return (
    <section
      className="site-section section-tint w-full flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-12"
      id="certificaciones"
    >
      <h2 className="font-black text-[24px] md:text-[28px] xl:text-[32px] 2xl:text-[36px] text-[#222]">
        Certificaciones
      </h2>
      <p className="text-[#555] text-sm md:text-base font-light">
        Estas son las certificaciones obtenidas a lo largo de mi formación académica.
      </p>
      <div className="flex flex-wrap gap-6 justify-start">
        {certifications.map((certificate, index) => (
          <CertificationCard
            key={certificate.id}
            certificate={certificate}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;
