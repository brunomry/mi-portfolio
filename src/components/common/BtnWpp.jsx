import { handleWpp } from "../../helpers/handleFn";
import IconWpp from "../common/Icons/IconWpp";

const BtnWpp = () => {
  return (
    <button
      onClick={() => handleWpp("Hola, te escribo para solicitar tus servicios de desarrollo web")}
      title="Enviar WhatsApp"
      className="transition-all z-50 duration-300 hover:-translate-y-1 rounded-[100%] md:rounded-[32px] px-2 py-2 fixed btnWppFixed right-[20px] md:right-[40px] bottom-[20px] md:bottom-[40px] btnWppFixed xl:py-2 bg-green-600 text-white border-white shadow-xl xl:text-[18px] font-bold cursor-pointer flex gap-2 items-center"
    >
      <IconWpp></IconWpp>
    </button>
  );
};

export default BtnWpp;
