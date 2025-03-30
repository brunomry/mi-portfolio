import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../services/firebase.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navegacion = useNavigate();

  const handleSubmit = async (e) => {
    try {
      const provider = new GoogleAuthProvider();
      const respuesta = await signInWithPopup(auth, provider);

      if (!respuesta.user) throw new Error("Error al loguear con google");

      const usuario = {
        nombre: respuesta.user.displayName,
        uid: respuesta.user.uid,
        img: respuesta.user.photoURL,
      };

      navegacion("/formtestimonio");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center w-[100%] xl:w-[80%] min-h-[100vh] py-[100px] bg-[#fff] gap-2 sm:gap-4  certifications px-2 md:px-5 fondo">
      <h1 className="text-center font-bold text-[25px] xl:text-[30px] 2xl:text-[35px] text-[#333]">
        Inicia sesión con tu cuenta de Google
      </h1>
      <button
        className="flex items-center justify-center px-5 py-[8px] 2xl:py-[10px] w-[250px] rounded-[45px] hover:bg-gray-100 border-[1px] text-[16px] md:text-[1rem] xl:text-[1.125rem] gap-4"
        title="Ver más información del proyecto"
        onClick={handleSubmit}
      >
        <i className="text-2xl bi bi-google text-red-600 hover:text-[#fff]"></i>{" "}
        <span>Ingresar con Google</span>
      </button>
    </section>
  );
};

export default Login;
