import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './newAlarm.css'

const NewCal = () => {
  const [calend, setCalend] = useState({
    title:"",
    calendar:"",
  });
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    if (calend !== null) {
      setCalend({ ...calend, [name]: value });
    }
    console.log(calend);
  };

  const calendarSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/calendars",
        {
          ...calend,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      console.log(response);
      setCalend(response.data.eventos);

       setTimeout(() => {
         window.location.href = "/tCalendar";
       }, 3000);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      {role == 1 ? (
        <div className="cajaAdmAlm">
          <form onSubmit={calendarSubmit}>
            <div className="containerAlmAdm">
              <label className="labelAlmAdm" htmlFor="title">
                Titulo:
              </label>
              <input
                className="inputAlmAdm"
                type="text"
                id="title"
                name="title"
                placeholder="Titulo"
                onChange={onChangeInput}
                value={calend ? calend.title : ""}
              />

              <label className="labelAlmAdm" htmlFor="calendar">
                Evento:
              </label>
              <input
                className="inputAlmAdm"
                type="text"
                id="calendar"
                name="calendar"
                placeholder="00:00"
                onChange={onChangeInput}
                
                value={calend ? calend.calendar : ""}
              />
              <div className="containerBotonesAdm">
                <button className="botonAddAlmAdm" type="submit">
                  Crear Evento
                </button>
                <Link to="/tCalendar" className="botonVolAlmAdm">
                  Volver
                </Link>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="cajaUsAlm">
          <form onSubmit={calendarSubmit}>
            <div className="containerAlmUs">
              <label className="labelNotUs" htmlFor="title">
                Titulo:
              </label>
              <input
                className="inputUs"
                type="text"
                id="title"
                name="title"
                placeholder="titulo"
                onChange={onChangeInput}
                value={calend ? calend.title : ""}
              />
              <label className="labelNotUs" htmlFor="calendar">
                Evento:
              </label>
              <input
                className="inputUs"
                type="text"
                id="calendar"
                name="calendar"
                placeholder="18:00"
                onChange={onChangeInput}
                value={calend ? calend.calendar : ""}
              />
              <div className="containerBotonesUs">
                <button className="botonAddNotUs" type="submit">
                  Crear Evento
                </button>
                <Link to="/tCalendar" className="botonVolNotUs">
                  Volver
                </Link>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default NewCal;
