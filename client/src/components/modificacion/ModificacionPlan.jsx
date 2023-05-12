import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./modificacion.css";
const ModifcacionPlan = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const { planificadorId } = useParams();
  const Navigate = useNavigate();
  const [pln, setpln] = useState({
    description:"",
    fecha:"",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setpln({ ...pln, [name]: value });
    console.log(pln);
  };
  const getPln = async () => {
    const response = await axios.get(
        `http://localhost:5000/api/planificador/${planificadorId}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    console.log(response);
    setpln(response.data.plan);
  };
  useEffect(() => {
    getPln();
  }, []);

  const modificacionSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/api/planificador/${planificadorId}`,
        { ...pln }
      );
      console.log(response);
      setTimeout(() => {
        Navigate(`/planificar/${planificadorId}`);
      }, 2000);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <>
      {role == 1 ? (
        <div className="cajaAdmPl">
          <form onSubmit={modificacionSubmit}>
            <div className="containerPlAdm">
            <label className="labelPlAdm" htmlFor="fecha">
                Fecha del Planificador:
              </label>
              <input
                className="inputPlAdm txt-hidden"
                type="date"
                name="fecha"
                id="fecha"
                value={pln.fecha}
                onChange={onChangeInput}
              />
              <label className="labelPlAdm" htmlFor="description">
                Description:
              </label>
              <textarea
                className="txtPlnAdm txt-hidden"
                type="textarea"
                name="description"
                id="description"
                value={pln.description}
                onChange={onChangeInput}
              />
              <div className="containerBotonesAdm">
                <button className="botonModPlnAdm">Modificar Libro</button>
                <Link to="/usuario" className="botonVolPlAdm">
                  Volver
                </Link>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="cajaUsPl">
          <form onSubmit={modificacionSubmit}>
            <div className="containerPlUs">
            <label className="labelPlUs" htmlFor="fecha">
                Fecha:
              </label>
              <input
                className="inputPlUs txt-hidden"
                type="date"
                name="fecha"
                id="fecha"
                value={pln.fecha}
                onChange={onChangeInput}
              />
              <label className="labelPlUs" htmlFor="description">
                Descripción:
              </label>
              <textarea
                className="textareaPlnUs txt-hidden"
                type="textarea"
                name="description"
                id="description"
                value={pln.description}
                onChange={onChangeInput}
              ></textarea>
              <div className="containerBotonesUsPl">
                <button className="botonModPlUs">Modificar Nota</button>
                <Link to="/usuario" className="botonVolPlUs">
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

export default ModifcacionPlan;
