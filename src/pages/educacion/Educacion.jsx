import CardCertificacion from "./CardCertificacion";
import educacion from "../../helpers/educacion";

const Educacion = () => {
  return (
    <section
      className="flex flex-col items-center justify-center w-[100%] xl:w-[80%] min-h-[100vh] py-[100px] bg-[#fff] gap-2 sm:gap-4  certifications px-2 md:px-5 fondo"
    >
      <h2 className="text-center font-bold text-[25px] xl:text-[30px] 2xl:text-[35px] text-[#333]">
        {" "}
        &lt; Educación /&gt;
      </h2>
      
      <article className="flex flex-col xl:w-[80%]">
      <h3 className=" rounded-[20px] bg-[#375c86] py-2 px-4 text-[#fff] w-[fit-content] text-[20px] xl:text-[25px]">Cursos</h3>
      <div className="flex flex-wrap w-[100%] md:gap-2 containerCertifications h-[250px] mt-8 sm:h-[100%] pb-[20px] ">
        {educacion.filter(e=> e.categoria === "Cursos").map((formacion, index) => (
          <CardCertificacion
            key={formacion.id}
            formacion={formacion}
            index={index}
          ></CardCertificacion>
        ))}
      </div>
      </article>
      <article className="flex flex-col xl:w-[80%]">
      <h3 className=" rounded-[20px] bg-[#375c86] py-2 px-4 text-[#fff] w-[fit-content] text-[20px] xl:text-[25px]">Universidad</h3>
      <div className="flex w-[100%] md:gap-2 md:w-[75%] xl:w-[100%] containerCertifications h-[250px] mt-8 sm:h-[100%] pb-[20px] ">
        {educacion.filter(e=> e.categoria === "Universidad").map((formacion, index) => (
          <CardCertificacion
            key={formacion.id}
            formacion={formacion}
            index={index}
          ></CardCertificacion>
        ))}
      </div>
      </article>
    </section>
  );
};

export default Educacion;
