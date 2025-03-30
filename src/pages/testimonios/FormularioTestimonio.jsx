import React from "react";
import Alerta from "../../common/Alerta";
import { useState } from "react";
import { useForm } from "react-hook-form";

const FormularioTestimonio = () => {
  const [cargando, setCargando] = useState(false);
  const [exito, setExito] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isSubmitSuccessful },
    reset,
  } = useForm();

  const enviarTestimonio = () => {
    
  };

  return (
    <section className="flex flex-col items-center justify-center w-[100%] xl:w-[80%] min-h-[100vh] py-[100px] bg-[#fff] gap-2 sm:gap-4  certifications px-2 md:px-5 fondo">
      <div className="flex gap-4 items-center">
        <h1 className="text-center font-bold text-[25px] xl:text-[30px] 2xl:text-[35px] text-[#333]">Hola "nombre"</h1>
        <img src="" alt="img" className="max-w-[50px] max-h-[50px] rounded-full"/>
      </div>

      <form
        className="vsm:w-[100%] bg-[#fff] rounded-[8px] shadow-lg max-w-[550px] mx-auto md:border vsm:px-2 vsm:py-3 mb:p-4 md:p-10 flex flex-wrap md:gap-2 lg:gap-4 3xl:text-[1.2rem]"
        onSubmit={handleSubmit(enviarTestimonio)}
      >
        <div className="hidden md:block md:w-full">
          {isSubmitted &&
            Object.keys(errors).some(
              (key) => errors[key]?.type === "required"
            ) && <Alerta mensaje="Completa los campos obligatorios" tipo="error" />}
          {isSubmitSuccessful && exito && <Alerta mensaje="" tipo="success" />}
        </div>
        <div className="mb-2 lg:mb-0 w-[100%]">
          <label
            htmlFor="relacion"
            className="block  font-bold text-[#094067] dark:text-white"
          >
            ¿Dónde o cómo me conociste?
          </label>
          <select
            id="relacion"
            title="¿De dónde me conoces?"
            className=" text-[#094067] block w-full p-3 focus:border-none border-gray-300"
            {...register("relacion", {
              required: "La relación es obligatoria"
            })}
          >
              <option value="">seleccione</option>
              <option value="rc">en RollingCode School</option>
              <option value="utn">en UTN-FRT</option>
              <option value="">como Cliente</option>
            </select>
          {errors.relacion && errors.relacion.type !== "required" && (
            <small className="text-red-400">{errors.relacion?.message}</small>
          )}
        </div>

        <div className="mb-3 lg:mb-0 w-[100%]">
          <label
            htmlFor="message"
            className="block  font-bold text-[#094067] dark:text-white"
          >
            ¿Qué podrías decir sobre mí o cómo fue tu experiencia trabajando conmigo?
          </label>
          <textarea
            id="message"
            rows="4"
            title="Escribe tu comentario sobre mí"
            placeholder="Deja tu comentario aquí"
            className="border-gray-300 text-[#094067] block w-full p-3 focus:border-none"
            {...register("comentario", {
              required: "El comentario es obligatorio",
              minLength: {
                value: 25,
                message: `El comentario debe tener como minimo 25 caracteres`,
              },
              maxLength: {
                value: 500,
                message: `El comentario debe tener como maximo 500 caracteres`,
              },
              pattern: {
                value: /^[\s\S]*$/,
                message: ``,
              },
            })}
          ></textarea>
          {errors.comentario && errors.comentario.type !== "required" && (
            <small className="text-red-400">{errors.comentario?.message}</small>
          )}
        </div>
        <div className="mb-2 lg:mb-0 w-[100%]">
          <label
            htmlFor="linkedin"
            className="block  font-bold text-[#094067] dark:text-white"
          >
            Tu perfil de LinkedIn (opcional)
          </label>
          <input
            type="url"
            id="linkedin"
            title="Pega tu URL de linkedIn"
            className=" text-[#094067] block w-full p-3 focus:border-none border-gray-300 "
            placeholder="URL de linkedin"
            {...register("linkedin", {

            })}
          />
          {errors.linkedin && (
            <small className="text-red-400">{errors.linkedin?.message}</small>
          )}
        </div>
        <div className="mb-2 lg:mb-0 w-[100%]">
          <label
            htmlFor="github"
            className="block  font-bold text-[#094067] dark:text-white"
          >
            Tu perfil de Github (opcional)
          </label>
          <input
            type="url"
            id="github"
            title="Pega tu URL de Github"
            className=" text-[#094067] block w-full p-3 focus:border-none border-gray-300"
            placeholder="URL de github"
            {...register("github", {

            })}
          />
          {errors.github && (
            <small className="text-red-400">{errors.github?.message}</small>
          )}
        </div>
        <div className="flex justify-center w-[100%]">
          <button className="bg-pink-800 rounded-[6px] text-white p-3 vsm:w-[100%] md:w-[50%] uppercase flex gap-3 justify-center items-center">
            {cargando && (
              <span>
                <Spinner></Spinner>
              </span>
            )}
            <span>Confirmar</span>
          </button>
        </div>
        <div className="w-full md:hidden mt-5">
          {isSubmitted &&
            Object.keys(errors).some(
              (key) => errors[key]?.type === "required"
            ) && (
              <Alerta mensaje="Completa los campos obligatorios" tipo="error" />
            )}
          {isSubmitSuccessful && exito && <Alerta mensaje="" tipo="success" />}
        </div>
      </form>
    </section>
  );
};

export default FormularioTestimonio;
