/* eslint-disable eqeqeq */
import axios from "axios";
import "./todosLosCalendar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./EventosPublicos.css";

const EventosPublicos = () => {
  const [events, setEvents] = useState([]);
  const token = localStorage.getItem("token");

  const getEvents = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/calendars`, {
        headers: {
          Authorization: token,
        },
      });
      setEvents(response.data.calendars);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <>
      <div className="fondoPublico">
        <div className="cajaPublico">
          <h1 className="tituloPublico fs-1">Tus Eventos</h1>
          {events.map((evento) => {
            return (
              <div key={evento._id}>
                <div className="cajaContenidoPublico">
                  <h2 className="fs-3">Titulo: {evento.title}</h2>
                  <h3 className="fs-3">Descripción: {evento.calendar}</h3>
                  <h3 className="fs-3">Fecha: {evento.fecha}</h3>
                  <h3 className="fs-3">Evento: {evento.tipo}</h3>
                    <Link to={`/chats/${evento._id}`}>
                      Acceder al chat
                    </Link>
     
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
