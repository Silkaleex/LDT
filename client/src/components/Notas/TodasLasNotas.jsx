/* eslint-disable eqeqeq */
import React from "react";
import axios from "axios";
import "./todasLasNotas.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";

const TodasLasNotas = () => {
  const [notes, setNotes] = useState([]);
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const getNotes = async () => {
    const response = await axios.get("http://localhost:5000/api/toNotas", {
      headers: {
        Authorization: token,
      },
    });
    // console.log(response);
    setNotes(response.data.Notas);
  };

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(notes)
  return (
    <>
    {role == 1 ? (

    <div className="fondoNotasAdm">
        <div className="contenedorNotasAdm">
          <h1 className="tituloNotaAdm">Tus Notas</h1>
          <div className="contenidoNotaAdm">
            {notes.map((Notas) => {
              return (
                <div key={Notas._id}>
                  <Link to={`/Notas/${Notas._id}`} className="enlacesNotaAdm">
                    <h2>{Notas.title}</h2>
                    <h3>{Notas.fecha}</h3>
                    <h3>{Notas.tareas}</h3>
                  </Link>
                  <div className="eliminarNotaAdm">
                    {" "}
                    <AiFillCloseCircle />
                  </div>
                </div>
              );
            })
            }
          </div>
        </div>
        </div>) : (
          <div className="fondoNotasUs">
        <div className="contenedorNotasUs">
          <h1 className="tituloNotaUs">Tus Notas</h1>
          <div className="contenidoNotaUs">
            {notes.map((Notas) => {
              return (
                <div key={Notas._id}>
                  <Link to={`/Notas/${Notas._id}`} className="enlacesNotaUs">
                    <h2>{Notas.title}</h2>
                    <h3>{Notas.fecha}</h3>
                    <h3>{Notas.tareas}</h3>
                  </Link>
                  <div className="eliminarNotaUs">
                    {" "}
                    <AiFillCloseCircle />
                  </div>
                </div>
              );
            })
            }
          </div>
        </div>
        </div>
        )}
    </>
  );
};

export default TodasLasNotas;
