/* eslint-disable eqeqeq */
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./evento.css";

function Eventos() {
  const { eventoId } = useParams(); //Se a creado en la seccion en pages en evento/:eventoID
  const [event, setEvento] = useState({});
  const token = localStorage.getItem("token");
  // const role = localStorage.getItem("role");
  const navigate = useNavigate();

  const getEvento = async () => {
    const response = await axios.get(
      `http://localhost:5000/api/calendars/${eventoId}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    console.log(response);
    setEvento(response.data.calendars);
  };
  useEffect(() => {
    getEvento();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(event);

  const deleteEvent = async (e) => {
    e.preventDefault();
    let opcion = window.confirm("¿Estas seguro de borrar el Evento?");
    if (opcion == true) {
      try {
        const response = await axios.delete(
          `http://localhost:5000/api/calendars/${eventoId}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        console.log(response);
        setTimeout(() => {
          // window.location.href = "/usuario" nos refresca la pagina, es recomendable usarlo para actualizar un estado
          navigate("/tEvento");
        });
      } catch (error) {
        console.log(error.response);
      }
    }
  };
  return (
    <>
      <div className="fondoEvAdm">
        <div className="contenedorEvAdm">
          <div className="descripcionEvAdm">
            <h1>Descripcion del evento:</h1>
            <h2>{event.title}</h2>
            <h2>{event.calendar}</h2>
            <Link to="/tEvento" className="botonEvAdm">
              Volver
            </Link>
            <button className="botonDelEvAdm" onClick={deleteEvent}>
              Eliminar Evento
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Eventos;
