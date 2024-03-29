import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./modificacion.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ModifcacionAlm = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  console.log(token);
  const { alarmaId } = useParams();
  const Navigate = useNavigate();
  
  const [Alm, setAlm] = useState({
    fecha: "",
    alarm:""
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setAlm({ ...Alm, [name]: value });
    console.log(Alm);
  };
  const getAl = async () => {
    try {
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
    } catch (error) {
      console.log(error.response);
    }
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
     // Mostrar notificación de éxito
     toast.success('Tu Alarma se modificó correctamente');
     setTimeout(() => {
       Navigate(`/alarma/${alarmaId}`);
     }, 2000);
   } catch (error) {
     console.log(error.response);
     // Mostrar notificación de error
     toast.error('Hubo un problema al modificar la alarma');
   }
  };
  return (
    <>
       <ToastContainer />
      {role == 1 ? (
        <div className="cajaAdmAlm">
          <form onSubmit={modificacionSubmit}>
            <div className="containerAlmAdm">
              <label className="labelAlmAdm" htmlFor="Fecha">
                Fecha:
              </label>
              <input
                className="inputAdm"
                type="date"
                name="fecha"
                id="Fecha"
                value={Alm.fecha}
                onChange={onChangeInput}
              ></input>
              <label className="labelNotAdm" htmlFor="alarm">
                Hora de la Alarma:
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
                <Link to="/usuario" className="botonVolAlmAdm">
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
              <label className="labelAlmUs" htmlFor="Fecha">
                Fecha:
              </label>
              <input
                className="inputUs"
                type="date"
                name="fecha"
                id="Fecha"
                value={Alm.fecha}
                onChange={onChangeInput}
              ></input>
              <label className="labelAlmUs" htmlFor="alarm">
                Hora de la Alarma:
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
                <button className="botonModAlmUs">Modificar Alarma</button>
                <Link to="/usuario" className="botonVolAlmUs">
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
