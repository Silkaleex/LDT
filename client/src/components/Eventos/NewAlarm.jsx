import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './newAlarm.css'
const NewAlm = () => {
  const [alarma, setAlarma] = useState({
    title: "",
    alarm: "",
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

      console.log(response);
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
        <div className="cajaAdmAlm">
          <form onSubmit={almSubmit}>
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
                value={alarma ? alarma.title : ""}
              />

              <label className="labelAlmAdm" htmlFor="alarm">
                Alarma:
              </label>
              <input
                className="inputAlmAdm"
                type="text"
                id="alarm"
                name="alarm"
                placeholder="00:00"
                onChange={onChangeInput}
                
                value={alarma ? alarma.alarm : ""}
              />
              <div className="containerBotonesAdm">
                <button className="botonAddAlmAdm" type="submit">
                  Crear Alarma
                </button>
                <Link to="/tAlarma" className="botonVolAlmAdm">
                  Volver
                </Link>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="cajaUsAlm">
          <form onSubmit={almSubmit}>
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
                value={alarma ? alarma.title : ""}
              />
              <label className="labelNotUs" htmlFor="alarm">
                Alarma:
              </label>
              <input
                className="inputUs"
                type="text"
                id="alarm"
                name="alarm"
                placeholder="18:00"
                onChange={onChangeInput}
                value={alarma ? alarma.alarm : ""}
              />
              <div className="containerBotonesUs">
                <button className="botonAddNotUs" type="submit">
                  Crear Alarma
                </button>
                <Link to="/tAlarma" className="botonVolNotUs">
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
