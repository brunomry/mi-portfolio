import CardCertificacion from "./CardCertificacion";
import certificados from "../helpers/certificados";
import CarruselCertificaciones from "./CarruselCertificaciones";

const Certificaciones = () => {
  return (
    <article
      className="flex flex-col items-center w-[100%] min-h-[35vh] sm:min-h-[100vh] md:min-h-[50vh] lg:min-h-[50vh] mt-3 lg:mt-0 bg-[#fff] gap-2 sm:gap-4 xl:py-5 certifications px-2 md:px-5 xl:px-[50px]"
      id="certificaciones"
    >
      <h2 className="text-center font-bold text-[25px] xl:text-[30px] text-[#333]">
        {" "}
        &lt; Certificaciones /&gt;
      </h2>
      <div className="flex w-[100%] md:flex-col xl:flex-row md:gap-2 md:w-[75%] xl:w-[100%] 2xl:w-[75%] containerCertifications h-[250px] mt-8 sm:h-[100%] pb-[20px] md:justify-center md:items-center gap-3 lg:gap-4 ">
        {certificados.map((certificado) => (
          <CardCertificacion
            key={certificado.id}
            certificado={certificado}
          ></CardCertificacion>
        ))}
      </div>
     <CarruselCertificaciones></CarruselCertificaciones>
    </article>
  );
};

export default Certificaciones;
