import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './newAlarm.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewAlm = () => {
  const [alarma, setAlarma] = useState({
    title:"",
    alarm: "",
    fecha:""
  });
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    if (name === "fecha") {
      setAlarma({ ...alarma, [name]: value });
    }
    console.log(alarma);
  if (name === "fecha") {
    // Obtener la fecha actual en formato YYYY-MM-DD
    const currentDate = new Date().toISOString().split("T")[0];
    
    // Verificar si la fecha seleccionada es válida (actual o futura)
    if (value >= currentDate) {
      setAlarma({ ...alarma, [name]: value });
    } else {
      // Mostrar una notificación o realizar alguna acción para indicar que la fecha no es válida
      toast.error("Por favor, selecciona una fecha actual o proxima");
    }
  } else {
    setAlarma({ ...alarma, [name]: value });
  }
  };

  const almSubmit = async (event) => {
    event.preventDefault();
  
    if (!alarma.title || !alarma.fecha || !alarma.alarm) {
      toast.error('Por favor, completa todos los campos');
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/alarms",
        {
          ...alarma,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
       setAlarma(response.data.alarmas);
      // Verificar si el correo electrónico se envió correctamente
       if (setAlarma) {
      // Mostrar notificación de éxito
        toast.success('El correo electrónico se envió correctamente');
      } else {
    // Mostrar notificación de error si ocurrió un problema al enviar el correo
        toast.error('Hubo un problema al enviar el correo electrónico');
      }
       setTimeout(() => {
         window.location.href = "/tAlarma";
       }, 5000);
    // Resto del código de redirección o manipulación del estado
    } catch (error) {
      console.log(error.response);
   // Mostrar notificación de error en caso de errores de red o del servidor
      toast.error('Hubo un error al procesar la solicitud');
    }
  };

  return (
    <div>
            <ToastContainer />
      {role == 1 ? (
        <div className="cajaAdmAlarma">
          <form onSubmit={almSubmit}>
            <div className="containerAlmAdm">
              <label className="labelAlmAdm" htmlFor="title">
                Titulo de la Alarma:
              </label>
              <input
                className="inputAlmAdm"
                type="text"
                id="title"
                name="title"
                placeholder="Titulo de la Alarma"
                onChange={onChangeInput}
                value={alarma ? alarma.title : ""}
              />

              <label className="labelAlmAdm" htmlFor="fecha">
                Fecha de la Alarma:
              </label>
              <input
                className="inputAlmAdm"
                type="date"
                id="fecha"
                name="fecha"
                onChange={onChangeInput}
                value={alarma ? alarma.fecha : ""}
              />

              <label className="labelAlmAdm" htmlFor="alarm">
                Hora de la Alarma:
              </label>
              <input
                className="inputAlmAdm"
                type="text"
                id="alarm"
                name="alarm"
                placeholder="Hora del aviso"
                onChange={onChangeInput}
                
                value={alarma ? alarma.alarm : ""}
              />
              <div className="containerBotonesAdm">
                <button className="botonAddAlmAdm" type="submit">
                  Crear Alarma
                </button>
                <Link to="/usuario" className="botonVolAlmAdm">
                  Volver
                </Link>
              </div>
            </div>
          </form>
        </div>
      ) : (
            <>
            <ToastContainer />
            <div className="cajaUsAl">
            <form onSubmit={almSubmit}>
              <div className="containerAlmUs">
                <label className="labelAlmUs" htmlFor="title">
                  Titulo de la Alarma:
                </label>
                <input
                  className="inputAlmUs"
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Titulo de la Alarma"
                  onChange={onChangeInput}
                  value={alarma ? alarma.title : ""} />
                <label className="labelAlmUs" htmlFor="fecha">
                  Fecha de la Alarma:
                </label>
                <input
                  className="inputAlmUs"
                  type="date"
                  id="fecha"
                  name="fecha"
                  onChange={onChangeInput}
                  value={alarma ? alarma.fecha : ""} />
                <label className="labelAlmUs" htmlFor="alarm">
                  Hora de la Alarma:
                </label>
                <input
                  className="inputAlmUs"
                  type="text"
                  id="alarm"
                  name="alarm"
                  placeholder="Hora del Aviso"
                  onChange={onChangeInput}
                  value={alarma ? alarma.alarm : ""} />
                <div className="containerBotonesUs">
                  <button className="botonAddAlmUs" type="submit">
                    Crear Alarma
                  </button>
                  <Link to="/usuario" className="botonVolAlmUs">
                    Volver
                  </Link>
                </div>
              </div>
            </form>
          </div></>
      )}
    </div>
  );
};

export default NewAlm;
