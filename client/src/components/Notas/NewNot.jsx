import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./newNot.css";
const NewNot = () => {
  const [note, setNote] = useState({
    title: "",
    tareas: "",
    fecha: "",
  });
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role")
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    if (note !== null) {
      setNote({ ...note, [name]: value });
    }
    console.log(note);
  };

  const noteSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/notas",
        {
          ...note,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      console.log(response);
      setNote(response.data.Notas);

      setTimeout(() => {
        window.location.href = "/tNotas";
      }, 3000);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
           {role == 1 ? (
      <div className="cajaAdmNot">
        <form onSubmit={noteSubmit}>
          <div className="containerNotasAdm">
            <label className="labelNotAdm" htmlFor="titulo">
              Titulo:
            </label>
            <input
              className="inputAdm"
              type="text"
              id="title"
              name="title"
              onChange={onChangeInput}
              value={note ? note.title : ""}
            />
            <label className="labelNotAdm" htmlFor="tareas">
              Tareas:
            </label>
            <textarea
              className="tareasUs inputAdm"
              type="text"
              id="tarea"
              name="tareas"
              cols="100"
              rows="10"
              onChange={onChangeInput}
              value={note ? note.tareas : ""}
            />
            <label className="labelNotAdm" htmlFor="fecha">
              Fecha:
            </label>
            <input
              className="inputAdm"
              type="text"
              id="fecha"
              name="fecha"
              onChange={onChangeInput}
              value={note ? note.fecha : ""}
            />
            <div className="containerBotonesAdm">
              <button className="botonAddNotAdm" type="submit">
                Crear Nota
              </button>
              <Link to="/tNotas" className="botonVolNotAdm">
                Volver
              </Link>
            </div>
          </div>
        </form>
      </div>
  ) : (
    <div className="cajaUsNot">
 <form onSubmit={noteSubmit}>
      <div className="containerNotasUs">
        <label className="labelNotUs" htmlFor="titulo">
          Titulo:
        </label>
        <input
              className="inputUs"
              type="text"
              id="title"
              name="title"
              onChange={onChangeInput}
              value={note ? note.title : ""}
            />
        <label className="labelNotUs" htmlFor="tareas">
          Tareas:
        </label>
        <textarea
              className="tareasUs inputUs"
              type="text"
              id="tarea"
              name="tareas"
              cols="100"
              rows="10"
              onChange={onChangeInput}
              value={note ? note.tareas : ""}
            />
        <label className="labelNotUs" htmlFor="fecha">
          Fecha:
        </label>
        <input
              className="inputUs"
              type="text"
              id="fecha"
              name="fecha"
              onChange={onChangeInput}
              value={note ? note.fecha : ""}
            />
        <div className="containerBotonesUs">
        <button className="botonAddNotUs" type="submit">
                Crear Nota
              </button>
          <Link to="/tNotas" className="botonVolNotUs">
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

export default NewNot;
