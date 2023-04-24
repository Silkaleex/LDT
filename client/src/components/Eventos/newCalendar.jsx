import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./newCalendar.css"

const NewCal = () => {
  const [calend, setCalend] = useState({
    title:"",
    calendar:"",
    fecha:"",
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
        <div className="cajaAdmCal">
          <form onSubmit={calendarSubmit}>
            <div className="containerCalAdm">
              <label className="labelCalAdm" htmlFor="title">
                Titulo:
              </label>
              <input
                className="inputCalAdm"
                type="text"
                id="title"
                name="title"
                placeholder="Titulo del Evento"
                onChange={onChangeInput}
                value={calend ? calend.title : ""}
              />
               <label className="labelCalAdm" htmlFor="fecha">
               Fecha del evento:
              </label>
              <input
                className="inputCalAdm"
                type="date"
                id="fecha"
                name="fecha"
                placeholder="Fecha del evento"
                onChange={onChangeInput}
                value={calend ? calend.fecha : ""}
              />

              <label className="labelCalAdm" htmlFor="calendar">
                Descripcion del Evento:
              </label>
              <textarea
                className="inputCalAdm txt-hidden"
                type="textarea"
                id="calendar"
                name="calendar"
                cols="100"
                rows="10"
                placeholder="Descripcion del evento"
                onChange={onChangeInput}
                
                value={calend ? calend.calendar : ""}
              />
              <div className="containerBotonesAdm">
                <button className="botonAddAlmAdm" type="submit">
                  Crear Evento
                </button>
                <Link to="/tCalendar" className="botonVolCalAdm">
                  Volver
                </Link>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="cajaUsCale">
          <form onSubmit={calendarSubmit}>
            <div className="containerCalUs">
              <label className="labelCalUs" htmlFor="title">
                Titulo:
              </label>
              <input
                className="inputCalUs"
                type="text"
                id="title"
                name="title"
                placeholder="Descripcion del Evento"
                onChange={onChangeInput}
                value={calend ? calend.title : ""}
              />
                  <label className="labelCalUs" htmlFor="fecha">
                  Fecha del evento:
              </label>
              <input
                className="inputCalUs"
                type="date"
                id="fecha"
                name="fecha"
                placeholder="Fecha del evento"
                onChange={onChangeInput}
                value={calend ? calend.fecha : ""}
              />
              <label className="labelCalUs" htmlFor="calendar">
                Descripcion del Evento:
              </label>
              <textarea
                className="inputCalUs txt-hidden"
                type="textarea"
                id="calendar"
                name="calendar"
                cols="100"
                rows="10"
                placeholder=" Descripcion del Evento"
                onChange={onChangeInput}
                value={calend ? calend.calendar : ""}
              />
              <div className="containerBotonesUs">
                <button className="botonAddCalUs" type="submit">
                  Crear Evento
                </button>
                <Link to="/tCalendar" className="botonVolCalenUs">
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
