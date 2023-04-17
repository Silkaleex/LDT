/* eslint-disable eqeqeq */
import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import './alarmas.css'
function Alarmas() {
    const { alarmaId } = useParams();
    const [Alarm, setAlarm] = useState({});
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    const navigate = useNavigate();

    const getAlarm = async () => {
      const response = await axios.get(
        `http://localhost:5000/api/alarms/${alarmaId}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(response);
      setAlarm(response.data.alarms);
    };
    useEffect(() => {
      getAlarm();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
 const deleteAlarma = async (e) => {
    e.preventDefault();
    let opcion = window.confirm("¿Estas seguro de borrar la Alarma?");
    if (opcion == true) {
      try {
        const response = await axios.delete(
          `http://localhost:5000/api/alarms/${alarmaId}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        console.log(response);
        setTimeout(() => {
          // window.location.href = "/usuario" nos refresca la pagina, es recomendable usarlo para actualizar un estado
          navigate("/tAlarma");
        });
      } catch (error) {
        console.log(error.response);
      }
    }
  };
    return (
      <>
        {role == 1 ? (
          <div className="fondoAlmAdm">
            <div className="contenedorAlmAdm">
              <div className="descripcionAlmAdm">
                <h2>{Alarm.title}</h2>
                <h5>Aviso a las: {Alarm.alarm}</h5>
                <div className='cajaBotAlmAdm'>
                <Link to="/tAlarma" className="botonAlmAdm">
                  Volver
                </Link>
                <Link to={`/modifyAlm/${alarmaId}`} className="modificarNoAdm">Modificar Nota</Link>
                <AiFillDelete className="botonDelAlmAdm" onClick={deleteAlarma}/>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="fondoNotaUs">
            <div className="contenedorNotaUs">
              <div className="descripcionNotaUs">
                <h1>Descripcion de la nota:</h1>
                <h2>{Alarm.title}</h2>
                <h5>Aviso a las: {Alarm.alarm}</h5>
                <div className='cajaBotUs'>
                <Link to="/tAlarma" className="botonUsAl">
                  Volver
                </Link>
                <Link to={`/modifyAlm/${alarmaId}`} className="modificarNoAdm">Modificar Nota</Link>
                <AiFillDelete className="botonAlEv" onClick={deleteAlarma}/>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
}

export default Alarmas