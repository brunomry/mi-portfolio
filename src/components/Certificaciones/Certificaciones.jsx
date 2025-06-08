import CardCertificacion from "./CardCertificacion";
import certificados from "../helpers/certificados";

const Certificaciones = () => {
  return (
    <article
      className="py-8 px-4 flex flex-col md:py-20 md:px-8 xl:py-40 lg:px-[100px] xl:px-[150px] w-[100%] min-h-[35vh] sm:min-h-[50vh] md:min-h-[50vh] lg:min-h-[40vh] mt-3 lg:mt-0 bg-[#0a0a0a] gap-2 sm:gap-4 certifications px-2 "
      id="certificaciones"
    >
      <h2 className="font-black text-[25px] xl:text-[30px] 2xl:text-[35px] text-[#FAFAFA]">
        {" "}
        Certificaciones
      </h2>
      <div className="flex flex-col w-[100%]  md:flex-row md:gap-8 md:flex-wrap  min-h-[250px] mt-8 sm:h-[100%] pb-[20px]  gap-4 lg:gap-4 xl:gap-12">
        {certificados.map((certificado, index) => (
          <CardCertificacion
            key={certificado.id}
            certificado={certificado}
            index={index}
          ></CardCertificacion>
        ))}
      </div>
    </article>
  );
};

export default Certificaciones;
