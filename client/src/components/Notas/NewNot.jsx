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
  const role = localStorage.getItem("role");
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
        window.location.href = "/usuario";
      }, 3000);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      {role == 1 ? (
        <div className="cajaAdmNota">
          <form onSubmit={noteSubmit}>
            <div className="containerNotasAdmin">
              <label className="labelNotAdmin" htmlFor="titulo">
                Titulo:
              </label>
              <input
                className="inputAdmin"
                type="text"
                id="title"
                name="title"
                placeholder="Titulo de tu Nota"
                onChange={onChangeInput}
                value={note ? note.title : ""}
              />
              <label className="labelNotAdm" htmlFor="tareas">
                Descripcion de la nota:
              </label>
              <textarea
                className="txt-hidden txtNotesAdm"
                type="text"
                id="tarea"
                name="tareas"
                placeholder="Descripcion de la nota"
                onChange={onChangeInput}
                value={note ? note.tareas : ""}
              />
              <label className="labelNotAdm" htmlFor="fecha">
                Fecha de la Nota:
              </label>
              <input
                className="inputAdmin"
                type="date"
                id="fecha"
                name="fecha"
                placeholder="Fecha de la Nota"
                onChange={onChangeInput}
                value={note ? note.fecha : ""}
              />
              <div className="containerBotonesAdm">
                <button className="botonAddNotAdm" type="submit">
                  Crear Nota
                </button>
                <Link to="/usuario" className="botonVolNotAdm">
                  Volver
                </Link>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="cajaUsuarioNot">
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
                placeholder="Descripcion del Titulo"
                onChange={onChangeInput}
                value={note ? note.title : ""}
              />
              <label className="labelNotUs" htmlFor="tareas">
                Descripcion de la nota:
              </label>
              <textarea
                className=" txt-hidden textareaNotUs"
                type="text"
                id="tarea"
                name="tareas"
                placeholder="Descripcion de la nota"
                onChange={onChangeInput}
                value={note ? note.tareas : ""}
              />
              <label className="labelNotUs" htmlFor="fecha">
                Fecha de la Nota:
              </label>
              <input
                className="inputUs "
                type="date"
                id="fecha"
                name="fecha"
                placeholder="Fecha de la Nota"
                onChange={onChangeInput}
                value={note ? note.fecha : ""}
              />
              <div className="containerBotonesUs">
                <button className="botonAddNotUs" type="submit">
                  Crear Nota
                </button>
                <Link to="/usuario" className="botonVolNotUs">
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
