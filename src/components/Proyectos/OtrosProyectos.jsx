import React from 'react'
import { Link } from 'react-router-dom'
import CardProyecto from './CardProyecto'
import proyectos from '../helpers/proyectos'

const OtrosProyectos = () => {
  return (
    <article
      className="pt-10 pb-20 md:py-20 md:px-8 xl:py-40 lg:px-[100px] xl:px-[150px] flex flex-col gap-3 xl:gap-4 px-3 w-[100%] bg-[#fff] md:min-h-[100vh] lg:min-h-[60vh]"
    >
      <h2 className="font-black text-[25px] xl:text-[30px] 2xl:text-[35px] text-[#333] md:mb-8">
        Todos los Proyectos
      </h2>
      <div className="px-4 flex flex-col md:flex-row sm:flex-wrap min-h-[450px] w-[100%]  sm:h-[100%] sm:pb-[50px]  gap-8 2xl:gap-20">
        {proyectos.map((proyecto) => (
          <CardProyecto key={proyecto.id} proyecto={proyecto}></CardProyecto>
        ))}
      </div>
    </article>
  )
}

export default OtrosProyectos