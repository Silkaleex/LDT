import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./modificacion.css";

const ModifcacionAlm = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  console.log(token);
  const { alarmaId } = useParams();
  const Navigate = useNavigate();
  
  const [Alm, setAlm] = useState({
    title: "",
    alarm:""
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setAlm({ ...Alm, [name]: value });
    console.log(Alm);
  };
  const getAl = async () => {
    const response = await axios.get(
      `http://localhost:5000/api/alarms/${alarmaId}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    console.log(response);
    setAlm(response.data.alarms);
  };
  useEffect(() => {
    getAl();
  }, []);

  const modificacionSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/api/alarms/${alarmaId}`,
        { ...Alm }
      );
      console.log(response);
      setTimeout(() => {
        Navigate(`/alarma/${alarmaId}`);
      }, 2000);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <>
      {role == 1 ? (
        <div className="cajaAdmAlm">
          <form onSubmit={modificacionSubmit}>
            <div className="containerAlmAdm">
              <label className="labelAlmAdm" htmlFor="titulo">
                Titulo:
              </label>
              <input
                className="inputAdm"
                placeholder="Titulo"
                type="text"
                name="title"
                id="titulo"
                value={Alm.title}
                onChange={onChangeInput}
              ></input>
              <label className="labelNotAdm" htmlFor="alarm">
                Alarma:
              </label>
              <textarea
                className="tareasAdm inputAdm"
                placeholder="Descripcion de tu Nota"
                type="textarea"
                name="alarm"
                id="alarm"
                value={Alm.alarm}
                onChange={onChangeInput}
              ></textarea>
              <div className="containerBotonesAdm">
                <button className="botonModAlmAdm">Modificar Libro</button>
                <Link to="/tAlarma" className="botonVolAlmAdm">
                  Volver
                </Link>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="cajaUsAlm">
          <form onSubmit={modificacionSubmit}>
            <div className="containerAlmUs">
              <label className="labelAlmUs" htmlFor="titulo">
                Titulo:
              </label>
              <input
                className="inputUs"
                placeholder="Titulo"
                type="text"
                name="title"
                id="titulo"
                value={Alm.title}
                onChange={onChangeInput}
              ></input>
              <label className="labelAlmUs" htmlFor="alarm">
                Alarma:
              </label>
              <textarea
                className="tareasUs inputUs"
                placeholder="Descripcion de la Nota"
                type="textarea"
                name="alarm"
                id="alarm"
                value={Alm.alarm}
                onChange={onChangeInput}
              ></textarea>
              <div className="containerBotonesUs">
                <button className="botonModAlmUs">Modificar Nota</button>
                <Link to="/tAlarma" className="botonVolAlmUs">
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

export default ModifcacionAlm;
