import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import { TbTrash } from "react-icons/tb";
import "./calendar.css";

function Eventos() {
  const { eventoId } = useParams(); 
  const [event, setEvento] = useState([]);
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");
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
    setEvento(response.data.calendars);
  };
  useEffect(() => {
    getEvento();
  }, []);

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
        setTimeout(() => {
          navigate("/usuario");
        });
      } catch (error) {
        console.log(error.response);
      }
    }
  };
  return (
    <>
      {role == 1 ? (
        <div className="fondoEvAdm card">
          <div className="contenedorEvAdm card-body">
            <div className=" card-title descripcionEvAdm">
              <h1>Descripcion del evento:</h1>
              <h5 className="card-text">Evento: {event.title}</h5>
              <h5 className="card-text">Descripción: {event.calendar}</h5>
              <h5 className="card-text">Fecha: {event.fecha}</h5>
              <div className="cajaBtnCalAdm">
                <Link to="/usuario" className="botonEvAdm card-link">
                  Volver
                </Link>
                <Link to={`/modifyCal/${eventoId}`} className="modificarCaAdm card-link">
                  Modificar Eventos
                </Link>
                <button className="botonDelEvAdm card-link" onClick={deleteEvent}>
                  <TbTrash />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="fondoEvUs card">
          <div className="card-body">
            <div className="card-title cartaUser ">
              <h1 className="card-subtitle colorLetraUs">Descripcion del evento:</h1>
              <h2 className=" card-text colorLetraUs">Evento: {event.title}</h2>
              <h2 className=" card-text colorLetraUs">Descripción: {event.calendar}</h2>
              <h2 className=" card-text colorLetraUs">Fecha: {event.fecha}</h2>
              <div className="cajaBtnCal">
                <Link to="/usuario" className="botonVolCalenUs card-link">
                  Volver
                </Link>
                <Link to={`/modifyCal/${eventoId}`} className="botonModCalenUs card-link">
                  Modificar Eventos
                </Link>
                <button className="botonDelAdmCal card-link" onClick={deleteEvent}>
                  <TbTrash />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Eventos;
