import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./newCalendar.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewCal = () => {
  const [calend, setCalend] = useState({
    title: "",
    calendar: "",
    fecha: "",
    tipo: "publico",
    ubicacion: "",
  });

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setCalend((prevCalend) => ({
      ...prevCalend,
      [name]: value,
    }));

    if (name === "fecha") {
      const currentDate = new Date().toISOString().split("T")[0];

      if (value >= currentDate) {
        setCalend((prevCalend) => ({
          ...prevCalend,
          [name]: value,
        }));
      } else {
        toast.error("Por favor, selecciona una fecha actual o futura");
      }
    }
  };

  const calendarSubmit = async (event) => {
    event.preventDefault();
    if (!calend.title || !calend.fecha || !calend.calendar) {
      toast.error("Por favor, completa todos los campos");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/calendars",
        calend,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      console.log(response);
      setCalend({
        title: "",
        calendar: "",
        fecha: "",
        tipo: "publico",
        ubicacion: "",
      });
      setTimeout(() => {
        window.location.href = "/tCalendar";
      }, 3000);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div>
      <ToastContainer />
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
                className="inputCalAdm txt-hidden DescEvt"
                type="textarea"
                id="calendar"
                name="calendar"
                placeholder="Descripcion del evento"
                onChange={onChangeInput}
                value={calend ? calend.calendar : ""}
              />
              <label className="labelCalAdm" htmlFor="ubicacion">
                Ubicacion del evento
              </label>
              <input
                className="inputCalAdm txt-hidden inputUbc"
                type="text"
                name="ubicacion"
                id="ubicacion"
                placeholder="Ubicación del evento ej: Oviedo"
                value={calend.ubicacion}
                onChange={onChangeInput}
              />
              <label className="labelCalAdm" htmlFor="tipo">
                Tipo de Evento:
              </label>
              <select
                className="inputCalAdm"
                id="tipo"
                name="tipo"
                onChange={onChangeInput}
                value={calend.tipo}
              >
                <option value="publico">Público</option>
                <option value="privado">Privado</option>
              </select>

              <div className="containerBotonesAdm">
                <button className="botonAddAlmAdm" type="submit">
                  Crear Evento
                </button>
                <Link to="/usuario" className="botonVolCalAdm">
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
                className="textareaCalendarUs"
                type="textarea"
                id="calendar"
                name="calendar"
                cols="100"
                rows="10"
                placeholder=" Descripcion del Evento"
                onChange={onChangeInput}
                value={calend ? calend.calendar : ""}
              />
              <label className="labelCalUs" htmlFor="ubicacion">
                Ubicacion del evento
              </label>
              <input
                className="inputCalUs txt-hidden inputUbcUs"
                type="text"
                name="ubicacion"
                id="ubicacion"
                placeholder="Ubicación del evento ej: Oviedo"
                value={calend.ubicacion}
                onChange={onChangeInput}
              />
              <label className="labelCalUs" htmlFor="tipo">
                Tipo de Evento:
              </label>
              <select
                className="inputCalUs"
                id="tipo"
                name="tipo"
                onChange={onChangeInput}
                value={calend.tipo}
              >
                <option value="publico">Público</option>
                <option value="privado">Privado</option>
              </select>

              <div className="containerBotonesUs">
                <button to="/usuario" className="botonAddCalUs" type="submit">
                  Crear Evento
                </button>
                <Link to="/usuario" className="botonVolCalenUs">
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
