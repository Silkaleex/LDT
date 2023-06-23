/* eslint-disable eqeqeq */
import axios from "axios";
import "./todosLosCalendar.css";
import { useState, useEffect } from "react";
import "./EventosPublicos.css";

const EventosPublicos = () => {
  const [event, setEvent] = useState([]);
  const token = localStorage.getItem("token");

  const getEvent = async () => {
    const response = await axios.get("http://localhost:5000/api/toCalen", {
      headers: {
        Authorization: token,
      },
    });
    console.log(response);
    setEvent(response.data.eventos.calendar);
  };

  useEffect(() => {
    getEvent();
  }, []);
  return (
    <>
      <div className="fondoPublico">
        <div className="cajaPublico">
          <h1 className="tituloPublico fs-1">Tus Eventos</h1>
          {event.map((evento) => {
            return (
              <div key={evento._id}>
                <div className="cajaContenidoPublico">
                  <h2 className="fs-3">Titulo: {evento.title}</h2>
                  <h3 className="fs-3">Descripción: {evento.calendar}</h3>
                  <h3 className="fs-3">Fecha: {evento.fecha}</h3>
                  <h3 className="fs-3">Evento: {evento.isPublic}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default EventosPublicos;
