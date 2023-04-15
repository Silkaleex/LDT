/* eslint-disable eqeqeq */
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./Notas.css";

function Notas() {
  const { notaId } = useParams();
  const [nota, setNota] = useState({});
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

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

  const deleteNota = async (e) => {
    e.preventDefault();
    let opcion = window.confirm("¿Estas seguro de borrar la nota?");
    if (opcion == true) {
      try {
        const response = await axios.delete(
          `http://localhost:5000/api/notas/${notaId}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        console.log(response);
        setTimeout(() => {
          // window.location.href = "/usuario" nos refresca la pagina, es recomendable usarlo para actualizar un estado
          navigate("/tNotas");
        });
      } catch (error) {
        console.log(error.response);
      }
    }
  };
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
              <div className="cajaBotonesAdm">
              <Link to="/tNotas" className="botonAdm">
                Volver
              </Link>
              <Link to={`/modify/${notaId}`} className="modificarNoAdm">Modificar Nota</Link>
              <button className="botonDelAdm" onClick={deleteNota}>Eliminar Nota</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="fondoNotaUs">
          <div className="contenedorNotaUs">
            <div className="descripcionNotaUs">
              <h1>Descripcion de la nota:</h1>
              <h2>{nota.title}</h2>
              <h5>{nota.fecha}</h5>
              <h5>{nota.tareas}</h5>
              <div className="cajaBotonesUs">
              <Link to="/tNotas" className="botonUs">
                Volver
              </Link>
              <Link to={`/modify/${notaId}`} className="modificarNoUs">Modificar Nota</Link>
              <button className="botonNotaUs" onClick={deleteNota}>Eliminar Nota</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Notas;
