import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./modificacion.css";
const Modifcacion = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  console.log(token);
  const { notaId } = useParams();
  const Navigate = useNavigate();
  const [nota, setNota] = useState({
    fecha: "",
    tareas: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setNota({ ...nota, [name]: value });
    console.log(nota);
  };
  const getNotas = async () => {
    const response = await axios.get(
      `http://localhost:5000/api/notas/${notaId}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    setNota(response.data.notas);
  };
  useEffect(() => {
    getNotas();
  }, []);

  const modificacionSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/api/notas/${notaId}`,
        { ...nota }
      );
      setTimeout(() => {
        Navigate(`/notas/${notaId}`);
      }, 2000);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <>
      {role == 1 ? (
        <div className="cajaAdmNot">
          <form onSubmit={modificacionSubmit}>
            <div className="containerNotasAdm">
              <label className="labelNotAdm" htmlFor="tareas">
                Tareas:
              </label>
              <textarea
                className="tareasAdm textareaNotesAdm"
                placeholder="Descripcion de tu Nota"
                type="textarea"
                name="tareas"
                id="tareas"
                value={nota.tareas}
                onChange={onChangeInput}
              ></textarea>
              <label className="labelNotAdm" htmlFor="fecha">
                Fecha:
              </label>
              <input
                className="inputAdm"
                type="date"
                name="fecha"
                id="fecha"
                value={nota.fecha}
                onChange={onChangeInput}
              ></input>
              <div className="containerBotonesAdm">
                <button className="botonModNotAdm">Modificar Nota</button>
                <Link to="/usuario" className="botonVolNotAdm">
                  Volver
                </Link>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="cajaUsNot">
          <form onSubmit={modificacionSubmit}>
            <div className="containerNotasUs">
              <label className="labelNotUs" htmlFor="tareas">
                Tareas:
              </label>
              <textarea
                className="tareasUs"
                placeholder="Descripcion de la Nota"
                type="textarea"
                name="tareas"
                id="tareas"
                value={nota.tareas}
                onChange={onChangeInput}
              ></textarea>
              <label className="labelNotUs" htmlFor="fecha">
                Fecha:
              </label>
              <input
                className="inputUs"
                type="date"
                name="fecha"
                id="fecha"
                value={nota.fecha}
                onChange={onChangeInput}
              ></input>
              <div className="containerBotonesUs">
                <button className="botonModNotUs">Modificar Nota</button>
                <Link to="/usuario" className="botonVolNotUs">
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

export default Modifcacion;
