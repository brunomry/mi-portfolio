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

      console.log(respuesta.user)
       const usuario = {
        nombre: respuesta.user.displayName,
          email: respuesta.user.email,
          img: respuesta.user.photoURL
        };
      
      navegacion("/formtestimonio");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div onClick={handleSubmit}>
      Login
      <button>Ingresar con google</button>
    </div>
  );
};

export default Login;
