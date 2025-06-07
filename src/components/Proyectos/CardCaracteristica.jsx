import React from "react";

const CardCaracteristica = ({caracteristica, descripcion}) => {
  return (
    <div className=" rounded-[15px] px-10 py-5 flex flex-col  shadow bg-[white] w-[fit-content]">
      <p className="text-[14px] text-[#787777]">{caracteristica}</p>
      <p className="font-bold text-[#2B7FF7]">
        {descripcion}
      </p>
    </div>
  );
};

export default CardCaracteristica;
