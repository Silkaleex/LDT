import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./modificacion.css";

const ModifcacionEvt = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const { eventoId } = useParams();
  const Navigate = useNavigate();
  const [evt, setEvt] = useState({
    calendar: "",
    fecha: "",
    tipo: "",
    ubicacion: "",
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
        <div className="cajaAdmCa">
          <form onSubmit={modificacionSubmit}>
            <div className="containerCalAdm">
              <label className="labelCalAdm" htmlFor="calendar">
                Evento:
              </label>
              <textarea
                className="tareasAdm txtCaAdm"
                type="textarea"
                name="calendar"
                id="calendar"
                value={evt.calendar}
                onChange={onChangeInput}
              ></textarea>
              <label className="labelCalAdm" htmlFor="fecha">
                Fecha del Evento:
              </label>
              <input
                className="tareasAdm inputAdm"
                type="date"
                name="fecha"
                id="fecha"
                value={evt.fecha}
                onChange={onChangeInput}
              />
              <label className="labelCalAdm" htmlFor="ubicacion">
                Ubicacion del evento
              </label>
              <input
                className="tareasAdm inputAdm"
                type="textarea"
                name="ubicacion"
                id="ubicacion"
                value={evt.ubicacion}
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
                value={evt.tipo}
              >
                <option value="publico">Público</option>
                <option value="privado">Privado</option>
              </select>
              <div className="containerBotonesAdm">
                <button className="botonModCalAdm">Modificar Evento</button>
                <Link to="/usuario" className="botonVolCalAdm">
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
              <label className="labelCalUs" htmlFor="calendar">
                Evento:
              </label>
              <textarea
                className="tareasUs inputUs Ev-Ub"
                placeholder="Descripcion de tu Evento"
                type="textarea"
                name="calendar"
                id="calendar"
                value={evt.calendar}
                onChange={onChangeInput}
              ></textarea>
              <label className="labelCalUs" htmlFor="fecha">
                Fecha Evento:
              </label>
              <input
                className="tareasUs inputUs"
                placeholder="Descripcion del Evento"
                type="date"
                name="fecha"
                id="fecha"
                value={evt.fecha}
                onChange={onChangeInput}
              />{" "}
              <label className="labelCalUs" htmlFor="ubicacion">
                Ubicacion del evento
              </label>
              <input
                className="tareasUs inputUs Ev-Ub"
                type="textarea"
                name="ubicacion"
                id="ubicacion"
                value={evt.ubicacion}
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
                value={evt.tipo}
              >
                <option value="publico">Público</option>
                <option value="privado">Privado</option>
              </select>
              <div className="containerBotonesUs">
                <button className="botonModCalUs">Modificar Evento</button>
                <Link to="/usuario" className="botonVolCalUs">
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
