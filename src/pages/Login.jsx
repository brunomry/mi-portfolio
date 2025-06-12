import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../services/firebase.js";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navegacion = useNavigate();

  const handleSubmit = async (e) => {
    try {
      const provider = new GoogleAuthProvider();

      const respuesta = await signInWithPopup(auth, provider);

      if (!respuesta.user) throw new Error("Error al loguear con google");

      const usuario = {
        nombre: respuesta.user.displayName,
        img: respuesta.user.photoURL,
      };

      navegacion("/formulario");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center w-[100%] bg-[#fafafa] min-h-[100vh] py-[100px] gap-2 sm:gap-4  certifications px-2 md:px-[100px]">
      <div className=" rounded-[10px] px-20 py-10 flex flex-col gap-4 bg-white">
        <Link
          className="w-[100%] flex justify-start items-center gap-2 "
          to={"/"}
        >
          <i class="bi bi-arrow-left text-[20px] text-[#787777]"></i>
          <span className="text-[#787777]">Regresar</span>
        </Link>
        <h1 className="mb-8 text-center font-black text-[25px] xl:text-[30px] text-[#333]">
          Inicia sesión con tu cuenta de Google para dejar tu comentario
        </h1>
        <div className="flex justify-center w-[100%]">
          <button
            className="flex items-center justify-center px-5 py-[8px] w-[300px] rounded-[45px] hover:bg-gray-100 border-[1px] border-[text-[#787777]] text-[16px] md:text-[1rem]  gap-4"
            title="Ver más información del proyecto"
            onClick={handleSubmit}
          >
            <i className="text-2xl bi bi-google text-red-600 hover:text-[#fff]"></i>{" "}
            <span className="text-[#787777]">Ingresar con Google</span>
          </button>
        </div>
        <p className="text-center text-[#787777] text-[14px] mt-10">
          Bruno Madozzo - Desarrollador web
        </p>
      </div>
    </section>
  );
};

export default Login;
