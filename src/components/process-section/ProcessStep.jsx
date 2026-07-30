const ProcessStep = ({ stepNumber, title, description, Icon, isLast }) => (
  <article className="relative flex flex-col md:flex-row items-start md:items-center mb-6">
    <div className="flex-shrink-0 z-10">
      <div className="w-12 h-12 flex items-center justify-center bg-[#0b6e69] text-white rounded-2xl text-sm font-bold shadow-md">
        0{stepNumber}
      </div>
    </div>
    <div
      className="surface-card bg-white p-6 mt-4 md:mt-0 md:ml-[-12px] md:pl-8
                    w-full
                    h-auto sm:h-[200px] md:h-[150px] lg:h-[150px] xl:h-[170px]
                    flex flex-col"
    >
      <div className="flex items-center mb-3">
        <div className="ml-2 md:ml-0 w-10 h-10 flex items-center justify-center bg-[#e8f4f2] text-[#0b6e69] rounded-xl mr-3">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-lg md:text-xl font-semibold text-gray-800">
          {title}
        </h3>
      </div>
      <p className="text-[#555] text-sm font-light leading-relaxed">
        {description}
      </p>
    </div>
  </article>
);

export default ProcessStep;
