import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./modificacion.css";

const ModifcacionEvt = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  console.log(token);
  const { eventoId } = useParams();
  const Navigate = useNavigate();
  const [evt, setEvt] = useState({
    title:"",
    calendar:"",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setEvt({ ...evt, [name]: value });
    console.log(evt);
  };
  const getEvt = async () => {
    const response = await axios.get(
      `http://localhost:5000/api/calendars/${eventoId}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    console.log(response);
    setEvt(response.data.calendars);
  };
  useEffect(() => {
    getEvt();
  }, []);

  const modificacionSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/api/calendars/${eventoId}`,
        { ...evt }
      );
      console.log(response);
      setTimeout(() => {
        Navigate(`/calendar/${eventoId}`);
      }, 2000);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <>
      {role == 1 ? (
        <div className="cajaAdmCal">
          <form onSubmit={modificacionSubmit}>
            <div className="containerCalAdm">
              <label className="labelCalAdm" htmlFor="titulo">
                Titulo:
              </label>
              <input
                className="inputAdm"
                placeholder="Titulo"
                type="text"
                name="title"
                id="titulo"
                value={evt.title}
                onChange={onChangeInput}
              ></input>
              <label className="labelCalAdm" htmlFor="calendar">
                Evento:
              </label>
              <textarea
                className="tareasAdm inputAdm"
                placeholder="Descripcion de tu Evento"
                type="textarea"
                name="calendar"
                id="calendar"
                value={evt.calendar}
                onChange={onChangeInput}
              ></textarea>
              <div className="containerBotonesAdm">
                <button className="botonModCalAdm">Modificar Evento</button>
                <Link to="/tCalendar" className="botonVolCalAdm">
                  Volver
                </Link>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="cajaUsCal">
          <form onSubmit={modificacionSubmit}>
            <div className="containerCalUs">
              <label className="labelCalUs" htmlFor="titulo">
                Titulo:
              </label>
              <input
                className="inputUs"
                placeholder="Titulo"
                type="text"
                name="title"
                id="titulo"
                value={evt.title}
                onChange={onChangeInput}
              ></input>
              <label className="labelCalUs" htmlFor="calendar">
                Evento:
              </label>
              <textarea
                className="tareasUs inputUs"
                placeholder="Descripcion del Evento"
                type="textarea"
                name="calendar"
                id="calendar"
                cols="100"
                rows="10"
                value={evt.calendar}
                onChange={onChangeInput}
              ></textarea>
              <div className="containerBotonesUs">
                <button className="botonModCalUs">Modificar Evento</button>
                <Link to="/tCalendar" className="botonVolCalUs">
                  Volver
                </Link>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ModifcacionEvt;
