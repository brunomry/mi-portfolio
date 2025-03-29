import React from 'react'
import { Link } from 'react-router-dom'

const Testimonios = () => {
  return (
    <div>Testimonios
      <p>Lista de testimonios</p>
      <Link to={"/login"}>
        Dejar testimonio
      </Link>
    </div>
  )
}

export default Testimonios