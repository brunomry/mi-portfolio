import servicios from "../../helpers/services.js";
import ServiceCard from "./ServiceCard";

function ServicesSection() {
  return (
    <section
      id="servicios"
      className="py-12 xl:py-20 2xl:py-40 px-4 md:px-8 lg:px-[100px] xl:px-[120px] 2xl:px-[150px] w-full flex flex-col bg-[#fff]"
    >
      <h2 className="font-extrabold text-[24px] md:text-[28px] xl:text-[32px] 2xl:text-[36px] mb-8 text-[#222]">
        Servicios
      </h2>
      <p className="text-[#555] text-sm md:text-base font-light mb-2">
        Soluciones digitales adaptadas a tus necesidades.
      </p>
      <p className="text-[#555] text-sm md:text-base font-light mb-2">
        Creación de experiencias web rápidas, atractivas y optimizadas para tus
        clientes.
      </p>
      <p className="text-[#555] text-sm md:text-base font-light mb-4 md:mb-16">
        Desde el diseño visual hasta la implementación funcional.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 xl:gap-8  w-full">
        {servicios.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
