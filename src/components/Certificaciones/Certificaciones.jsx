import CardCertificacion from "./CardCertificacion";
import certificados from "../../helpers/certificados";

const Certificaciones = () => {
  return (
    <article
      className="py-12 xl:py-20 2xl:py-40 px-4 md:px-8 lg:px-[100px] xl:px-[120px] 2xl:px-[150px] w-[100%] bg-[#FFF] flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-12"
      id="certificaciones"
    >
      <h2 className="font-black text-[24px] md:text-[28px] xl:text-[32px] 2xl:text-[36px] text-[#1d2a4d]">
        Certificaciones
      </h2>
      <p className="text-[#555] text-sm md:text-base 2xl:text-lg font-light">
        Estas son las certificaciones obtenidas a lo largo de mi formación académica.
      </p>
      <div className="flex flex-wrap gap-6 justify-start">
        {certificados.map((certificado, index) => (
          <CardCertificacion
            key={certificado.id}
            certificado={certificado}
            index={index}
          />
        ))}
      </div>
    </article>
  );
};

export default Certificaciones;
