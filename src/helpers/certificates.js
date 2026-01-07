import fullstack from "../assets/certificaciones/fullstack-mern.webp"
import reactavanzado from "../assets/certificaciones/react-avanzado.webp"
import pw from "../assets/certificaciones/programacion-web.webp"

const certificates = [
  {
    id: 9876,
    title: "Especialización Frontend con React",
    org: "RollingCodeSchool",
    startDate: "Mayo 2024",
    endDate: "Septiembre 2024",
    image: reactavanzado
  },
  {
    id: 4321,
    title: "Desarrollador FullStack MERN",
    org: "RollingCodeSchool",
    startDate: "Agosto 2023",
    endDate: "Abril 2024",
    image: fullstack
  },
  {
    id: 8765,
    title: "Programación Web",
    org: "Ministerio de Trabajo, Empleo y Seguridad Social con UTN-FRT",
    startDate: "Mayo 2022",
    endDate: "Julio 2022",
    image: pw
  },
];

export default certificates;
