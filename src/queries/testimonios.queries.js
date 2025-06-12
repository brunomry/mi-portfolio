const URL_CREATE_TESTIMONIO = import.meta.env.VITE_API_CREATE_TESTIMONIO;
const URL_TESTIMONIOS = import.meta.env.VITE_API_TESTIMONIOS;

export const crearTestimonio = async (testimonio) => {
  try {
    const respuesta = await fetch(URL_CREATE_TESTIMONIO, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testimonio),
    });

    return respuesta.json();
  } catch (error) {
    console.error(error);
  }
};

export const obtenerTestimonios = async () => {
  try {
    const respuesta = await fetch(URL_TESTIMONIOS);
    const testimonios = await respuesta.json();
    return testimonios;
  } catch (error) {
    console.error(error);
  }
};
