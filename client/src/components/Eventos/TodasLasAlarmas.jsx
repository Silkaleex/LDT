import React from 'react'
import './todasLasAlarmas.css'
import { Link } from 'react-router-dom'

function TodasLasAlarmas() {
  return (
    <>
         <nav className="navbar barrNav">
    <div className="container enlacesAlarma">
          <Link className="navbar-brand" to="/tNotas">
            Notas
          </Link>
          <Link className="navbar-brand" to="/tEvento">
            Eventos
          </Link>
          <Link className="navbar-brand" to="/tAlarma">
            Alarmas
          </Link>
        </div>
</nav>
    </>
  )
}

export default TodasLasAlarmas