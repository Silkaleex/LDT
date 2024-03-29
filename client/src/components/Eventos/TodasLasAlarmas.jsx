/* eslint-disable eqeqeq */
import React from "react";
import axios from "axios";
import "./todasLasAlarmas.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";

function TodasLasAlarmas() {
  const [alarma, setAlarms] = useState([]);
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const getAlarms = async () => {
    const response = await axios.get("http://localhost:5000/api/toAlarms", {
      headers: {
        Authorization: token,
      },
    });
    console.log(response);
    setAlarms(response.data.alarmas.alarma);
  };

  useEffect(() => {
    getAlarms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {role == 1 ? (
        <div className="card fondoAdmAl">
          <div className="card-body cajaAdminisAl">
            <div className="cajaPrinAl">
              <h1 className="tituloAlAdm">Todas Las Alarmas</h1>
              {alarma.map((Alarma) => {
                return (
                  <div key={Alarma._id} className="llaveAlm">
                    <div className="cajaDesAlm">
                      <div className="contenidoAlAdm">
                        <h2 className="fs-3 fs3">
                          Descripcion: {Alarma.title}
                        </h2>
                        <h3 className="fs-5 fs5">Hora: {Alarma.alarm}</h3>
                        <h3 className="fs-5 fs5">Fecha: {Alarma.fecha}</h3>
                        <Link
                          to={`/Alarma/${Alarma._id}`}
                          className="enlacesAlAdm"
                        >
                          Acceder a Alarma
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="cajaCirculoAlmAdm">
                <Link to="/newAlm" className="circuloAlmAdm">
                  <BsPencilSquare />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="card fondoUsAl">
          <div className="card-body cajaUsAlarma">
            <div className="cajaPrinAlUs">
              <h1 className="tituloAlUs">Alarmas</h1>
                {alarma.map((Alarma) => {
                  return (
                    <div key={Alarma._id}>
                      <div className="cajaContUs">
                      <div className="contenidoAlUs">
                        <h2 className="fs-3">Descripcion: {Alarma.title}</h2>
                        <h3 className="fs-5">Hora: {Alarma.alarm}</h3>
                        <h2 className="fs-5">Fecha: {Alarma.fecha}</h2>
                        <Link
                          to={`/Alarma/${Alarma._id}`}
                          className="enlacesAlUs"
                        >
                          Acceder a Alarma
                        </Link>
                      </div>
                    </div>
              </div>
                  );
                })}
            <Link to="/newAlm" className="circuloAlmUs">
              <BsPencilSquare />
            </Link>
          </div>
            </div>
        </div>
      )}
    </>
  );
}
export default TodasLasAlarmas;
