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
    setNotes(response.data.Notas.notes);
  };

  useEffect(() => {
    getNotes();
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
                    <h2>Titulo: {Notas.title}</h2>
                    <h3>Fecha: {Notas.fecha}</h3>
                    <h3>Descripción: {Notas.tareas}</h3>
                    <Link to={`/Notas/${Notas._id}`} className="enlacesNotaAdm">
                      {" "}
                      Ver Nota
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="cajaCirculoNotAdm">
            <Link to="/newNot" className="circuloNotaAdm">
              <BsPencilSquare />
            </Link>
          </div>
        </div>
      ) : (
        <div className="card fondoNotasUs">
          <div className="card-body contenedorNotasUs">
            <h1 className="card-title tituloNotaUs">Tus Notas</h1>
            <div className="contenidoNotaUs card-text">
              {notes.map((Notas) => {
                return (
                  <div key={Notas._id}>
                    <h2>{Notas.title}</h2>
                    <h3>{Notas.fecha}</h3>
                    <h3>{Notas.tareas}</h3>
                    <Link to={`/Notas/${Notas._id}`} className="enlacesNotaUs">
                      Ver notas
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
