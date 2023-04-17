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
        <div className="fondoAdmEv">
          <div className="cajaAdminis">
            <h1 className="tAdminEv">Tus Eventos</h1>
            {event.map((evento) => {
              return (
                <div key={evento._id}>
                  <div className="card cartaEvento">
                    <div className="card-body cartaEvDm">
                      <h2>{evento.title}</h2>
                      <h3>{evento.calendar}</h3>

                      <Link
                        to={`/evento/${evento._id}`}
                        className="card-link accederEvento"
                      >
                        Acceder a Evento
                      </Link>
                    </div>
                  </div>
                  <div className="cajaCirculoAlmAdm">
              <Link to="/newCal" className="circuloAlmAdm">
                <CgNotes />
              </Link>
            </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="fondoUsEv">
          <div className="cajaUsEv">
            <h1 className="tUsEv">Tus Eventos</h1>
            {event.map((evento) => {
              return (
                <div key={evento._id}>
                  <div className="card cartaEventoUs">
                    <div className="card-body cartaEvUs">
                      <h2>{evento.title}</h2>
                      <h3>{evento.calendar}</h3>
                      <div>
                        <Link
                          to={`/calendar/${evento._id}`}
                          className="card-link accederEventoUS"
                        >
                          Acceder a Eventos
                        </Link>
                      </div>
                    </div>
                    <div className="cajaCirculoAlmAdm">
              <Link to="/newCal" className="circuloAlmAdm">
                <CgNotes />
              </Link>
            </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default TodosLosEventos;
