import React from "react";
import ProcessStep from "./ProcessStep";
import processSteps from "../../helpers/processSteps";

const ProcessSection = () => (
  <section
    className="w-[100%] py-12 xl:py-20 2xl:py-40 px-4 md:px-8 lg:px-[100px] xl:px-[120px] 2xl:px-[150px] bg-[#FAFAFA] text-[#1d2a4d] flex flex-col gap-4 md:gap-6 xl:gap-12"
    id="proceso"
  >
      <h2 className="font-black text-[24px] md:text-[28px] xl:text-[32px] 2xl:text-[36px] text-[#000]">
        Mi método de trabajo
      </h2>
      <p className="text-[#555] text-sm md:text-base font-light">
        Te muestro cómo desarrollo tu proyecto paso a paso, con
        transparencia, control y soluciones adaptadas a tu negocio.
      </p>
      <ol className="flex flex-wrap lg:gap-4 w-full">
        {processSteps.map((step, index) => (
          <ProcessStep
            key={step.id}
            stepNumber={index + 1}
            title={step.title}
            description={step.description}
            Icon={step.Icon}
            isLast={index === processSteps.length - 1}
          />
        ))}
      </ol>
  </section>
);

export default ProcessSection;
