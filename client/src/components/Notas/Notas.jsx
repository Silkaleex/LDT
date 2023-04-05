/* eslint-disable eqeqeq */
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "./Notas.css"
function Notas() {
  const { notaId } = useParams();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const [nota, setNota] = useState({});

  const getNotas = async () => {
    const response = await axios.get(
      `http://localhost:5000/api/notas/${notaId}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    console.log(response.data.notas);
    setNota(response.data.notas);
  };
  useEffect(() => {
    getNotas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(nota);

  return (
    <>
       {role == 1 ? (
    <div className="fondoNotaAdm">
      <div className="contenedorNotaAdm">
        <div className="descripcionNotaAdm">
          <h1>Descripcion de la nota:</h1>
          <h2>{nota.title}</h2>
          <h5>{nota.fecha}</h5>
          <h5>{nota.tareas}</h5>
          <Link to='/tNotas' className="botonAdm">Volver</Link>
        </div>
      </div>
      </div>
       ):(
        <div className="fondoNotaUs">
      <div className="contenedorNotaUs">
        <div className="descripcionNotaUs">
          <h1>Descripcion de la nota:</h1>
          <h2>{nota.title}</h2>
          <h5>{nota.fecha}</h5>
          <h5>{nota.tareas}</h5>
          <Link to='/tNotas' className="botonUs">Volver</Link>
        </div>
      </div>
      </div>
       )}
    </>
  );
}

export default Notas;
