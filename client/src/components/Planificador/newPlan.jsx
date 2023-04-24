import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./newPlan.css"
const NewPlan = () => {
  const [planif, setPlanif] = useState({
    title: "",
    description: "",
  });
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    if (planif !== null) {
      setPlanif({ ...planif, [name]: value });
    }
    console.log(planif);
  };

  const PlnSubmit = async (event) => {
    event.preventDefault();
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
      setPlanif(response);

       setTimeout(() => {
         window.location.href = "/tPlanificador";
       }, 3000);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
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
                cols="100"
                rows="10"
                onChange={onChangeInput}
                value={planif ? planif.description : ""}
              />
              <label className="labelPAdm" htmlFor="fecha">
                Fecha del planificador:
              </label>
              <input
                className="inputPAdm2"
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
                <Link to="/tPlanificador" className="botonVolPAdm">
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
                className="txt-hidden inputPUs"
                type="textarea"
                id="description"
                name="description"
                cols="100"
                rows="10"
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
                <Link to="/tPlanificador" className="botonVolPUs">
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
