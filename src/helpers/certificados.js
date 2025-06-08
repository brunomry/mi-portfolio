import fullstack from "../assets/certificaciones/fullstack-mern.jpeg"
import reactavanzado from "../assets/certificaciones/react-avanzado.jpeg"
import pw from "../assets/certificaciones/programacion-web.jpeg"

const certificados = [
  {
    id: 9876,
    titulo: "Especialización Frontend con React",
    org: "RollingCodeSchool",
    fechaInicio: "Mayo 2024",
    fechaFin: "Agosto 2024",
    img: reactavanzado
  },
  {
    id: 4321,
    titulo: "Desarrollador FullStack MERN",
    org: "RollingCodeSchool",
    fechaInicio: "Agosto 2023",
    fechaFin: "Abril 2024",
    img: fullstack
  },
  {
    id: 8765,
    titulo: "Programación Web",
    org: "Ministerio de Trabajo, Empleo y Seguridad Social con UTN-FRT",
    fechaInicio: "Mayo 2022",
    fechaFin: "Julio 2022",
    img: pw
  },
];

export default certificados;
