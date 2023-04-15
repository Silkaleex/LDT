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
    title: "",
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
    console.log(response.data.notas);
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
      console.log(response);
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
              <label className="labelNotAdm" htmlFor="titulo">
                Titulo:
              </label>
              <input
                className="inputAdm"
                placeholder="Titulo"
                type="text"
                name="title"
                id="titulo"
                value={nota.title}
                onChange={onChangeInput}
              ></input>
              <label className="labelNotAdm" htmlFor="tareas">
                Tareas:
              </label>
              <textarea
                className="tareasAdm inputAdm"
                placeholder="Descripcion de tu Nota"
                type="textarea"
                name="tareas"
                id="tareas"
                cols="100"
                rows="10"
                value={nota.tareas}
                onChange={onChangeInput}
              ></textarea>
              <label className="labelNotAdm" htmlFor="fecha">
                Fecha:
              </label>
              <input
                className="inputAdm"
                placeholder="Fecha"
                type="text"
                name="fecha"
                id="fecha"
                value={nota.fecha}
                onChange={onChangeInput}
              ></input>
              <div className="containerBotonesAdm">
                <button className="botonModNotAdm">Modificar Libro</button>
                <Link to="/tNotas" className="botonVolNotAdm">
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
              <label className="labelNotUs" htmlFor="titulo">
                Titulo:
              </label>
              <input
                className="inputUs"
                placeholder="Titulo"
                type="text"
                name="title"
                id="titulo"
                value={nota.title}
                onChange={onChangeInput}
              ></input>
              <label className="labelNotUs" htmlFor="tareas">
                Tareas:
              </label>
              <textarea
                className="tareasUs inputUs"
                placeholder="Descripcion de la NNota"
                type="textarea"
                name="tareas"
                id="tareas"
                cols="100"
                rows="10"
                value={nota.tareas}
                onChange={onChangeInput}
              ></textarea>
              <label className="labelNotUs" htmlFor="fecha">
                Fecha:
              </label>
              <input
                className="inputUs"
                placeholder="Fecha"
                type="text"
                name="fecha"
                id="fecha"
                value={nota.fecha}
                onChange={onChangeInput}
              ></input>
              <div className="containerBotonesUs">
                <button className="botonModNotUs">Modificar Nota</button>
                <Link to="/tNotas" className="botonVolNotUs">
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
