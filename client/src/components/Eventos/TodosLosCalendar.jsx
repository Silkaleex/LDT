/* eslint-disable eqeqeq */
import React from "react";
import axios from "axios";
import "./todosLosCalendar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgNotes } from "react-icons/cg";
const TodosLosEventos = () => {
  const [event, setEvent] = useState([]);
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {role == 1 ? (
        <div className="fondoAdmCal">
          <div className="cajaAdminisCal">
            <h1 className="tAdminCal">Tus Eventos</h1>
            {event.map((evento) => {
              return (
                <div key={evento._id}>
                  <div className="card cartaEventoCal">
                    <div className="card-body cartaCalAdm">
                      <h2 className="fs-1">Titulo: {evento.title}</h2>
                      <h3 className="fs-4">Evento: {evento.calendar}</h3>
                      <h3 className="fs-4">Fecha: {evento.fecha}</h3>
                      <Link
                        to={`/calendar/${evento._id}`}
                        className="card-link accederCal"
                      >
                        Acceder a Evento
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="cajaCirculoCalAdm">
              <Link to="/newCal" className="circuloCalAdm">
                <CgNotes />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="fondoUsCalendar">
          <div className="cajaUsCalen">
            <h1 className="tusCal">Tus Eventos</h1>
            {event.map((evento) => {
              return (
                <div key={evento._id}>
                  <div className="card cartaCalUs">
                    <div className="card-body letraCalUs">
                      <h2 className="fs-1">{evento.title}</h2>
                      <h3 className="fs-4">{evento.calendar}</h3>
                      <h3 className="fs-4">{evento.fecha}</h3>
                      <Link
                        to={`/calendar/${evento._id}`}
                        className="card-link accederCalUs"
                      >
                        Acceder a Eventos
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cajaBtnCalendar">
            <Link to="/newCal" className="circuloCalUs">
              <CgNotes />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default TodosLosEventos;
