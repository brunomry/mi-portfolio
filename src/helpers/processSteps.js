import ChatIcon from "../common/icons/ChatIcon";
import CheckIcon from "../common/icons/CheckIcon";
import ComputerIcon from "../common/icons/ComputerIcon";
import DocumentIcon from "../common/icons/DocumentIcon";
import MagnifyingGlassIcon from "../common/icons/MagnifyingGlassIcon";

const processSteps = [
  { id: 1, title: "Consulta inicial", description: "Hablamos sobre tu negocio, objetivos y necesidades para definir qué vale la pena resolver.", deliverable: "Objetivos y necesidades identificados", Icon: ChatIcon },
  { id: 2, title: "Propuesta clara", description: "Defino la solución, funcionalidades, tiempos y presupuesto antes de empezar a construir.", deliverable: "Alcance, tiempos y presupuesto", Icon: DocumentIcon },
  { id: 3, title: "Diseño y desarrollo", description: "Construyo la experiencia acordada y comparto avances para tomar decisiones a tiempo.", deliverable: "Diseño aprobado y producto funcional", Icon: ComputerIcon },
  { id: 4, title: "Revisión y pruebas", description: "Probamos flujos, dispositivos y detalles para entregar una experiencia estable y coherente.", deliverable: "Ajustes y validación final", Icon: MagnifyingGlassIcon },
  { id: 5, title: "Publicación y seguimiento", description: "Publico el proyecto, acompaño la puesta en marcha y dejamos definidos los próximos pasos.", deliverable: "Publicación, soporte y evolución", Icon: CheckIcon },
];

export default processSteps;
