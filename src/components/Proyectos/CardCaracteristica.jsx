import React from "react";

const CardCaracteristica = ({caracteristica, descripcion}) => {
  return (
    <div className=" rounded-[15px] md:px-10 md:py-5 flex flex-col  md:shadow bg-[white] w-[fit-content]">
      <p className="text-[12px] md:text-[14px] text-[#787777]">{caracteristica}</p>
      <p className="font-bold text-[14px] md:text-[16px] text-[#000]">
        {descripcion}
      </p>
    </div>
  );
};

export default CardCaracteristica;
