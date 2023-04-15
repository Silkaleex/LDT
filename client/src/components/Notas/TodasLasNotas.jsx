/* eslint-disable eqeqeq */
import React from "react";
import axios from "axios";
import "./todasLasNotas.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";

const TodasLasNotas = () => {
  const [notes, setNotes] = useState([]);
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const getNotes = async () => {
    const response = await axios.get("http://localhost:5000/api/toNotes", {
      headers: {
        Authorization: token,
      },
    });
    console.log(response);
    setNotes(response.data.Notas.notes);
  };

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {role == 1 ? (
        <div className="fondoNotasAdm">
          <div className="contenedorNotasAdm">
            <h1 className="tituloNotaAdm">Tus Notas</h1>
            <div className="contenidoNotaAdm">
              {notes.map((Notas) => {
                return (
                  <div key={Notas._id} className="bordeCajaEnlcAdm">
                    <Link to={`/Notas/${Notas._id}`} className="enlacesNotaAdm">
                      <h2>{Notas.title}</h2>
                      <h3>{Notas.fecha}</h3>
                      <h3>{Notas.tareas}</h3>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="cajaCirculoNotUs">
            <Link to="/newNot" className="circuloNotaUs">
              <BsPencilSquare />
            </Link>
          </div>
        </div>
      ) : (
        <div className="fondoNotasUs">
          <div className="contenedorNotasUs">
            <h1 className="tituloNotaUs">Tus Notas</h1>
            <div className="contenidoNotaUs">
              {notes.map((Notas) => {
                return (
                  <div key={Notas._id} className="bordeCajaEnlcUs">
                    <Link to={`/Notas/${Notas._id}`} className="enlacesNotaUs">
                      <h2>{Notas.title}</h2>
                      <h3>{Notas.fecha}</h3>
                      <h3>{Notas.tareas}</h3>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="cajaCirculoNotUs">
            <Link to="/newNot" className="circuloNotaUs">
              <CiEdit />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default TodasLasNotas;
