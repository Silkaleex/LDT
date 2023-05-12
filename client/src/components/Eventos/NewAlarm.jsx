import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './newAlarm.css'

const NewAlm = () => {
  const [alarma, setAlarma] = useState({
    title:"",
    alarm: "",
    fecha:""
  });
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    if (alarma !== null) {
      setAlarma({ ...alarma, [name]: value });
    }
    console.log(alarma);
  };

  const almSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/alarms",
        {
          ...alarma,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
       setAlarma(response.data.alarmas);

       setTimeout(() => {
         window.location.href = "/tAlarma";
       }, 3000);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      {role == 1 ? (
        <div className="cajaAdmAlarma">
          <form onSubmit={almSubmit}>
            <div className="containerAlmAdm">
              <label className="labelAlmAdm" htmlFor="title">
                Titulo de la Alarma:
              </label>
              <input
                className="inputAlmAdm"
                type="text"
                id="title"
                name="title"
                placeholder="Titulo de la Alarma"
                onChange={onChangeInput}
                value={alarma ? alarma.title : ""}
              />

              <label className="labelAlmAdm" htmlFor="fecha">
                Fecha de la Alarma:
              </label>
              <input
                className="inputAlmAdm"
                type="date"
                id="fecha"
                name="fecha"
                onChange={onChangeInput}
                value={alarma ? alarma.fecha : ""}
              />

              <label className="labelAlmAdm" htmlFor="alarm">
                Hora de la Alarma:
              </label>
              <input
                className="inputAlmAdm"
                type="text"
                id="alarm"
                name="alarm"
                placeholder="Hora del aviso"
                onChange={onChangeInput}
                
                value={alarma ? alarma.alarm : ""}
              />
              <div className="containerBotonesAdm">
                <button className="botonAddAlmAdm" type="submit">
                  Crear Alarma
                </button>
                <Link to="/usuario" className="botonVolAlmAdm">
                  Volver
                </Link>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="cajaUsAl">
          <form onSubmit={almSubmit}>
            <div className="containerAlmUs">
            <label className="labelAlmUs" htmlFor="title">
                Titulo de la Alarma:
              </label>
              <input
                className="inputAlmUs"
                type="text"
                id="title"
                name="title"
                placeholder="Titulo de la Alarma"
                onChange={onChangeInput}
                value={alarma ? alarma.title : ""}
              />
            <label className="labelAlmUs" htmlFor="fecha">
                Fecha de la Alarma:
              </label>
              <input
                className="inputAlmUs"
                type="date"
                id="fecha"
                name="fecha"
                onChange={onChangeInput}
                value={alarma ? alarma.fecha : ""}
              />
              <label className="labelAlmUs" htmlFor="alarm">
                Hora de la Alarma:
              </label>
              <input
                className="inputAlmUs"
                type="text"
                id="alarm"
                name="alarm"
                placeholder="Hora del Aviso"
                onChange={onChangeInput}
                value={alarma ? alarma.alarm : ""}
              />
              <div className="containerBotonesUs">
                <button className="botonAddAlmUs" type="submit">
                  Crear Alarma
                </button>
                <Link to="/usuario" className="botonVolAlmUs">
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

export default NewAlm;
