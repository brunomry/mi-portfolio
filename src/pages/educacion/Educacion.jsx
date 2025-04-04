import CardCertificacion from "./CardCertificacion";
import educacion from "../../helpers/educacion";

const Educacion = () => {
  return (
    <section
      className="flex flex-col items-center justify-center w-[100%] xl:w-[80%] min-h-[100vh] py-[100px] bg-[#fff] gap-2 sm:gap-4  certifications px-2 md:px-5 fondo"
    >
            <div className="w-[80%] rounded-[10px] px-10 py-10 shadow-xl bg-[white]">

      <h1 className="font-bold text-[25px] xl:text-[30px] 2xl:text-[40px] text-[#333]">
        {" "}
        Educación
      </h1>
      
      <article className="flex flex-col xl:w-[100%] mt-5">
      <h2 className=" font-bold w-[fit-content] text-[20px] xl:text-[25px]">Cursos</h2>
      <div className="flex flex-wrap w-[100%] gap-4 containerCertifications h-[250px] mt-8 sm:h-[100%] pb-[20px] ">
        {educacion.filter(e=> e.categoria === "Cursos").map((formacion, index) => (
          <CardCertificacion
            key={formacion.id}
            formacion={formacion}
            index={index}
          ></CardCertificacion>
        ))}
      </div>
      </article>
      <article className="flex flex-col xl:w-[100%]">
      <h2 className=" font-bold w-[fit-content] text-[20px] xl:text-[25px]">Universidad</h2>
      <div className="flex w-[100%] md:w-[75%] xl:w-[100%] containerCertifications h-[250px] mt-8 sm:h-[100%] pb-[20px] ">
        {educacion.filter(e=> e.categoria === "Universidad").map((formacion, index) => (
          <CardCertificacion
            key={formacion.id}
            formacion={formacion}
            index={index}
          ></CardCertificacion>
        ))}
      </div>
      </article>
      </div>
    </section>
  );
};

export default Educacion;
