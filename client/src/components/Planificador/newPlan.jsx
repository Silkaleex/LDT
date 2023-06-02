import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./newPlan.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const NewPlan = () => {
  const [planif, setPlanif] = useState({
    title: "",
    description: "",
    fecha: "",
  });
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    if (planif !== null) {
      setPlanif({ ...planif, [name]: value });
    }
    console.log(planif);
    if (name === "fecha") {
      const currentDate = new Date().toISOString().split("T")[0];

      if (value >= currentDate) {
        setPlanif({ ...planif, [name]: value });
      } else {
        toast.error("Por favor, selecciona una fecha actual o proxima");
      }
    } else {
      setPlanif({ ...planif, [name]: value });
    }
  };
  const PlnSubmit = async (event) => {
    event.preventDefault();
    if (!planif.title || !planif.fecha || !planif.description) {
      toast.error('Por favor, completa todos los campos');
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/planificador",
        {
          ...planif,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      console.log(response);
      setPlanif({
        title: "",
        description: "",
        fecha: "",
      });

      setTimeout(() => {
        window.location.href = "/tPlanificador";
      }, 3000);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <ToastContainer />
      {role == 1 ? (
        <div className="cajaAdmP">
          <form onSubmit={PlnSubmit}>
            <div className="containerPAdm">
              <label className="labelPAdm" htmlFor="title">
                Titulo:
              </label>
              <input
                className="inputPAdm1"
                type="text"
                id="title"
                name="title"
                placeholder="Descipcion del Planificador"
                onChange={onChangeInput}
                value={planif ? planif.title : ""}
              />

              <label className="labelPAdm" htmlFor="description">
                Sobre el Planning:
              </label>
              <textarea
                className="inputPAdm2 txt-hidden"
                type="textarea"
                id="description"
                name="description"
                placeholder="Este mes mis metas seran..."
                onChange={onChangeInput}
                value={planif ? planif.description : ""}
              />
              <label className="labelPAdm" htmlFor="fecha">
                Fecha del planificador:
              </label>
              <input
                className="inputPAdm3"
                type="date"
                id="fecha"
                name="fecha"
                onChange={onChangeInput}
                value={planif ? planif.fecha : ""}
              />
              <div className="containerBotonesPAdm">
                <button className="botonAddPAdm" type="submit">
                  Crear Planificador
                </button>
                <Link to="/usuario" className="botonVolPAdm">
                  Volver
                </Link>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="cajaUsP">
          <form onSubmit={PlnSubmit}>
            <div className="containerPUs">
              <label className="labelPUs" htmlFor="title">
                Titulo:
              </label>
              <input
                className="inputPUs"
                type="text"
                id="title"
                name="title"
                placeholder="titulo"
                onChange={onChangeInput}
                value={planif ? planif.title : ""}
              />
              <label className="labelPUs" htmlFor="description">
                Sobre el Planning:
              </label>
              <textarea
                className="txt-hidden txtPLanUs"
                type="textarea"
                id="description"
                name="description"
                placeholder="Este mes mis metas seran..."
                onChange={onChangeInput}
                value={planif ? planif.description : ""}
              />
              <label className="labelPUs" htmlFor="fecha">
                Fecha del planificador:
              </label>
              <input
                className="inputPUs"
                type="date"
                id="fecha"
                name="fecha"
                onChange={onChangeInput}
                value={planif ? planif.fecha : ""}
              />
              <div className="containerBotonesPUs">
                <button className="botonAddPUs" type="submit">
                  Crear Planificador
                </button>
                <Link to="/usuario" className="botonVolPUs">
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

export default NewPlan;
